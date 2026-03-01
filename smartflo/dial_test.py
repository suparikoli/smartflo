import frappe
from smartflo.tatatelebiz_smartflo_integration.api.client import SmartfloAPI

def test_dial():
    api = SmartfloAPI()
    agent = frappe.db.get_value("Agent Mapping", {"user": "Administrator"}, ["smartflo_agent_id", "did_number"], as_dict=True)
    print("Agent Map Found:", agent)
    
    if not agent:
        print("No agent map found for Administrator.")
        return
        
    try:
        res = api.make_outbound_session_call(
            agent_number=agent.smartflo_agent_id,
            destination_number="+918861577838",
            caller_id=agent.did_number
        )
        print("DIAL SUCCESS:", res)
    except Exception as e:
        print("DIAL FAILED:", str(e))
