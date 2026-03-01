import frappe

def execute():
    try:
        settings = frappe.get_single("Smartflo Settings")
        token = settings.get_password("api_token")
        hidden_token = f"***{token[-4:]}" if token else "None"
        print(f"API Token: {hidden_token}")
        print(f"Account ID: {settings.account_id}")
    except Exception as e:
        print(f"Error: {str(e)}")
