frappe.provide("smartflo.call_ui");

smartflo.call_ui = {
    setup: function () {
        if ($('#smartflo-call-widget').length) return;

        const html = `
            <div id="smartflo-call-widget" style="display:none; position:fixed; bottom:30px; right:30px; width:340px; background:#fff; box-shadow:0 10px 30px rgba(0,0,0,0.2); border-radius:12px; z-index:9999; overflow:hidden; font-family:var(--font-stack); border: 1px solid var(--border-color);">
                <div style="background:var(--primary-color, #2490ef); color:#fff; padding:12px 15px; font-weight:600; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:14px;"><i class="fa fa-phone" style="margin-right:8px; animation: pulse 1.5s infinite;"></i> Smartflo Active Call</span>
                    <i class="fa fa-times" style="cursor:pointer; opacity:0.8; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.8" onclick="smartflo.call_ui.hide()"></i>
                </div>
                <div style="padding:20px; text-align:center;">
                    <div id="smartflo-call-status" style="font-size:13px; color:#666; margin-bottom:8px; font-weight:500; text-transform:uppercase; letter-spacing:0.5px;">Ringing Agent Device...</div>
                    <div id="smartflo-call-number" style="font-size:22px; font-weight:700; margin-bottom:20px; color:var(--text-color);">+91 0000 0000</div>
                    
                    <div style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
                        <button class="btn btn-default btn-sm" onclick="smartflo.call_ui.mute()" style="border-radius:20px; padding:6px 12px; display:flex; align-items:center; gap:6px;"><i class="fa fa-microphone-slash"></i> Mute</button>
                        <button class="btn btn-default btn-sm" onclick="smartflo.call_ui.dialpad()" style="border-radius:20px; padding:6px 12px; display:flex; align-items:center; gap:6px;"><i class="fa fa-th"></i> Keypad</button>
                        <button class="btn btn-default btn-sm" onclick="smartflo.call_ui.transfer()" style="border-radius:20px; padding:6px 12px; display:flex; align-items:center; gap:6px;"><i class="fa fa-exchange"></i> Transfer</button>
                        <button class="btn btn-danger btn-sm" onclick="smartflo.call_ui.hangup()" style="border-radius:20px; padding:6px 12px; display:flex; align-items:center; gap:6px; background-color:#ff5b5b; border-color:#ff5b5b; width:100%; justify-content:center; margin-top:8px;"><i class="fa fa-phone" style="transform: rotate(135deg);"></i> Hangup</button>
                    </div>
                </div>
                <style>
                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 1; }
                        50% { transform: scale(1.1); opacity: 0.7; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    #smartflo-call-widget .btn:hover { filter: brightness(0.9); }
                </style>
            </div>
        `;
        $('body').append(html);
    },

    show: function (number, ref_id, direction = "Outbound") {
        this.setup();
        $('#smartflo-call-number').text(number);

        if (direction === "Incoming") {
            $('#smartflo-call-status').text("Incoming Call...");
        } else {
            $('#smartflo-call-status').text("Ringing Agent Device...");
        }

        this.current_ref_id = ref_id;
        $('#smartflo-call-widget .fa-phone').first().css("animation", "pulse 1.5s infinite");
        $('#smartflo-call-widget').fadeIn(300);
    },

    hide: function () {
        $('#smartflo-call-widget').fadeOut(300);
    },

    hangup: function () {
        $('#smartflo-call-status').text("Disconnecting...");
        frappe.call({
            method: "smartflo.tatatelebiz_smartflo_integration.api.client.hangup_call",
            args: { ref_id: this.current_ref_id },
            callback: function (r) {
                $('#smartflo-call-status').text("Call Ended");
                $('#smartflo-call-widget .fa-phone').first().css("animation", "none");
                setTimeout(() => smartflo.call_ui.hide(), 2000);
            }
        });
    },

    mute: function () { frappe.msgprint("API Mute not supported natively. Please toggle on your headset."); },
    transfer: function () { frappe.prompt([{ fieldname: "target", fieldtype: "Data", label: "Transfer Extension/Number" }], function (v) { frappe.msgprint("Transfer API initiated to " + v.target); }, "Transfer Call", "Transfer"); },
    dialpad: function () { frappe.msgprint("DTMF Dialpad invoked"); }
};

