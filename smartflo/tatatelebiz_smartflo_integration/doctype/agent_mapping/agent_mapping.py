# Copyright (c) 2026, Mithtech Innovative Solutions PVT LTD and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from smartflo.tatatelebiz_smartflo_integration.api.client import SmartfloAPI
import frappe

class AgentMapping(Document):
    @frappe.whitelist()
    def test_smartflo_agent(self, destination_number):
        import re
        def sanitize_local(num):
            if not num: return ""
            return re.sub(r"[^\d]", "", str(num))

        try:
            # Route Determination
            if self.device_type == "PSTN (Mobile/Landline)":
                if not self.call_forward_number:
                    frappe.throw("Call Forwarding Number is required for PSTN routing.")
                agent_number = sanitize_local(self.call_forward_number)
            else:
                if not self.smartflo_agent_id:
                    frappe.throw("Agent Extension ID is required for Softphone routing.")
                agent_number = sanitize_local(self.smartflo_agent_id)

            caller_id = sanitize_local(self.did_number)
            number = sanitize_local(destination_number)

            # E.164 Tata Structural Guard
            if len(caller_id) == 10: caller_id = "91" + caller_id
            if len(agent_number) == 10: agent_number = "91" + agent_number
            if len(number) == 10: number = "91" + number

            api = SmartfloAPI()
            res = api.make_outbound_session_call(
                agent_number=agent_number,
                destination_number=number,
                caller_id=caller_id
            )
            return res
        except Exception as e:
            frappe.log_error("Agent Mapping Test Connection Failed", str(e))
            frappe.throw(str(e))
