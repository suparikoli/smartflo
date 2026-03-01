# Smartflo Application — Code Documentation

> **App Name:** `smartflo`  
> **Title:** Tatatelebiz Smartflo Integration  
> **Publisher:** Mithtech Innovative Solutions PVT LTD  
> **Contact:** manoj@mith.tech  
> **License:** MIT  
> **Frappe Module:** Tatatelebiz Smartflo Integration  

---

## Table of Contents

1. [Overview](#overview)
2. [Application Purpose](#application-purpose)
3. [File Structure](#file-structure)
4. [Top-Level Configuration Files](#top-level-configuration-files)
5. [Application Entry Point — `hooks.py`](#application-entry-point--hookspy)
6. [Module: `tatatelebiz_smartflo_integration`](#module-tatatelebiz_smartflo_integration)
7. [DocTypes](#doctypes)
   - [Smartflo Settings](#1-smartflo-settings-single-doctype)
   - [Agent Mapping](#2-agent-mapping)
   - [Smartflo Logs](#3-smartflo-logs)
   - [Smartflo Dialer Queue](#4-smartflo-dialer-queue)
8. [API Layer](#api-layer)
   - [client.py — Outbound Call API](#clientpy--outbound-call-api)
   - [webhook.py — Inbound Webhook Handler](#webhookpy--inbound-webhook-handler)
9. [Reports](#reports)
   - [Smartflo Call Report](#smartflo-call-report)
10. [Frontend Code — Public JS](#frontend-code--public-js)
    - [smartflo.js — Global UI Widget & Interceptors](#smartflojsglobal-ui-widget--interceptors)
11. [Workspace](#workspace)
12. [Data Flow & Call Lifecycle](#data-flow--call-lifecycle)
    - [Outbound Call Flow](#outbound-call-flow)
    - [Inbound Call Flow (Webhook)](#inbound-call-flow-webhook)
    - [Auto Dialer Flow](#auto-dialer-flow)
13. [Permissions & Roles](#permissions--roles)
14. [Development & Tooling](#development--tooling)

---

## Overview

**Smartflo** is a custom Frappe application that integrates **Tata Tele Smartflo** (a cloud telephony/contact center platform) with a Frappe/ERPNext installation. It enables agents to make and receive phone calls directly from within the Frappe desk UI, log all call activity automatically, and manage an auto-dialer queue linked to ERPNext entities such as Leads, Customers, and Contacts.

The app follows the standard Frappe application architecture — Python controllers for business logic, JSON DocType definitions for schema, and JavaScript for client-side form behaviour and UI widgets.

---

## Application Purpose

| Feature | Description |
|---|---|
| **Click-to-Call (Outbound)** | Agents can initiate outbound calls to any phone number via the Smartflo API directly from ERPNext Lead, Customer, and Contact forms. |
| **Inbound Call Pop-up** | A real-time WebSocket listener detects incoming calls and shows a floating call widget on the screen automatically. |
| **Call Logging** | Every call (inbound and outbound) is automatically recorded as a `Smartflo Logs` document with caller, recipient, status, duration, and recording URL. |
| **ERPNext Auto-Linking** | Call logs are automatically matched to ERPNext Leads, Contacts, and Customers by phone number. |
| **Auto Dialer Queue** | A `Smartflo Dialer Queue` with a list-view "Start Auto Dialer" button allows sequential dialling of a list of contacts. |
| **Webhook Processing** | A guest-accessible webhook endpoint receives live call lifecycle events (`ringing`, `connected`, `completed`) from Smartflo and updates call logs in real time. |
| **Call Report** | A Script Report with chart (donut) and summary cards for call analytics by date range, direction, status, and agent. |

---

## File Structure

```
smartflo/                               # Repository root
├── README.md
├── check_settings.py                   # Standalone script to check settings
├── dial_test.py                        # Standalone dial test script (not part of app)
├── license.txt
├── pyproject.toml                      # Python project config + ruff linting
├── smartflo_api_docs.md                # External Smartflo API reference (docs)
│
└── smartflo/                           # Python package (the Frappe app)
    ├── __init__.py
    ├── check.py                        # Ad-hoc connection/check utility
    ├── dial_test.py
    ├── hooks.py                        # Frappe app hooks (app metadata, JS includes)
    ├── modules.txt                     # Module name declaration
    ├── patches.txt                     # Database migration patches
    ├── test_db.py                      # Ad-hoc DB test script
    ├── test_flow.py                    # Ad-hoc call flow test script
    │
    ├── config/                         # (Reserved for app config)
    ├── patches/                        # Database patch files
    ├── templates/                      # Frappe web templates
    ├── www/                            # Web pages
    │
    ├── public/                         # Static assets (served by Nginx)
    │   └── js/
    │       ├── smartflo.js             # Global desk-injected call widget
    │       └── smartflo_phone_panel.js         # Premium glassmorphism softphone panel (Notification based)
    │
    └── tatatelebiz_smartflo_integration/   # Main Frappe module
        ├── __init__.py
        ├── .frappe                         # Module marker
        │
        ├── api/                            # Server-side API endpoints
        │   ├── __init__.py
        │   ├── client.py                   # SmartfloAPI class + @whitelist methods
        │   └── webhook.py                  # Inbound webhook handler
        │
        ├── doctype/                        # All DocTypes
        │   ├── agent_mapping/              # Agent ↔ Frappe User mapping
        │   │   ├── agent_mapping.json      #   DocType schema
        │   │   ├── agent_mapping.py        #   Bare Document class (no routing logic)
        │   │   ├── agent_mapping.js        #   Form JS — calls routing modules directly
        │   │   ├── webrtc_dialer.py        #   WebRTC/Softphone routing & test endpoint
        │   │   └── pstn_dialer.py          #   PSTN/Mobile routing & test endpoint
        │   ├── smartflo_dialer_queue/      # Auto-dialer batch queue
        │   ├── smartflo_logs/              # Call records
        │   └── smartflo_settings/         # Global app configuration (Single)
        │
        ├── report/
        │   └── smartflo_call_report/       # Script Report for call analytics
        │
        └── workspace/
            └── smartflo/
                └── smartflo.json           # Frappe Workspace definition
```

---

## Top-Level Configuration Files

### `pyproject.toml`

Standard Python packaging file using `flit_core` as the build backend.

- **Python version required:** `>=3.14`
- **No additional Python dependencies** beyond Frappe (managed by bench).
- **Linting:** Uses `ruff` with targets `py314`. Configured to lint for errors, warnings, imports, bugbear, and Ruff-specific rules. Tabs are used for indentation.

### `patches.txt`

Defines Frappe database migration patches. Currently empty (no patches defined). Patches placed in `[pre_model_sync]` run before DocType migrations; those in `[post_model_sync]` run after.

### `modules.txt`

Contains a single line:

```
Tatatelebiz Smartflo integration
```

This registers the module name in Frappe's module registry.

### `smartflo_api_docs.md`

A large (106 KB) reference document containing the official Tata Tele Smartflo external API documentation. This is used by developers as an API reference guide and is not loaded or executed by the application.

---

## Application Entry Point — `hooks.py`

**Path:** `smartflo/hooks.py`

This file is the Frappe application manifest. It defines:

| Key | Value | Purpose |
|---|---|---|
| `app_name` | `smartflo` | Frappe app identifier |
| `app_title` | `Tatatelebiz Smartflo integration` | Display name |
| `app_publisher` | `Mithtech Innovative Solutions PVT LTD` | Publisher |
| `app_description` | Integration of tatatelebiz with smartflo for mithtech | |
| `app_email` | `manoj@mith.tech` | Contact email |
| `app_license` | `mit` | License type |
| `app_include_js` | `["/assets/smartflo/js/smartflo.js", "/assets/smartflo/js/smartflo_phone_panel.js"]` | **Key hook:** Injects both global JS files into every Frappe desk page |

Two active desk-injected scripts:
- **`smartflo.js`** — Global call widget, CRM form injection, realtime event listener.
- **`smartflo_phone_panel.js`** — Premium glassmorphism call panel. Displays incoming/outbound call status and provides active call controls (Mute, End, Transfer). Loaded after `smartflo.js`.

All other hooks (scheduler events, doc_events, permissions, etc.) are commented out.

---

## Module: `tatatelebiz_smartflo_integration`

This is the sole Frappe module inside the app. It follows standard Frappe module structure with the following subdirectories:

| Subdirectory | Contents |
|---|---|
| `api/` | Python server-side whitelisted functions and API class |
| `doctype/` | Four DocType definitions (JSON + Python + JS) |
| `report/` | One Script Report |
| `workspace/` | One Frappe Workspace (navigation portal) |

---

## DocTypes

### 1. Smartflo Settings (Single DocType)

**Path:** `doctype/smartflo_settings/`  
**Files:** `smartflo_settings.json`, `smartflo_settings.py`, `smartflo_settings.js`  
**Type:** Single (only one document exists system-wide, like a settings page)  
**Permission:** System Manager only

This is the central configuration document for the entire app. It is organized into **6 tabs**:

#### Tab: System

| Field | Type | Description |
|---|---|---|
| `api_token` | Password | **Required.** The Bearer token for authenticating with the Smartflo REST API. Stored encrypted. |
| `webhook_secret` | Password | Optional secret for validating inbound webhook signatures. |
| `account_id` | Data | **Required.** The Smartflo account/tenant ID. |
| `default_caller_id` | Data | Fallback DID/caller ID to use when an agent has no specific DID configured. |
| `test_api_connection` | Button | Triggers `test_smartflo_connection()` from the Python controller. |
| `sync_call_records` | Button | Placeholder button to trigger manual CDR sync. |
| `validate_webhook` | Button | Placeholder to validate webhook configuration. |

#### Tab: Dialplan and Routing

Configureshow inbound calls are routed and master control for calling features.

| Field | Type | Description |
|---|---|---|
| `dialplan_id` | Data | The Smartflo dialplan ID for routing inbound calls. |
| `default_inbound_queue` | Data | Default queue identifier for incoming calls. |
| `allow_call_transfer` | Check | Enables the transfer feature in the call widget. |
| `enable_inbound_calls` | Check | Master switch for inbound call processing. |
| `enable_outbound_calls` | Check | Master switch for outbound click-to-call. Checked before any outbound call attempt. |

#### Tab: Call Sync And Recording

| Field | Type | Description |
|---|---|---|
| `enable_webhook_processing` | Check | If unchecked, all incoming webhooks are silently ignored. |
| `enable_cdr_sync_fallback` | Check | Enables a periodic CDR polling fallback (for when webhooks miss events). |
| `cdr_sync_frequency_mins` | Select | Frequency (5/10/15/30/45/60/120 mins) for CDR polling. |
| `backfill_last_x_days` | Int | Number of past days to backfill CDR records. |
| `auto_fetch_recordings` | Check | Whether to fetch recording URLs automatically. |
| `save_recordings_as_file` | Check | Whether to save call recordings as Frappe `File` documents. |

#### Tab: Auto Dialer

| Field | Type | Description |
|---|---|---|
| `enable_auto_dialer` | Check | Master switch for the auto-dialer feature. |
| `auto_dial_delay_seconds` | Int | Seconds to wait between dials in auto-dialer mode. |
| `require_disposition_before_next_call` | Check | Forces agents to submit a call disposition before the next call is dialed. |
| `max_retry_attempts` | Int | Maximum number of retry attempts for failed calls. |

#### Tab: Logging And Debug

| Field | Type | Description |
|---|---|---|
| `enable_debug_logs` | Check | Enables verbose debug logging (webhook payloads). |
| `last_cdr_sync_time` | Date | Read-only. Timestamp of the last CDR sync. |
| `last_webhook_received_at` | Date | Read-only. Auto-updated every time a webhook arrives. |
| `last_api_error` | Small Text | Read-only. Last recorded API error message. |

#### Python Controller: `SmartfloSettings`

```python
class SmartfloSettings(Document):
    @frappe.whitelist()
    def test_smartflo_connection(self):
        api = SmartfloAPI()
        result = api.test_connection()
        frappe.msgprint("Successfully connected to Smartflo API!", indicator="green")
```

The `@frappe.whitelist()` decorator on an instance method makes it callable from the form's JavaScript via `frm.call(...)`. It instantiates `SmartfloAPI` and calls `test_connection()`, displaying a green success message if it succeeds.

#### Client-Side JS: `smartflo_settings.js`

Handles the `test_api_connection` button click on the form. Validates that an API token is present before calling the whitelisted Python method with `frm.call({ method: "test_smartflo_connection", ... })`.

---

### 2. Agent Mapping

**Path:** `doctype/agent_mapping/`  
**Files:**

| File | Role |
|---|---|
| `agent_mapping.json` | DocType schema — fields, `depends_on` button conditions |
| `agent_mapping.py` | Bare `AgentMapping` Document class — no routing logic |
| `agent_mapping.js` | Form controller — full call flows, UI dialogs |
| `webrtc_dialer.py` | **WebRTC / Softphone routing** — agent status check, core function, whitelisted endpoint |
| `pstn_dialer.py` | **PSTN / Mobile routing** — core function, offline detection, whitelisted endpoint |

**Naming:** Manual (set by user, unique per record)  
**Permission:** System Manager only

Maps a **Frappe User** to their Smartflo telephony configuration. Each routing mode has its own dedicated module and a distinct browser-side flow.

#### Fields

| Field | Type | Description |
|---|---|---|
| `user` | Link → User | **Required, Unique.** One mapping per Frappe user. |
| `device_type` | Select | `Softphone (WebRTC)` or `PSTN (Mobile/Landline)`. Controls logic and field visibility. |
| `smartflo_agent_id` | Data | **Intercom ID / Agent Extension ID** (e.g. `1006`). This is the auto-generated number in Smartflo settings. Required for both routing modes (used for transfer/tracking). |
| `call_forward_number` | Phone | Physical Leg A number for PSTN mode. Shown + required only for PSTN mode. |
| `did_number` | Phone | Outbound caller ID (DID). Overrides `default_caller_id` from settings. |
| `test_softphone_call` | Button | `depends_on: Softphone (WebRTC)`. Starts the WebRTC call flow. |
| `test_pstn_call` | Button | `depends_on: PSTN (Mobile/Landline)`. Starts the PSTN call flow. |

---

#### PSTN Flow (`pstn_dialer.py` + `agent_mapping.js`)

```
User clicks "Test PSTN Call"
  → prompt for destination number
  → frappe.call(pstn_dialer.test_pstn_call)
      → initiate_pstn_call() → Smartflo /v1/click_to_call
      → return {"_status": "success"|"agent_offline"|"error", ...}
  JS checks r.message._status:
    success      → brief toast (NO popup widget for PSTN)
    agent_offline → Msgprint with 🔗 link to cloudphone.tatateleservices.com
    error         → Msgprint with error detail
```

**`pstn_dialer.py` — key design points:**
- `test_pstn_call()` **never raises**. Errors are caught and returned as a structured `{"_status": "agent_offline" | "error"}` dict so the JS can differentiate.
- `_is_offline_error(error_str)` — heuristic that matches keywords like `"offline"`, `"not registered"`, `"unreachable"` in the Smartflo error message body to identify agent-offline errors.
- No browser popup/widget is shown on a successful PSTN call — just a short `frappe.show_alert()` toast.

---

#### WebRTC Flow (`webrtc_dialer.py` + `agent_mapping.js`)

```
User clicks "Test Softphone Call"
  → frappe.call(webrtc_dialer.check_agent_online)
      offline? → msgprint with 🔗 cloudphone link — STOP
  → prompt for destination number
  → fire_webrtc_call(frm, destination_number)
      → window.smartflo_webrtc.show_panel_for_outbound(destination_number)
          → Softphone panel appears immediately (status = "Connecting…")
      → frappe.call(webrtc_dialer.test_softphone_call)
          → Smartflo click-to-call fires → Smartflo rings agent's extension
          → Agent answers on their Smartflo CloudPhone
          → Realtime events update the ERPNext panel to "Active"
          → Panel buttons (Mute, End, Transfer) control the call via API
```

**`webrtc_dialer.py` — key components:**
- `check_agent_online(agent_mapping_name)` — Hits Smartflo extension status API.
- `test_softphone_call(agent_mapping_name, destination_number)` — Initiates outbound call.
- `get_webrtc_credentials()` — **Stubbed.** Returns `None` for backward compatibility with old cached JS.
- `get_agent_users(...)` — Search function for the Transfer dropdown.



**`webrtc_dialer.py` — key points:**
- `check_agent_online(agent_mapping_name)` `@frappe.whitelist()` — hits `GET /v1/extension_status/<agent_id>`. Falls back to `{"online": True}` on timeout or unknown endpoint (fail-open approach so a network issue doesn't block calls).
- `test_softphone_call()` also returns structured `{"_status": ...}` dicts for consistency.

**`agent_mapping.js` — WebRTC Call Dialog (`show_webrtc_call_dialog`)**

A `frappe.ui.Dialog` opened before the API call is made, with:

| UI element | Description |
|---|---|
| **Status banner** | Color-coded badge (yellow connecting → blue ringing → green active → red ended) |
| **Microphone (Input)** | `Select` field populated from `enumerateDevices()` `audioinput` list |
| **Speaker / Headset (Output)** | `Select` field populated from `audiooutput` devices; uses `setSinkId()` on `<audio>` elements |
| **Transfer to Agent** | `Link → User` field; on click calls `call_operation(call_id, type=4, target_user)` |
| **🎤 Mute** button | Toggles `MediaStreamTrack.enabled` on the live audio track (held in `window._smartflo_stream`) |
| **↗ Transfer** button | Reads the Transfer field and calls the Smartflo transfer API |
| **End Call** (red primary) | Calls `hangup_call(ref_id)` then auto-closes dialog after 1.5s |

Audio device switching (`apply_audio_input` / `apply_audio_output`) re-acquires `getUserMedia` with the selected `deviceId` on input change, and calls `HTMLMediaElement.setSinkId()` on all `<audio>` elements on output change.

---

#### `agent_mapping.py` — Document Class

Intentionally minimal (no routing logic, no `frappe` import):

```python
class AgentMapping(Document):
    """Routing logic: webrtc_dialer.py / pstn_dialer.py"""
    pass
```

---



### 3. Smartflo Logs

**Path:** `doctype/smartflo_logs/`  
**Files:** `smartflo_logs.json`, `smartflo_logs.py`, `smartflo_logs.js`  
**Auto-naming:** `SCL-.#########` (e.g., `SCL-000000001`)  
**Permissions:** System Manager (full); Employee (read only)  
**Change Tracking:** Enabled (`track_changes`, `track_views`)  
**Default View:** List

This is the primary call record doctype. Every call that passes through the system — whether initiated by click-to-call or received via webhook — creates or updates a `Smartflo Logs` document.

#### Fields

| Field | Type | Description |
|---|---|---|
| `id` | Data (Read-only, Unique) | The UUID or `request_id` returned by the Smartflo API. Used as a foreign key for webhook event correlation. |
| `from` | Data (Read-only) | The originator's phone number. |
| `to` | Data (Read-only) | The destination phone number. |
| `call_received_by` | Link → Employee (Read-only) | The employee who received/handled the call. |
| `employee_user_id` | Link → User (Hidden) | Internal user link used for reporting (maps to `agent` in the call report query). |
| `medium` | Data (Read-only) | The channel/medium of the call. |
| `start_time` | Datetime (Read-only) | When the call started (set on creation). |
| `end_time` | Datetime (Read-only) | When the call ended (set by `handle_completed` webhook handler). |
| `type` | Select (Read-only) | `Incoming` or `Outgoing`. |
| `customer` | Link → Customer (Read-only) | Auto-populated if a matching Customer is found by phone number. |
| `status` | Select (Read-only) | `Ringing`, `In Progress`, `Completed`, `Failed`, `Busy`, `No Answer`, `Queued`, `Cancelled`. |
| `duration` | Duration (Read-only) | Call duration in seconds (set by `handle_completed`). |
| `recording_url` | Data (Hidden) | Raw URL to audio recording. |
| `recording_html` | HTML | Rendered HTML audio player for playback. |
| `type_of_call` | Link → Telephony Call Type | Categorization of the call (e.g., Support, Sales). |
| `summary` | Small Text | Agent-entered call notes/summary. |
| `links` | Table (Dynamic Link) | Polymorphic links to any ERPNext document (Lead, Contact, Customer, etc.). |

#### Python Controller: `SmartfloLogs`

```python
class SmartfloLogs(Document):
    def before_save(self):
        self.link_to_erpnext_entities()

    def link_to_erpnext_entities(self):
        """ Auto-links the call log to Customers, Contacts, and Leads by phone number. """
```

**`link_to_erpnext_entities()`** is the key automation method:

1. Determines the external phone number: `self.from` for Incoming calls, `self.to` for Outgoing.
2. Constructs a SQL `LIKE` pattern using the last 10 digits: `%XXXXXXXXXX%`.
3. Searches `Contact Phone` table for matching contacts.
4. If a contact is linked to a **Customer** via `Dynamic Link`, appends the Customer link and sets `self.customer`.
5. If no customer found, checks `Contact` for a direct match and appends it.
6. If no contact, searches `Lead` by `phone` or `mobile_no` (excluding converted leads) and appends it.

This auto-linking runs on every save, but skips document types already present in `self.links` to avoid overwriting manual links.

#### Client-Side JS: `smartflo_logs.js`

Minimal; only a placeholder `frappe.ui.form.on("Smartflo Logs", {})` — the form is largely read-only with auto-populated data.

---

### 4. Smartflo Dialer Queue

**Path:** `doctype/smartflo_dialer_queue/`  
**Files:** `smartflo_dialer_queue.json`, `smartflo_dialer_queue.py`, `smartflo_dialer_queue_list.js`  
**Auto-naming:** `SDQ-.#####` (e.g., `SDQ-00001`)  
**Permissions:** System Manager (full); Sales User (full)  
**Change Tracking:** Enabled

A queue of phone numbers to be dialed by an agent in sequence, linked to ERPNext records.

#### Fields

| Field | Type | Description |
|---|---|---|
| `target_type` | Link → DocType | **Required.** The DocType of the record to call (e.g., `Lead`, `Customer`). |
| `target_name` | Dynamic Link | **Required.** The name of the specific record. |
| `phone_number` | Data | **Required.** The phone number to dial. Auto-populated from `mobile_no`/`phone` on the linked record if blank. |
| `status` | Select | `Pending` (default), `Dialing`, `Completed`, `Failed`, `Skipped`. |
| `agent` | Link → User | The assigned agent responsible for this call. |
| `priority` | Select | `High`, `Medium` (default), `Low`. |
| `retry_count` | Int (default 0) | Number of times this number has been dialed. Incremented on each attempt. |
| `last_dialed_at` | Datetime | Timestamp of the most recent dial attempt. |
| `next_retry_at` | Datetime | Scheduled time for the next retry. |
| `call_log` | Link → Smartflo Logs | Link to the most recent `Smartflo Logs` record for this queue entry. |

#### Python Controller: `SmartfloDialerQueue`

```python
class SmartfloDialerQueue(Document):
    def validate(self):
        # Auto-fetches phone_number from target record if blank
        phone_field = "mobile_no" if self.target_type == "Lead" else "phone"
        self.phone_number = frappe.db.get_value(self.target_type, self.target_name, phone_field)

    @frappe.whitelist()
    def initiate_call(self):
        # Guards against re-dialing Completed/Dialing records
        # Calls initiate_outbound_call() from client.py
        # Sets status to "Dialing", updates last_dialed_at and retry_count
        # Links the resulting Smartflo Logs record to this queue entry
```

#### List View JS: `smartflo_dialer_queue_list.js`

Provides the Auto Dialer UI inside the Frappe list view:

- **Status indicators:** Color-coded badges (`Pending=orange`, `Dialing=blue`, `Completed=green`, `Failed=red`).
- **"Start Auto Dialer" button:** Added to the list page via `listview.page.add_inner_button(...)`.
- **`start_auto_dialer(listview)`:** Filters records by `Pending` or `Failed` status and iterates through them sequentially. For each call, it uses `frappe.confirm(...)` to prompt the agent before dialing. On success, advances the index and refreshes the list. (Currently uses a placeholder `setTimeout` comment where a WebSocket-based hangup listener would be placed for production auto-advance.)

---

## API Layer

**Path:** `tatatelebiz_smartflo_integration/api/`

### `client.py` — Outbound Call API

This file contains the `SmartfloAPI` class and three Frappe-whitelisted functions.

#### Class: `SmartfloAPI`

A reusable HTTP client for the Smartflo REST API.

```python
class SmartfloAPI:
    def __init__(self):
        settings = frappe.get_single("Smartflo Settings")
        self.api_token = settings.get_password("api_token")
        self.base_url = "https://api-smartflo.tatateleservices.com"
        self.headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
```

**Constructor:** Reads the API token from `Smartflo Settings` using `get_password()` (which decrypts the stored password field). Throws if no token is configured.

**`_request(method, endpoint, **kwargs)`:**  
Internal HTTP request dispatcher. Uses `requests.request(...)`, calls `raise_for_status()`, and returns the parsed JSON response. On `HTTPError`, parses the error response JSON and logs to Frappe's error log. On any other exception, logs and re-raises.

**`test_connection()`:**  
Pings `/v1/my_number`. Treats HTTP 401 as an authentication failure. Treats HTTP 403 as success (the token is valid but the scope doesn't allow reading numbers — this is normal for most tokens).

**`make_outbound_session_call(agent_number, destination_number, caller_id)`:**  
Posts to `/v1/click_to_call` with the following JSON payload:
```json
{
  "agent_number": "<cleaned>",
  "destination_number": "<cleaned>",
  "caller_id": "<cleaned>",
  "async": 1
}
```
Numbers are sanitized using `re.sub(r"[^\d]", "", ...)` to strip all non-digit characters before sending.

#### Whitelisted Function: `initiate_outbound_call(number, reference_doctype=None, reference_name=None)`

The primary entry point for making a call. Callable from the frontend via `frappe.call(...)`.

**Flow:**

1. Checks `enable_outbound_calls` setting; throws if disabled.
2. Looks up the `Agent Mapping` for the current `frappe.session.user`.
3. **Routing Logic (Leg A determination):**
   - If `device_type == "PSTN (Mobile/Landline)"`: uses `call_forward_number` as `agent_number`.
   - Otherwise (Softphone): uses `smartflo_agent_id` as `agent_number`.
4. **Caller ID:** Uses the agent's `did_number` (if set) or falls back to `default_caller_id` from settings.
5. **E.164 Enforcement:** Any 10-digit number gets prefixed with `91` (Indian country code).
6. Instantiates `SmartfloAPI` and calls `make_outbound_session_call(...)`.
7. **Call Log Creation:** If the API response contains a `uuid` or `request_id`, creates a `Smartflo Logs` document with status `Queued`. If `reference_doctype`/`reference_name` are provided, appends them to the log's `links` child table.
8. Returns the raw API response to the caller.

#### Whitelisted Function: `call_operation(call_id, operation_type, target_user=None)`

Performs in-call supervision operations against the Smartflo `/v1/call/options` endpoint.

| `operation_type` | Meaning |
|---|---|
| 1 | Monitor (silent listen) |
| 2 | Whisper (one-way talk to agent) |
| 3 | Barge (join the call) |
| 4 | Transfer (to another agent) |

For transfer (type 4), the function looks up the `smartflo_agent_id` field from the `Agent Mapping` of `target_user` and adds it to the payload.

#### Whitelisted Function: `hangup_call(ref_id)`

A soft hangup function — it logs the request and returns a success message. Actual call termination relies on hardware/Smartflo's own infrastructure (click-to-call uses PSTN bridging, not WebRTC, so there is no software "kill the call" mechanism).

---

### `webhook.py` — Inbound Webhook Handler

**Path:** `tatatelebiz_smartflo_integration/api/webhook.py`

A single `@frappe.whitelist(allow_guest=True)` endpoint that Smartflo POSTs to when call events occur.

**Endpoint URL:** `/api/method/smartflo.tatatelebiz_smartflo_integration.api.webhook.handle_event`

#### `handle_event()`

1. Checks `enable_webhook_processing` from settings; returns `{"status": "ignored"}` if disabled.
2. Reads the raw request body and parses as JSON. Logs raw payload if `enable_debug_logs` is enabled.
3. Updates `last_webhook_received_at` on settings.
4. Dispatches to the appropriate handler based on `payload["event"]`:

| Event | Handler |
|---|---|
| `call.ringing` | `handle_ringing(payload)` |
| `call.connected` | `handle_connected(payload)` |
| `call.completed` | `handle_completed(payload)` |
| `call.hangup` | `handle_completed(payload)` |

Returns `{"status": "success"}` or `{"status": "error", ...}` with HTTP 500 on exception.

#### `handle_ringing(payload)`

- Extracts `uuid`/`call_id` from the payload.
- Creates a `Smartflo Logs` record if one doesn't already exist for this UUID.
- Publishes a `frappe.realtime` event `"smartflo_incoming_call"` with:
  ```json
  {
    "uuid": "<call_uuid>",
    "caller": "<phone_number>",
    "direction": "Incoming|Outgoing",
    "call_log_name": "<Smartflo Logs name>"
  }
  ```
  This event is received by the frontend `smartflo.js` WebSocket listener, which pops up the call widget.

#### `handle_connected(payload)`

- Finds the `Smartflo Logs` record by UUID.
- Updates `status` to `"In Progress"` using `frappe.db.set_value(...)` (a lightweight DB update without triggering full document lifecycle hooks).

#### `handle_completed(payload)`

- Finds or creates the `Smartflo Logs` record.
- Updates `status`, `duration`, `end_time`, and `recording_url` from the payload.
- Saves the document (triggering `before_save` → `link_to_erpnext_entities()`).

---

## Reports

### Smartflo Call Report

**Path:** `report/smartflo_call_report/`  
**Files:** `smartflo_call_report.py`, `smartflo_call_report.js`, `smartflo_call_report.json`  
**Type:** Script Report  
**Ref DocType:** `Smartflo Logs`  
**Roles:** System Manager, Sales User

A standard Frappe Script Report that queries the `Smartflo Logs` table.

#### Report Columns

| Column | Type | Width |
|---|---|---|
| Call ID | Link → Smartflo Logs | 120 |
| Direction | Data | 100 |
| From | Data | 120 |
| To | Data | 120 |
| Status | Data | 100 |
| Duration (Sec) | Int | 120 |
| Start Time | Datetime | 150 |
| Agent | Link → User | 150 |

#### Filters (defined in `smartflo_call_report.js`)

| Filter | Type | Default / Options |
|---|---|---|
| Date Range | DateRange | Last 30 days |
| Direction | Select | (blank), Incoming, Outgoing |
| Status | Select | All call statuses |
| Agent | Link → User | (none) |

#### Python Logic (`smartflo_call_report.py`)

**`get_data(filters)`:** Executes a raw SQL query against `tabSmartflo Logs` with dynamic `WHERE` conditions for `date_range`, `status`, and `direction`. Results ordered by `start_time DESC`.

**`get_chart_data(data)`:** Returns a donut chart definition with call status as labels and counts as values. Colors: `["green", "red", "orange", "blue", "gray"]`.

**`get_report_summary(data)`:** Returns three summary cards:
- **Total Calls** (Blue)
- **Answered** — calls with status `Completed` or `In Progress` (Green)
- **Total Duration (sec)** — sum of all durations (Orange)

---

## Frontend Code — Public JS

### `smartflo.js` — Global UI Widget & Interceptors

**Path:** `smartflo/public/js/smartflo.js`  
**Loaded via:** `hooks.py` → `app_include_js`  
**Loaded on:** Every Frappe desk page for every logged-in user

This is the most complex client-side file. It sets up the global namespace, the floating call widget, and multiple function interceptors.

#### 1. Global Namespace

```javascript
frappe.provide("smartflo.call_ui");
```

Makes `smartflo.call_ui` available globally in the browser.

#### 2. `smartflo.call_ui` Object

A singleton object with the following methods:

| Method | Description |
|---|---|
| `setup()` | Creates the floating call widget HTML and appends it to `<body>`. Called lazily on first usage. Uses animated phone icon, call status text, and action buttons. |
| `show(number, ref_id, direction)` | Makes the widget visible, sets the displayed number and status text (`"Ringing Agent Device..."` for outbound, `"Incoming Call..."` for inbound). Starts the pulse animation. |
| `hide()` | Fades out the widget. |
| `hangup()` | Calls `smartflo.tatatelebiz_smartflo_integration.api.client.hangup_call` via `frappe.call`. Shows "Disconnecting..." then "Call Ended" before auto-hiding after 2 seconds. |
| `mute()` | Shows a message that mute must be done on the headset (API mute not applicable to PSTN bridging). |
| `transfer()` | Prompts for a transfer extension via `frappe.prompt`. |
| `dialpad()` | Placeholder — shows a DTMF dialpad message. |

Widget styling: Fixed position, bottom-right corner, `z-index: 9999`, white background with shadow, rounded corners (12px), Frappe design system CSS variables used for colors and typography. Phone icon has a CSS `pulse` keyframe animation while a call is active.

#### 3. `frappe.call` Interceptor

Monkey-patches `frappe.call` to detect when `smartflo.tatatelebiz_smartflo_integration.api.client.initiate_outbound_call` is called. On successful response, automatically shows the call widget with the dialed number.

#### 4. `frappe.xcall` Interceptor

Same logic for `frappe.xcall` (the Promise-based variant used in modern Frappe/CRM pages). On resolved response, shows the call widget.

#### 5. Inbound WebSocket Listener

```javascript
frappe.realtime.on('smartflo_incoming_call', function(message) {
    // Shows the call widget with the incoming caller's number
    smartflo.call_ui.show(message.caller, message.uuid, message.direction || "Incoming");
});
```

Listens for the `smartflo_incoming_call` realtime event published by `webhook.py → handle_ringing()`. This automatically pops up the call widget when an inbound call arrives.

#### 6. CRM Form Button Injector

```javascript
['Lead', 'Customer', 'Contact'].forEach(doctype => {
    frappe.ui.form.on(doctype, {
        refresh: function(frm) {
            // Detects phone/mobile_no on the form
            // Adds "📞 Call via Smartflo" custom button
        }
    });
});
```

Injects a **"📞 Call via Smartflo"** button into the toolbar of Lead, Customer, and Contact form views whenever the record has a phone number. Clicking it opens a dialog pre-filled with the phone number, and the primary action calls `initiate_outbound_call`.

---

### `smartflo_phone_panel.js` — Premium Softphone Panel

**Path:** `smartflo/public/js/smartflo_phone_panel.js`  
**Loaded via:** `hooks.py` → `app_include_js`  
**Loaded on:** Every Frappe desk page for every logged-in user.

This script manages a fixed-position, glassmorphism call notification panel at the bottom-right of the screen. It replaces the previous JsSIP integration with a lightweight, API-driven UI that complements Smartflo's own CloudPhone portal.

#### Key Features:
- **Realtime Integration:** Binds to `smartflo_incoming_call` events to pop up on inbound calls.
- **State Management:** Handles `incoming`, `outbound`, `active`, `ended`, `missed`, and `transferred` states.
- **Animated UI:** Includes a pulsing avatar ring for ringing states and a live call timer for active calls.
- **Circular Buttons:** Large, phone-style buttons (Answer/Decline/Mute/End/Transfer) for a premium feel.
- **Inline Transfer:** Built-in dropdown to search and transfer calls to other agents.

#### States & UI Flow:
1. **Incoming/Outbound**: Shows the caller ID and two central buttons: **CloudPhone** (opens the portal) and **Dismiss**.
2. **Active**: Triggered by `window.smartflo_webrtc.set_active()`. Shows a live timer and a 3-button grid:
   - **Mute**: Toggles visual state and shows a Frappe alert.
   - **End**: Calls the hangup API and closes the panel.
   - **Transfer**: Toggles a search area to select and bridge another agent.

#### `window.smartflo_webrtc` Public API

Exposed for use by `agent_mapping.js` and other app components:

| Method | Description |
|---|---|
| `show_panel_for_outbound(number, [ref_id])` | Manually show the panel for a new outbound call. |
| `set_active([ref_id])` | Transition the panel to the "Active" state and start the timer. |
| `close()` | Stop the timer and slide the panel out immediately. |

#### Realtime Listener

```javascript
frappe.realtime.on("smartflo_incoming_call", function (msg) {
    show_panel("incoming", msg.caller);
});
```
The script attempts to initialize the listener immediately and retries via `frappe.after_ajax` or `window.load` to ensure compatibility with varied network/loading conditions.

---


## Workspace

**Path:** `workspace/smartflo/smartflo.json`

Defines a Frappe Workspace (left sidebar navigation portal) named **"SmartFlo"** with:
- **Icon:** `phone-call`
- **Indicator color:** green
- **Module:** Tatatelebiz Smartflo Integration
- **Public:** Yes (visible to all users)

Currently has no shortcuts or quick lists configured (empty `content`, `shortcuts`, `links` arrays). The workspace appears in the Frappe desk sidebar as an entry point dashboard for the module.

---

## Data Flow & Call Lifecycle

### Outbound Call Flow

```
Agent clicks "📞 Call via Smartflo" on Lead/Customer/Contact form
    → frappe.call("initiate_outbound_call", { number, reference_doctype, reference_name })
        → Server: initiate_outbound_call()
            → Lookup Agent Mapping for session user
            → Determine agent_number (Softphone extension OR PSTN forward number)
            → Apply 91+ prefix for E.164 compliance
            → SmartfloAPI.make_outbound_session_call(agent_number, number, caller_id)
                → POST https://api-smartflo.tatateleservices.com/v1/click_to_call
                    → Smartflo bridges Leg A (agent device) and Leg B (destination)
            → Create Smartflo Logs { status: "Queued", type: "Outgoing" }
        → Response returned to browser
    → frappe.call interceptor in smartflo.js detects the method
    → smartflo.call_ui.show(number, ref_id) → Floating widget appears

[Later] Smartflo sends webhooks back:
    call.connected → Smartflo Logs.status = "In Progress"
    call.completed → Smartflo Logs.status = "Completed" + duration + recording_url
                   → SmartfloLogs.before_save() → link_to_erpnext_entities()
```

### Inbound Call Flow (Webhook)

```
Inbound call arrives at Smartflo PBX
    → Smartflo POSTs to /api/method/...webhook.handle_event
        → handle_event() validates, parses JSON
        → event = "call.ringing"
            → handle_ringing()
                → Create Smartflo Logs { status: "Ringing", type: "Incoming" }
                → frappe.publish_realtime("smartflo_incoming_call", { caller, uuid, ...})
                    → Browser receives WebSocket message via frappe.realtime
                    → smartflo.call_ui.show(caller_number, uuid, "Incoming")
                    → Floating widget pops up showing incoming caller number
        → event = "call.connected"
            → handle_connected() → Smartflo Logs.status = "In Progress"
        → event = "call.completed"
            → handle_completed()
                → Smartflo Logs.status, duration, end_time, recording_url updated
                → SmartfloLogs.before_save() → link_to_erpnext_entities() runs
```

### Auto Dialer Flow

```
Admin creates Smartflo Dialer Queue records (Pending status)
    → On list view, click "Smartflo" → "Start Auto Dialer"
        → start_auto_dialer(listview) filters Pending/Failed records
        → For each record:
            → frappe.confirm("Calling [name] ([phone])... Proceed?")
                → If confirmed:
                    → smartflo_dialer_queue.initiate_call()
                        → initiate_outbound_call(phone_number, target_type, target_name)
                        → db_set status = "Dialing"
                        → db_set last_dialed_at = now()
                        → db_set retry_count += 1
                        → Link resulting Smartflo Logs to queue entry
                → If cancelled: Auto Dialer stops
        → listview.refresh() after each dial
```

---

## Permissions & Roles

| DocType / Report | System Manager | Sales User | Employee |
|---|---|---|---|
| Smartflo Settings | Full (CRUD) | — | — |
| Agent Mapping | Full (CRUD) | — | — |
| Smartflo Logs | Full (CRUD) | — | Read |
| Smartflo Dialer Queue | Full (CRUD) | Full (CRUD) | — |
| Smartflo Call Report | Access | Access | — |

---

## Development & Tooling

### Ad-hoc Scripts (Not part of the app bundle)

| File | Purpose |
|---|---|
| `check_settings.py` | Checks if settings are properly configured by directly reading from the DB. |
| `dial_test.py` | Standalone script to test an API call directly without going through the Frappe RPC layer. |
| `test_db.py` | Tests database connectivity and queries. |
| `test_flow.py` | Simulates the full call flow programmatically for testing purposes. |

### Linting & Code Style

- **Tool:** `ruff` (configured in `pyproject.toml`)
- **Line length:** 110 characters
- **Target Python version:** 3.14
- **Indentation:** Tabs
- **Quote style:** Double quotes

### Key Design Decisions

1. **E.164 Enforcement at the app level:** The app enforces the `91` (India) country code prefix on all 10-digit numbers before sending to the API. This is a hard-coded requirement for Tata Tele's infrastructure.

2. **UUID-based correlation:** Smartflo returns a `uuid` or `request_id` for every call initiation. This UUID is stored in `Smartflo Logs.id` and used by webhook handlers to look up and update the correct log record across the full call lifecycle.

3. **Dual interception of `frappe.call` and `frappe.xcall`:** The public JS intercepts both the legacy callback-based API and the modern Promise-based API to ensure the call widget appears regardless of which calling convention is used by different Frappe apps (e.g., standard Frappe desk vs. Frappe CRM SPA). 

4. **Guest webhook endpoint:** The webhook handler uses `allow_guest=True` because Smartflo's servers cannot authenticate as a Frappe user. Security is optionally achieved via the commented-out `X-Smartflo-Signature` header validation.

5. **Auto-linking on `before_save`:** Call log auto-linking to ERPNext entities runs on every document save, not just on creation. This means if a Lead is converted to a Customer after a call was logged, a subsequent edit of the call log will pick up the new Customer link.

6. **Explicit PSTN vs Softphone separation in Agent Mapping:** The two-mode routing (`PSTN` vs `Softphone (WebRTC)`) is kept strictly separate at every layer. The `AgentMapping` class exposes two distinct whitelisted methods (`test_softphone_call` and `test_pstn_call`), each guarded by a mode check that throws a clear error if called on the wrong device type. The DocType JSON uses `depends_on` expressions to show only the relevant button at any given time. The JS `toggle_routing_fields()` helper complements this by also toggling field visibility and required-ness when `device_type` changes, ensuring agents never accidentally use the wrong routing path.
