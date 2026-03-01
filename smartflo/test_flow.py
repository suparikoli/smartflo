import frappe
from smartflo.tatatelebiz_smartflo_integration.api.client import initiate_outbound_call

@frappe.whitelist()
def test_full_flow():
    frappe.session.user = "Administrator"
    
    print("\n==========================================")
    print("🚀 EXECUTING WEBRTC OUTBOUND TEST TRACE")
    print("==========================================")
    
    # Force WebRTC mapping
    try:
        mapping_name = frappe.db.get_value("Agent Mapping", {"user": "Administrator"}, "name")
        if mapping_name:
            doc = frappe.get_doc("Agent Mapping", mapping_name)
            doc.device_type = "Softphone (WebRTC)"
            doc.smartflo_agent_id = "1006"
            doc.save()
            frappe.db.commit()
            print("✅ Successfully forced Agent Mapping to WebRTC (1006)")
    except Exception as e:
        print(f"Failed to update Agent Mapping: {e}")
    
    try:
        # Firing the exact CRM UI Backend Function
        res = initiate_outbound_call(number="917483839540")
        print("\n✅ SUCCESS: Payload accepted by Smartflo:")
        print(res)
    except Exception as e:
        print("\n❌ ERRROR ENCOUNTERED:")
        import traceback
        traceback.print_exc()
        
    print("==========================================\n")