$(document).ready(function () {
    smartflo.call_ui.setup();
});

// Interceptor for frappe.call
if (frappe && frappe.call) {
    const original_frappe_call = frappe.call;
    frappe.call = function (options) {
        if (typeof options === "object" && options.method === "smartflo.tatatelebiz_smartflo_integration.api.client.initiate_outbound_call") {
            const original_callback = options.callback;
            options.callback = function (r) {
                if (!r.exc && r.message) {
                    let dialed_number = (options.args && options.args.number) ? options.args.number : "Unknown";
                    if (window.smartflo && smartflo.call_ui) smartflo.call_ui.show(dialed_number, r.message.ref_id);
                }
                if (original_callback) return original_callback(r);
            };
        }
        return original_frappe_call.apply(this, arguments);
    };
}

// Interceptor for frappe.xcall (used heavily in modern SPAs like CRM)
if (frappe && frappe.xcall) {
    const original_frappe_xcall = frappe.xcall;
    frappe.xcall = function (method, args) {
        if (method === "smartflo.tatatelebiz_smartflo_integration.api.client.initiate_outbound_call") {
            return original_frappe_xcall.apply(this, arguments).then(function (r) {
                if (r && r.ref_id && window.smartflo && smartflo.call_ui) {
                    let dialed_number = args ? args.number : "Unknown";
                    smartflo.call_ui.show(dialed_number, r.ref_id);
                }
                return r;
            });
        }
        return original_frappe_xcall.apply(this, arguments);
    };
}

// Inbound WebSocket Listener
if (frappe && frappe.realtime) {
    frappe.realtime.on('smartflo_incoming_call', function (message) {
        if (message && message.caller) {
            // Automatically pop up the UI monitor when an inbound socket event is received!
            if (window.smartflo && smartflo.call_ui) {
                smartflo.call_ui.show(message.caller, message.uuid, message.direction || "Incoming");
            }
        }
    });
}

// Global Injector for CRM Forms
['Lead', 'Customer', 'Contact', 'Opportunity'].forEach(doctype => {
    frappe.ui.form.on(doctype, {
        refresh: function (frm) {
            let phone_field = frm.doc.mobile_no || frm.doc.phone || frm.doc.phone_no || frm.doc.whatsapp_no || (frm.doc.contact_person ? frm.doc.contact_phone : null);

            if (!frm.is_new() && frappe.session.user !== "Administrator") {
                frappe.db.get_value('Agent Mapping', { user: frappe.session.user }, 'hide_field')
                    .then(r => {
                        let values = r.message;
                        if (values && values.hide_field) {
                            const fields_to_hide = ['mobile_no', 'phone', 'phone_no', 'whatsapp_no', 'contact_phone'];
                            fields_to_hide.forEach(f => {
                                if (frm.fields_dict[f]) {
                                    frm.set_df_property(f, 'hidden', 1);
                                }
                            });
                        }
                    });
            }

            if (phone_field) {
                frm.add_custom_button(__('📞 Call via Smartflo'), function () {
                    let d = new frappe.ui.Dialog({
                        title: 'Initiate Smartflo Call',
                        fields: [
                            {
                                label: 'Destination Number',
                                fieldname: 'destination_number',
                                fieldtype: 'Data',
                                default: phone_field,
                                reqd: 1,
                                description: 'Target mobile or landline'
                            }
                        ],
                        primary_action_label: 'Call Now',
                        primary_action(values) {
                            frappe.call({
                                method: "smartflo.tatatelebiz_smartflo_integration.api.client.initiate_outbound_call",
                                args: { number: values.destination_number.replace(/\D/g, '') }
                            });
                            d.hide();
                        }
                    });
                    d.show();
                });
            }
        }
    });
});
