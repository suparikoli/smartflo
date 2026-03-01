import frappe
from frappe import _
import json

@frappe.whitelist(allow_guest=True)
def handle_event():
    """Endpoint for receiving Smartflo Webhook events."""
    settings = frappe.get_single("Smartflo Settings")
    if not settings.enable_webhook_processing:
        return {"status": "ignored", "message": "Webhook processing is disabled."}
        
    # Validate secret if required (can be matched against request headers)
    # req_secret = frappe.request.headers.get("X-Smartflo-Signature")
    
    try:
        data = frappe.request.get_data(as_text=True)
        payload = json.loads(data)
        
        # Log for debugging
        if settings.enable_debug_logs:
            frappe.logger("smartflo").debug(f"Received Webhook: {data}")
            
        settings.db_set("last_webhook_received_at", frappe.utils.now())
        
        event_type = payload.get("event")
        
        if event_type == "call.ringing":
            handle_ringing(payload)
        elif event_type == "call.connected":
            handle_connected(payload)
        elif event_type == "call.completed" or event_type == "call.hangup":
            handle_completed(payload)
            
        return {"status": "success"}
    except Exception as e:
        frappe.log_error("Smartflo Webhook Error", str(e))
        return {"status": "error", "message": str(e)}, 500


def handle_ringing(payload):
    """Broadcast an incoming call so the UI popup can be shown."""
    call_uuid = payload.get("uuid") or payload.get("call_id")
    direction = payload.get("direction", "Incoming").capitalize()
    
    # Try creating or fetching the call log immediately
    if not frappe.db.exists("Smartflo Logs", {"id": call_uuid}):
        doc = frappe.get_doc({
            "doctype": "Smartflo Logs",
            "id": call_uuid,
            "from": payload.get("caller_number"),
            "to": payload.get("destination_number"),
            "type": direction,
            "status": "Ringing",
            "start_time": frappe.utils.now()
        })
        doc.insert(ignore_permissions=True)
    else:
        doc = frappe.get_doc("Smartflo Logs", {"id": call_uuid})
        
    # Publish event to front-end for the specific agent/extension
    frappe.publish_realtime(
        "smartflo_incoming_call",
        message={
            "uuid": call_uuid,
            "caller": doc.from_ if direction == "Incoming" else doc.to,
            "direction": direction,
            "call_log_name": doc.name
        },
        after_commit=True
    )


def handle_connected(payload):
    """Update call log status to In Progress."""
    call_uuid = payload.get("uuid")
    if frappe.db.exists("Smartflo Logs", {"id": call_uuid}):
        frappe.db.set_value("Smartflo Logs", {"id": call_uuid}, "status", "In Progress")
        


def handle_completed(payload):
    """Finalize the call log with duration, recording, and final status."""
    call_uuid = payload.get("uuid")
    
    filters = {"id": call_uuid}
    if not frappe.db.exists("Smartflo Logs", filters):
        # Fallback if ringing event didn't arrive
        doc = frappe.get_doc({
            "doctype": "Smartflo Logs",
            "id": call_uuid,
            "from": payload.get("caller_number"),
            "to": payload.get("destination_number"),
            "type": payload.get("direction", "Incoming").capitalize(),
        })
    else:
        log_name = frappe.db.get_value("Smartflo Logs", filters, "name")
        doc = frappe.get_doc("Smartflo Logs", log_name)
        
    doc.status = payload.get("status", "Completed").capitalize()
    doc.duration = payload.get("duration", 0)
    doc.end_time = frappe.utils.now()
    if payload.get("recording_url"):
        doc.recording_url = payload.get("recording_url")
        
    doc.save(ignore_permissions=True)
