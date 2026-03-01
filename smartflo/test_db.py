import frappe

@frappe.whitelist()
def test_db_func():
    settings = frappe.get_single('Smartflo Settings')
    token = settings.get_password('api_token')
    print('\n========================================')
    print('[SMARTFLO SETTINGS]')
    print(f'Secure Token Active: {bool(token)}')
    print(f'Default Caller ID: {settings.default_caller_id}')
    print(f'Outbound Enabled: {settings.enable_outbound_calls}')
    print('========================================\n')
    
    agent = frappe.db.get_value('Agent Mapping', {'user': 'Administrator'}, ['name', 'smartflo_agent_id', 'device_type', 'agent_country_code', 'call_forward_number', 'did_number'], as_dict=True)
    print('[AGENT MAPPING FOR Administrator]')
    if agent:
        for k, v in agent.items():
            print(f'- {k}: {v}')
    else:
        print('No mapping found!')
    print('========================================\n')
