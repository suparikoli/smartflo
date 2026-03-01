import frappe
import requests

def test():
    settings = frappe.get_single("Smartflo Settings")
    token = settings.get_password("api_token")
    headers = {"Authorization": f"Bearer {token}", "Accept": "application/json"}
    
    urls = [
        "https://api-smartflo.tatateleservices.com/v1/my_number",
        "https://apiv2.tatatelebusiness.com/v1/my_number"
    ]
    
    for url in urls:
        try:
            r = requests.get(url, headers=headers)
            print(f"URL: {url}")
            print(f"Status: {r.status_code}")
            print(f"Body: {r.text[:200]}")
            print("-" * 40)
        except Exception as e:
            print(f"Error {url}: {e}")
