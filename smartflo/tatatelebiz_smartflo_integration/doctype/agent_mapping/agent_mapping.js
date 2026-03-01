// Copyright (c) 2026, Mithtech Innovative Solutions PVT LTD and contributors
// For license information, please see license.txt

frappe.ui.form.on("Agent Mapping", {
    refresh(frm) {
    },

    test_connection(frm) {
        if (!frm.doc.smartflo_agent_id) {
            frappe.msgprint(__("Please enter the Agent Number."));
            return;
        }

        frappe.prompt([
            {
                label: 'Target Destination Number',
                fieldname: 'destination_number',
                fieldtype: 'Data',
                reqd: 1,
                description: 'Enter a phone number to simulate an outbound call to'
            }
        ], (values) => {
            frm.call({
                method: "test_smartflo_agent",
                doc: frm.doc,
                args: {
                    destination_number: values.destination_number
                },
                freeze: true,
                freeze_message: __("Initiating Call..."),
                callback: function (r) {
                    if (!r.exc && r.message) {
                        if (window.smartflo && smartflo.call_ui) {
                            smartflo.call_ui.show(values.destination_number, r.message.ref_id || "test");
                        } else {
                            frappe.msgprint({
                                title: __("Call Successful"),
                                indicator: "green",
                                message: __("Smartflo successfully initiated the call! Check your device.")
                            });
                        }
                    }
                }
            });
        }, __("Test Outbound Call Settings"), __("Call"));
    }
});
