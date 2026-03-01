# Smartflo API Documentation

> Aggregated sequentially from the Tatatelebusiness documentation portal.



---

## Introduction to APIs

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/introduction-to-apis-1](https://docs.smartflo.tatatelebusiness.com/reference/introduction-to-apis-1)

### API Endpoint

**Method:** `GET`
**Path:** ``



---

## Authentication Using Tokens

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/authentication-using-tokens](https://docs.smartflo.tatatelebusiness.com/reference/authentication-using-tokens)

### API Endpoint

**Method:** `GET`
**Path:** ``



---

## Rate Limit

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/rate-limiting-on-api-requests](https://docs.smartflo.tatatelebusiness.com/reference/rate-limiting-on-api-requests)

### API Endpoint

**Method:** `GET`
**Path:** ``



---

## Generate a Token

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/generate-a-token](https://docs.smartflo.tatatelebusiness.com/reference/generate-a-token)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/auth/login`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| email | string | Enter Login id of the account |
| password | string | enter password of the account |



---

## Terminate a Token

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1authlogout](https://docs.smartflo.tatatelebusiness.com/reference/v1authlogout)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/auth/logout`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Refresh a Token

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1authrefresh](https://docs.smartflo.tatatelebusiness.com/reference/v1authrefresh)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/auth/refresh`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Create User

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/create-user](https://docs.smartflo.tatatelebusiness.com/reference/create-user)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/user`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| create_agent | boolean |  |
| status | boolean |  |
| block_web_login | boolean |  |
| login_based_calling | boolean |  |
| user_for_cdr | object |  |
| agent_group | array |  |
| department | array |  |
| time_group | integer |  |
| name | string |  |
| number | string |  |
| email | string |  |
| login_id | string |  |
| user_role | integer |  |
| password | string |  |
| caller_id | array |  |
| route_call_through | integer |  |
| assign_extension | boolean |  |



---

## Fetch Multiple Users

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/fetch-multiple-users](https://docs.smartflo.tatatelebusiness.com/reference/fetch-multiple-users)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/users`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| last_seen_id | query | False | integer |
| limit | query | False | integer |
| is_extension_created | query | False | boolean |
| is_login_based_calling | query | False | boolean |
| is_international_calling | query | False | boolean |
| is_web_login | query | False | boolean |
| user_status | query | False | boolean |
| Authorization | header | True | string |



---

## Delete User

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/delete-user](https://docs.smartflo.tatatelebusiness.com/reference/delete-user)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/user/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |
| id | path | True | string |



---

## Fetch Single User

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/fetch-single-user](https://docs.smartflo.tatatelebusiness.com/reference/fetch-single-user)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/user/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |
| id | path | True | string |



---

## Patch a User

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/patch-a-user](https://docs.smartflo.tatatelebusiness.com/reference/patch-a-user)

### API Endpoint

**Method:** `PATCH`
**Path:** `/v1/user/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |
| id | path | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string |  |
| number | string |  |
| email | string |  |
| caller_id | array |  |
| agent_group | array |  |
| block_agent | boolean |  |
| international_outbound | boolean |  |
| designation | string |  |
| login_id | string |  |
| user_role | string |  |
| password | string |  |
| block_web_login | boolean |  |
| user_for_cdr | object |  |
| login_based_calling | boolean |  |
| disable_agent | boolean | True or False |



---

## Create an Auto Attendant

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendant](https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendant)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/auto_attendant`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of auto attendant |
| description | string | Description of auto attendant |
| recording_type | string | Type of recording |
| destination_type | string | Type of destination. Note: in case of hangup destination_id will always be 1. |
| recording_id | string | Recording ID |
| destination_id | string | Destination ID. In case of hangup, use 1. |



---

## Fetch Details of an Auto Attendant

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendantid](https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendantid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/auto_attendant/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Update an Auto Attendant

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendantid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendantid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/auto_attendant/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of auto attendant |
| description | string | Description of auto attendant |
| recording_type | string | Type of recording |
| destination_type | string | Type of destination. Note: in case of hangup destination_id will always be 1. |
| recording_id | string | Recording ID |
| destination_id | string | Destination ID. In case of hangup, use 1. |



---

## Delete an Auto Attendant

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendantid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendantid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/auto_attendant/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch List of Auto Attendant

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendants](https://docs.smartflo.tatatelebusiness.com/reference/v1auto_attendants)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/auto_attendants`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Block a Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_number](https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_number)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/blocked_number`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| src_number | string | Source Number that needs to be blocked, between 5-50 |
| block_key | string | type against which the number should be blocked |
| did_numbers | array |  |



---

## Update a Blocked Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_numberid](https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_numberid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/blocked_number/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| src_number | string | Source Number that needs to be blocked, between 5-50 |
| block_key | string | type against which the number should be blocked |
| did_numbers | array | my_numbers against which the number should be blocked, only required for block_key = did |



---

## Delete a Blocked Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_numberid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_numberid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/blocked_number/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | False | string |



---

## Fetch List of Blocked Numbers

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_numbers](https://docs.smartflo.tatatelebusiness.com/reference/v1blocked_numbers)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/blocked_numbers`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Fetch List of My Numbers

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1my_number](https://docs.smartflo.tatatelebusiness.com/reference/v1my_number)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/my_number`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Update My Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1my_numberid](https://docs.smartflo.tatatelebusiness.com/reference/v1my_numberid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/my_number/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name to be assigned to number |
| destination | string | Destination for the number |
| description | string | Description for the number |
| sms_template | array | List of sms templates |



---

## Create a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcast](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcast)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the broadcast. For example, Campaign 1. |
| description | string | The description of the broadcast. For example, Details of campaign 1. |
| phone_number_list | string | Unique ID of list of phone numbers to be used for broadcast. |
| destination | string | The destination where the call should land. eg: ivr||ID. |
| timeout | string | Time for which the call tries to connect to each number in the list. Minimum: 40 |
| concurrent_limit | string | Number of channels to be used for broadcast. |
| retry_after_minutes | array | Time after which failed numbers are tried again. |
| caller_id_number | string | Caller ID that is showed to the called party. |
| number_of_retry | string | Maximum number of retry attempts allowed. Minimum: 0, Maximum: 5 |
| start_date_time | string | The date and time in which leads associated with broadcast are called. The format is: yyyy-mm-dd hh:mm:ss (For example: 2019-12-02 00:00:00). |
| end_date_time | string | The date and time in which leads are associated with broadcast are called. The format is: yyyy-mm-dd hh:mm:ss (For example: 2019-12-02 00:02:00). |
| time_group | string | Unique ID of the time_group to be associated with broadcast. |
| dialstatus | array | [1, 2, 3, 4, 5] |
| retry_dialstatus | array | [1, 3] |



---

## Start a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcaststartid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcaststartid)

### API Endpoint

**Method:** `GET`
**Path:** `/api/v1/broadcast/start/id?start_date_time=2025-08-26 12:00:00&end_date_time=2025-08-30 14:00:00`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Pause a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastpauseid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastpauseid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/pause/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Resume a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastresumeid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastresumeid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/resume/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## End a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastendid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastendid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/end/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch details of a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Update a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/broadcast/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the broadcast. For example, Campaign 1. |
| description | string | The description of the broadcast. For example, Details of campaign 1. |
| phone_number_list | string | Unique ID of list of phone numbers to be used for broadcast. |
| destination | string | The destination where the call should land. eg: ivr||ID. |
| timeout | string | Time for which the call tries to connect to each number in the list. Minimum: 40 |
| concurrent_limit | string | Number of channels to be used for broadcast. |
| retry_after_minutes | string | Time after which failed numbers are tried again. |
| caller_id_number | string | Caller ID that is showed to the called party. |
| number_of_retry | integer | Maximum number of retry attempts allowed. Minimum: 0, Maximum: 5 |
| start_date_time | string | The date and time in which leads associated with broadcast are called. The format is: yyyy-mm-dd hh:mm:ss (For example: 2019-12-02 00:00:00). |
| end_date_time | string | The date and time in which leads are associated with broadcast are called. The format is: yyyy-mm-dd hh:mm:ss (For example: 2019-12-02 00:02:00). |
| time_group | string | Unique ID of the time_group to be associated with broadcast. |



---

## Delete a Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch Lists of Broadcast

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v2broadcasts](https://docs.smartflo.tatatelebusiness.com/reference/v2broadcasts)

### API Endpoint

**Method:** `GET`
**Path:** `/v2/broadcasts`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| limit | query | False | string |
| broadcast_id | query | False | string |
| page | query | False | string |
| Authorization | header | True | string |



---

## Get Status of Batch Lead Upload

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastbatch_statusid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastbatch_statusid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/batch_status/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Add a Lead in Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadid)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast/lead/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| field_0 | string | Phone number of the lead |
| field_1 | string | Name of the lead |
| field_2 | string | Email of the lead |
| field_3 | string | Address of the lead |
| field_4 | string | Company of the lead |
| field_5 | string | Custom field 1 |
| field_6 | string | Custom field 2 |
| field_7 | string | Custom field 3 |
| field_8 | string | Custom field 4 |
| field_9 | string | Custom field 5 |
| field_10 | string | Custom field 6 |
| field_11 | string | Custom field 7 |
| duplicate_option | string | "skip" (ignore), "overwrite" (update existing), or "clone" (create new). |
| priority | integer | Note : Priority should be between 1 and 30 where 30 is highest and 1 is lowest. |
| skill_id | string | Unique identifier representing the assigned skill |



---

## Update a Lead in Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/broadcast/lead/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| field_2 | string | Email ID of the lead. |
| field_3 | string | Address of the lead |
| field_4 | string | Company of the lead |
| field_5 | string | Alternate Phone Number of the lead |
| field_6 | string | Custom field 6 |
| field_7 | string | Custom field 7 |
| field_8 | string | Custom field 8 |
| field_9 | string | Custom field 9 |
| field_10 | string | Custom field 10 |
| field_11 | string | Custom field 11 |
| field_12 | string | Custom field 12 |
| field_13 | string | Custom field 13 |
| field_14 | string | Custom field 14 |
| field_15 | string | Custom field 15 |
| skill_id | string | Unique identifier representing the assigned skill |
| field_0 | string | Phone Number of the lead. |
| field_1 | string | Name of the lead. |
| priority | string | Note : Priority should be between 1 and 30 where 30 is highest and 1 is lowest. |



---

## Delete a Lead in Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/lead/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch List of Leads in Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/leads/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| number | query | False | string |
| Authorization | header | True | string |



---

## Create Bulk Leads in Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast/leads/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| data | array | The array containing Lead objects |
| skill_id | string |  |
| duplicate_option | string | Eg: "skip" / "overwrite" / "clone" |



---

## Delete Bulk Leads in Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/leads/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| field | string | The type of field through which you want to delete. |
| data | array | The list of data that is searched corresponding to the field provided. |



---

## Patch lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid-3](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastleadsid-3)

### API Endpoint

**Method:** `PATCH`
**Path:** `/v1/broadcast/leads/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| field | string | The fields that needs to be updated. |
| lead_data | object | The fields that needs to be updated. |
| data | array | The list of data that is searched corresponding to the field provided & fields are updated. |



---

## Create a Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlist](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlist)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast/list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the broadcast. For example, Home loan lead list. |
| description | string | The description related to broadcast. For example, list for home loan leads. |
| field | array | The fields details associated with the lead list. For example, Name, Address, Email. |
| enable_outbound_based_skill | string |  |
| skill_list_id | string | skill_list_id is required when enable_outbound_based_skill is 1 |



---

## Update a Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlistid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlistid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/broadcast/list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name for the List. For example, Test list. |
| description | string | The description for the broadcast List. For example, Test list for loans. |
| enable_outbound_based_skill | string | Enter 1 to enable and 0 to disable. |
| skill_list-id | string | skill_list_id is required when enable_outbound_based_skill is 1 |



---

## Delete a Lead List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlistid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlistid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch List of Lead Lists

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlists](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastlists)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/lists`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Add Lead to Account DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlead](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlead)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast/dnd/lead`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| number | string | Number to add/update in DND List |
| type | string | Type of number |



---

## Update Lead in Account DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/broadcast/dnd/lead/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| number | string | Number to add/update in DND List |
| type | string | Type of number |



---

## Delete Lead in Account DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/dnd/lead/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch List of Leads in DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleads](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleads)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/dnd/leads`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| limit | query | False | string |
| last_seen_id | query | False | string |
| list_id | query | False | string |
| id | query | False | string |
| Authorization | header | True | string |



---

## Create Bulk Leads in DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadsid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadsid)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast/dnd/leads/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| data | array |  |



---

## Delete Bulk Leads in DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadsid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndleadsid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/dnd/leads/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| field | string | Type of data for eg: number or lead_id |
| data | array |  |



---

## Create a DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlist](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlist)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/broadcast/dnd/list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the list |
| description | string | The description of the list |



---

## Update a DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlistid](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlistid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/broadcast/dnd/list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the list |
| description | string | The description of the list |



---

## Delete a DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlistid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlistid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/broadcast/dnd/list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch List of DND List

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlists](https://docs.smartflo.tatatelebusiness.com/reference/v1broadcastdndlists)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/broadcast/dnd/lists`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| limit | query | False | string |
| sort_dir | query | False | string |
| cursor | query | False | string |
| name | query | False | string |
| updated_after | query | False | string |
| Authorization | header | True | string |



---

## Hangup a Call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1callhangup](https://docs.smartflo.tatatelebusiness.com/reference/v1callhangup)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/call/hangup`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| call_id | string | The unique ID of the call that needs to be hung up. For example, 1627373566.350603. You can fetch the call_id from the live calls API, which retrieves the live call details. |



---

## Add a note to a call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1callnoteid](https://docs.smartflo.tatatelebusiness.com/reference/v1callnoteid)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/call/note/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| message | string | Note to be added for the call |
| agent_disposition | string | Agent Disposition to be added against the dialer calls. Multiple dispositions can be added seprated by | |



---

## Update a note against a call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1callnoteid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1callnoteid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/call/note/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| message | string | Note to be added for the call |
| agent_disposition | string | Agent Disposition to be added against the dialer calls. Multiple dispositions can be added seprated by | |



---

## Delete a note against a call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1callnoteid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1callnoteid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/call/note/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch notes against customer Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1callnotesclient_number](https://docs.smartflo.tatatelebusiness.com/reference/v1callnotesclient_number)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/call/notes/{client_number}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| client_number | path | True | string |
| limit | query | False | string |
| page | query | False | string |
| Authorization | header | True | string |



---

## Call Operations

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1calloptions](https://docs.smartflo.tatatelebusiness.com/reference/v1calloptions)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/call/options`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| type | integer | The type of Call Operation to be performed. Available Types are: 1: Monitor, 2: Whisper, 3: Barge, 4: Transfer |
| agent_id | integer | The unique ID of the agent who can monitor or whisper during the call. You can fetch the agent_id from the agent API, which retrieves the agents details. Also, note that the unique ID is only required in case of the following types: 1 (Monitor), 2 (Whisper), 3(Barge), 4(Transfer). |
| call_id | string | The unique ID of the call on which operations need to be performed. For example, 1627373566.350603. You can fetch the call_id from the live calls API, which retrieves the live call details. |
| intercom | string | The unique intercom number of the agent to whom call would be transfered, only required in case of type: 4 (Transfer) |



---

## Call Detail Records

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1callrecords](https://docs.smartflo.tatatelebusiness.com/reference/v1callrecords)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/call/records`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| agents | query | False | string |
| destination | query | False | string |
| duration | query | False | string |
| call_type | query | False | string |
| direction | query | False | string |
| did_numbers | query | False | string |
| call_id | query | False | string |
| callerid | query | False | string |
| department | query | False | string |
| operator | query | False | string |
| limit | query | False | string |
| to_date | query | False | string |
| broadcast | query | False | string |
| ivr | query | False | string |
| call_direction | query | False | string |
| page | query | False | string |
| from_date | query | False | string |
| services | query | False | string |
| Authorization | header | True | string |



---

## Initiate Click to Call 

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1click_to_call](https://docs.smartflo.tatatelebusiness.com/reference/v1click_to_call)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/click_to_call`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| agent_number | string | ID of the Smartflo agent who will receive the call |
| destination_number | string | Number of the client that needs to be called |
| caller_id | string | Caller ID that is shown to the called party. |
| async | integer | Make multiple calls symultaneously, i.e don't wait for agent to pick up the call before sending back the response |
| call_timeout | integer | With the help of this request variable you can limit the time of the call. Call will auto disconnect after provided seconds have been reached in call duration. |
| custom_identifier | string | Note: The parameter name is flexible and can be modified based on the specific use case. |



---

## Initiate Click to Call Support

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1click_to_call_support](https://docs.smartflo.tatatelebusiness.com/reference/v1click_to_call_support)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/click_to_call_support`

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| customer_number | string | The number of the customer who will receive call. The customer number must be between 10 and 15 digits. For example, 9999888877. |
| customer_ring_timeout | integer | Time in seconds to ring the customer's number before stopping. Minimum: 10 seconds, Maximum: 30 seconds. Defaults to 30 seconds if not specified. |
| caller_id | string | This request uses the DID number (Format Ex- 9180694XXXXX) to initiate the call, if it is pre-configured and valid under your account. |
| async | integer | Make multiple calls simultaneously, i.e don't wait for agent to pick up the call before sending back the response (Set default value to 1) |
| api_key | string | The API Key for authentication and also to determine the destination for the call. Note that the Click to call API key is generated for a specific agent, department etc. |
| custom_identifier | string | Note: The parameter name is flexible and can be modified based on the specific use case. |
| call_timeout | integer | With the help of this request variable you can limit the time of the call. Call will auto disconnect after provided seconds have been reached in call duration. |



---

## Fetch details of active calls

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1live_calls](https://docs.smartflo.tatatelebusiness.com/reference/v1live_calls)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/live_calls`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| agent_number | query | False | string |
| extension | query | False | string |
| call_id | query | False | string |
| did_number | query | False | string |
| Authorization | header | True | string |



---

## Create a new contact group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroup](https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroup)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/contact/group`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the contact group |
| description | string | Description of the contact group |
| custom_field_map | array |  |
| list_id | integer | List of to be associated with contact group |



---

## Update a contact group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroupid](https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroupid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/contact/group/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the contact group. |
| description | string | Description of the contact group. |



---

## Delete a contact group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroupid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroupid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/contact/group/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch list of groups

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroups](https://docs.smartflo.tatatelebusiness.com/reference/v1contactgroups)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/contact/groups`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| contact_group_id | query | False | string |
| limit | query | False | string |
| updated_after | query | False | string |
| page | query | False | string |
| Authorization | header | True | string |



---

## Add contact in contact group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactid](https://docs.smartflo.tatatelebusiness.com/reference/v1contactid)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/contact/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| field_0 | string | Phone number of contact. |
| field_1 | string | Name of contact |
| field_2 | string | Email ID of contact |
| field_3 | string | Address of contact. |
| field_4 | string | Company name of contact. |
| field_5 | string | Alternate phone number of contact |
| field_6 | string | Custom field 1 |
| field_7 | string | Custom field 2 |
| field_8 | string | Custom field 3 |



---

## Update contact in contact group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1contactid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/contact/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| ADD FIELDS | array |  |



---

## Delete contact in contact group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1contactid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/contact/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch list of all contacts

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contacts](https://docs.smartflo.tatatelebusiness.com/reference/v1contacts)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/contacts`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| contact_id | query | False | string |
| contact_group_id | query | False | string |
| limit | query | False | string |
| platform_key | query | False | string |
| updated_after | query | False | string |
| page | query | False | string |
| searchTerm | query | False | string |
| Authorization | header | True | string |



---

## Fetch Status of Bulk Upload

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactsbatch_statusid](https://docs.smartflo.tatatelebusiness.com/reference/v1contactsbatch_statusid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/contacts/batch_status/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | False | string |



---

## Bulk Contacts in Contact Group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1contactsid](https://docs.smartflo.tatatelebusiness.com/reference/v1contactsid)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/contacts/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | False | string |



---

## Session Call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialersession_call](https://docs.smartflo.tatatelebusiness.com/reference/v1dialersession_call)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/session_call`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| startOrEnd | boolean | True if session call has to be started and false if session call has to be ended |
| campaignId | string | Campaign Id where the session call is ongoing |
| logout | boolean | True if agent has to be logged out from session |



---

## Logout

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerlogout](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerlogout)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/logout`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| campaign_id | string | Campaign Id of call which has to be disconnected |



---

## Disposition Detail Update

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_details_update](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_details_update)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/store-disposition`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| disposition_status | string | Id of the disposition status |
| sub_disposition_status | string | Id of the sub-disposition status in case of parent disposition |
| unique_id | string | Id of the call for which disposition details have to be stored |
| disposition_note | string | Optional Comment/Note to be added while storing disposition |
| play_agent_call_patch_music | string | Value- True/False |



---

## Disconnect Call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisconnect_call](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisconnect_call)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/disconnect_call`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| call_id | string | Call Id of call which has to be disconnected |
| start_break | boolean | Optional fields to start break after call ends |
| break_code | string | Break code only mandatory if start_break is true |



---

## Add an agent script

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_script-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_script-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/agent_script`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the agent script |
| list_id | string | List Id where agent script has to be applied |
| description | string | Description of agent script |
| message | string | Message for agent |



---

## Update a particular agent script

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_scriptid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_scriptid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/agent_script/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the agent script. |
| list_id | string | List Id where agent script has to be applied |
| description | string | Description of agent script. |
| message | string | Message for agent. |



---

## Fetch a particular agent script

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_scriptid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_scriptid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/agent_script/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Delete a particular agent script

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_scriptid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_scriptid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/agent_script/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch an agent script

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_script](https://docs.smartflo.tatatelebusiness.com/reference/v1dialeragent_script)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/agent_script`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Add a break list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_list-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_list-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/break_list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the break list |
| description | string | Description of the break list |



---

## Update a particular break list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_listid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_listid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/break_list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the break list |
| description | string | Description of the break list |
| status | boolean | Status of the break list:enabled or disabled |



---

## Start a Break

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreakstart](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreakstart)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/break/start`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| break_code | string | Id of the break code to start break |



---

## End a Break

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreakend](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreakend)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/break/end`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Delete a particular break list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_listid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_listid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/break_list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch all the break lists

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_list](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerbreak_list)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/break_list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Add a dialer campaign

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaign-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaign-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/campaign`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the Dialer Campaign |
| description | string | Description of the Campaign |
| dial_method | string | Method with which leads get connected, valid value is 1 or 2 with the following convention ['id' => '1', 'name' => 'Preview'], ['id' => '2', 'name' => 'Ratio'], |
| auto_dial_duration | string | Preview duration before dialing, mandatory field if dial method is 1 |
| outbound_caller_id | array | Caller ID for the dialer campaign |
| agent_wise_caller_id | integer | Valid value 1 or 0 for enabling or disabling setting caller id for each agent |
| lead_list_map | array | Select lead lists and their status, can select upto 3 active lead lists in the format [{list_id:1234,list_status:1},{list_id:1235,list_status:0},...] |
| agent_wise_lead_list | integer | Valid value 0 or 1 to select lead list individually for each agent |
| list_traversal_order | string | Traversal order method for lead list while dialing, value should be 1,2 or 3 with the following meaning: ['id' => '1', 'name' => 'Oldest First'], ['id' => '2', 'name' => 'Newest First'],['id' => '3', 'name' => 'Random'], |
| agent_script | string | Id of script where content will be visible to only agent while dialing lead |
| disposition_list | string | Id of list containing short codes that describe the outcome of calls |
| number_of_retry | string | Refresh Count |
| retry_after_minutes | string | Refresh Interval duration in minutes |
| auto_disposition_cancel_duration | string | Wrap up time for agent in seconds |
| dial_status | array | 0 = New , 3 = Not reachable , 9 = Busy  |
| time_group | string | Id of Campaign Active Time which will reflect for all agents |
| time_group_recording | string | Id of Campaign Active Time Recording |
| ring_timeout | string | The call will ring on each agent for the defined seconds before trying any other agent |
| quick_transfer_list | string | Id of Quick Transfer List of the campaign |
| account_dnd_list | string | Id of DND list set up of the campaign |
| hide_lead_details | integer | Valid value 0 or 1,enabling this will hide customer's details |
| update_lead_details | integer | Valid value 0 or 1, enabling this will update customer's details |
| automatic_schedule_call_enabled | integer | Valid value 0 or 1, enabling this will allow adding automatic schedule call for the campaign |
| enable_hangup | string | Valid value 0 or 1, enabling this will cause hangup call for agent |
| enable_external_transfer | integer | Valid value 0 or 1, enabling this will allow external transfer |
| after_call_work_duration | string | Time given to the agent after a call ends in seconds |
| enable_web_form | integer | Valid value 0 or 1, enabling this will allow to add web form |
| webform_url | string | URL of web-form in the dialer campaign |
| music_on_hold | string | Id of music to be played while the calls is connecting to the agents |
| ring_strategy | string | Ring Strategy of Dialer Campaign, valid value is 1,2 or 3 with the following convention: ,['id' => '1', 'name' => 'Random'],['id' => '2', 'name' => 'Fewest Calls'],['id' => '3', 'name' => 'Longest Wait Time'], |
| dial_ratio | string | Ratio in which agents will be called, mandatory field if dial method is 2 |
| enable_transfer | integer | Valid value 0 or 1, enabling this will allow transfering calls |
| manual_lead_list | array | Lead List for Manual Dial, mandatory field if manual_dial_enabled is 1 |
| break_list | string | Id of Pause code List containing break code and name, if agent takes break specifying purpose/reason |
| map_agent_caller_id | string | Individual mapping of each agent with caller id |
| map_agent_lead_list | string | Individual mapping of each agent with lead list |
| connect_agent_through | string | Agent Connection method, valid value is 1,2 or 3 with following convention: ['id' => '1', 'name' => 'Agent Mobile'], ['id' => '2', 'name' => 'Agent Extension'], ['id' => '3', 'name' => 'Both (Extension first, otherwise mobile)'] |
| dial_in_type | string | Agent Call Method, valid value is 1,2 or 3 with following convention: ['id' => '1', 'name' => 'Dial In (Session)'], ['id' => '3', 'name' => 'Dial Out (Session)'], ['id' => '2', 'name' => 'Dial Out (Each Call)'] |
| agent_only_callback | integer | Valid value 0 or 1, enabling this will allow callback for agent in agent panel |
| agent_dial_in_number | string | Agent number in case of dial in |
| agent | array | Agent who gets connected and picks the inbound call |
| enforce_agent_pause_code | integer | Option while showing break codes of a list |
| manual_dial_enabled | integer | Valid value 0 or 1, enabling will allow manual dial for agent in agent panel |
| enable_inbound | integer | Valid value 0 or 1, enabling will set inbound queue for the dialer campaign |
| inbound_queue | string | Id of queue to receive incoming calls from customer, mandatory field if enable_inbound is 1. |
| enable_agent_opt_out | integer | Valid value 0 or 1, enabling this will remove self from inbound queue in agent panel |
| inbound_lead_list | string | Lead List for inbound queue, mandatory field if enable_inbound is 1. |
| enable_auto_answer | integer | Valid value 0 or 1, enabling will make agent get connected to the call |
| call_qualification_duration | string | This duration in seconds will be used to qualify the call as a successful call |
| announcement_recording | string | Id of Welcome tune recording |
| queue_timeout | string | The maximum time a caller can wait in the queue before the call is redirected or disconnected. |



---

## Update a particular dialer campaign

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaignid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaignid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/campaign/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the Dialer Campaign |
| description | string | Description of the Campaign |
| dial_method | string | Method with which leads get connected, valid value is 1 or 2 with the following convention ['id' => '1', 'name' => 'Preview'], ['id' => '2', 'name' => 'Ratio'], |
| auto_dial_duration | string | Preview duration before dialing, mandatory field if dial method is 1 |
| outbound_caller_id | string | Caller ID for the dialer campaign |
| agent_wise_caller_id | boolean | Valid value 1 or 0 for enabling or disabling setting caller id for each agent |
| lead_list_map | array | Select lead lists and their status, can select upto 3 active lead lists in the format [{list_id:1234,list_status:1},{list_id:1235,list_status:0},...] |
| agent_wise_lead_list | boolean | Valid value 0 or 1 to select lead list individually for each agent |
| list_traversal_order | string | Traversal order method for lead list while dialing, value should be 1,2 or 3 with the following meaning: ['id' => '1', 'name' => 'Oldest First'], ['id' => '2', 'name' => 'Newest First'],['id' => '3', 'name' => 'Random'],Traversal order method for lead list while dialing, value should be 1,2 or 3 with the following meaning: ['id' => '1', 'name' => 'Oldest First'], ['id' => '2', 'name' => 'Newest First'],['id' => '3', 'name' => 'Random'], |
| agent_script | string | Id of script where content will be visible to only agent while dialing lead |
| disposition_list | string | Id of list containing short codes that describe the outcome of calls |
| number_of_retry | string | Refresh Count |
| retry_after_minutes | string | Refresh Interval duration in minutes |
| auto_disposition_cancel_duration | string | Wrap up time for agent in seconds |
| dial_status | array | New = 0, Undisposed = -1, Number in Account DND List = -2, Number in Public DND List = -3, Emergency = -4, Call Drop = -5, Channel Limit Reached = -6, Number in Account Block List = -7Missed By Agent = -8, Queue Missed = -9 |
| time_group | string | Id of Campaign Active Time which will reflect for all agents |
| time_group_recording | string | Id of Campaign Active Time Recording |
| ring_timeout | string | The call will ring on each agent for the defined seconds before trying any other agent |
| quick_transfer_list | string | Id of Quick Transfer List of the campaign |
| account_dnd_list | string | Id of DND list set up of the campaign |
| hide_lead_details | boolean | Valid value 0 or 1,enabling this will hide customer's details |
| update_lead_details | boolean | Valid value 0 or 1, enabling this will update customer's details |
| automatic_schedule_call_enabled | boolean | Valid value 0 or 1, enabling this will allow adding automatic schedule call for the campaign |
| enable_hangup | boolean | Valid value 0 or 1, enabling this will cause hangup call for agent |
| enable_external_transfer | boolean | Valid value 0 or 1, enabling this will allow external transfer |
| after_call_work_duration | string | Time given to the agent after a call ends in seconds |
| enable_web_form | boolean | Valid value 0 or 1, enabling this will allow to add web form |
| webform_url | string | URL of web-form in the dialer campaign |
| music_on_hold | string | Id of music to be played while the calls is connecting to the agents |
| ring_strategy | string | Ring Strategy of Dialer Campaign, valid value is 1,2 or 3 with the following convention: ,['id' => '1', 'name' => 'Random'],['id' => '2', 'name' => 'Fewest Calls'],['id' => '3', 'name' => 'Longest Wait Time'], |
| dial_ratio | string | Ratio in which agents will be called, mandatory field if dial method is 2 |
| enable_transfer | boolean | Valid value 0 or 1, enabling this will allow transfering calls |
| manual_lead_list | array | Lead List for Manual Dial, mandatory field if manual_dial_enabled is 1 |
| break_list | string | Id of Pause code List containing break code and name, if agent takes break specifying purpose/reason |
| map_agent_caller_id | string | Individual mapping of each agent with caller id |
| map_agent_lead_list | string | Individual mapping of each agent with lead list |
| connect_agent_through | string | Agent Connection method, valid value is 1,2 or 3 with following convention: ['id' => '1', 'name' => 'Agent Mobile'], ['id' => '2', 'name' => 'Agent Extension'], ['id' => '3', 'name' => 'Both (Extension first, otherwise mobile)'] |
| dial_in_type | string | Agent Call Method, valid value is 1,2 or 3 with following convention: ['id' => '1', 'name' => 'Dial In (Session)'], ['id' => '3', 'name' => 'Dial Out (Session)'], ['id' => '2', 'name' => 'Dial Out (Each Call)'] |
| agent_only_callback | boolean | Valid value 0 or 1, enabling this will allow callback for agent in agent panel |
| agent_dial_in_number | string | Agent number in case of dial in |
| agent | array | Agent who gets connected and picks the inbound call |
| enforce_agent_pause_code | integer | Option while showing break codes of a list |
| manual_dial_enabled | boolean | Valid value 0 or 1, enabling will allow manual dial for agent in agent panel |
| enable_inbound | boolean | Valid value 0 or 1, enabling will set inbound queue for the dialer campaign |
| inbound_queue | string | Id of queue to receive incoming calls from customer, mandatory field if enable_inbound is 1. |
| enable_agent_opt_out | boolean | Valid value 0 or 1, enabling this will remove self from inbound queue in agent panel |
| inbound_lead_list | string | Lead List for inbound queue, mandatory field if enable_inbound is 1. |
| enable_auto_answer | boolean | Valid value 0 or 1, enabling will make agent get connected to the call |
| call_qualification_duration | string | This duration in seconds will be used to qualify the call as a successful call |
| announcement_recording | string | Id of Welcome tune recording |



---

## Fetch dialer campaign details

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaign](https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaign)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/campaign`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Delete a particular dialer campaign

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaignid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaignid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/campaign/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch a particular dialer campaign

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaignid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialercampaignid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/campaign/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Add disposition list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_list-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_list-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/disposition_list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the disposition list |
| description | string | The description of the disposition list |
| status | boolean | Status of the disposition list to set enabled or disabled (1 or 0) |



---

## Update a particular disposition list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_listid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_listid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/disposition_list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the disposition list |
| description | string | The description of the disposition list |
| status | boolean | Status of the disposition list to set enabled or disabled (1 or 0) |



---

## Delete a particular disposition list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_listid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_listid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/disposition_list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch disposition list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_list](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_list)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/disposition_list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Add disposition status

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_status](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_status)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/disposition_status`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the disposition status |
| code | string | Status Code of the Disposition. |
| dispositionList | string | Id of disposition list where disposition has to be added |
| parentDisposition | string | Parent Disposition List Id if sub disposition has to be added |



---

## Update a particular disposition status

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/disposition_status/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the disposition status |
| code | string | Status Code of the Disposition. |
| dispositionList | string | Id of disposition list where disposition has to be added |
| parentDisposition | string | Parent Disposition List Id if sub disposition has to be added |



---

## Delete a particular disposition status

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/disposition_status/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch a particular disposition status

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/disposition_status/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Add disposition status bulk

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusbulk](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerdisposition_statusbulk)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/disposition_status/bulk`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| data | array | Data to be added of disposition status |
| dispositionList | string | Disposition List Id where disposition status has to be added. |



---

## Add an Inbound Queue

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queue-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queue-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/inbound_queue`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the Inbound Queue |
| description | string | “What is this inbound queue for” message |
| ring_strategy | string | Ring Strategy of Inbound Queue, valid values are 1,2 or 3 with the following convention: ,['id' => '1', 'name' => 'Random'],['id' => '2', 'name' => 'Fewest Calls'],['id' => '3', 'name' => 'Longest Wait Time'], |
| queue_timeout | string | Time for which the queue will run |
| failover_destination | string | Destination in case call is not picked, valid format is 'type|id'. For example: hangup||1, dialer_queue||id, voicemail||id |
| music_on_hold | string | To be played while the calls is connecting to the agents, should be a valid id |
| failover_music | string | It will play if no one picks up the call, leave blank for default message, else should be a valid id |
| agent_ring_timeout | string | The call will ring on each agent for the defined seconds before trying any other agent |
| sla_duration | string | This duration will be used to identify if the call was connected to the agent within the specified SLA or outside it |
| agent | string | Agent who gets connected and picks the inbound call |
| sticky_agent | boolean | Functionality to choose if same agent gets connected |
| sticky_time_format | string | Days or hours, mandatory field if sticky_time_format is 1. Valid values are 1 and 2. ['id' => '1', 'name' => 'HOURS', 'max' => 24], ['id' => '2', 'name' => 'DAYS', 'max' => 10] |
| sticky_time_period | string | Duration of sticky_agent time in days, mandatory field if sticky_time_format is 1 |
| callback_customer | boolean | Enabling this will callback customer at the same queue position if customer has pressed the selected dtmf before call hangup |
| callback_threshold_time | string | Time after which the callback can be activated, mandatory field if callback_customer is 1. |
| callback_dtmf | string | DTMF for enabling queue callback, mandatory field if callback_customer is 1, valid values are 0-9 |
| callback_threshold_recording | string | Id of recording to be played to customer after callback threshold is reached,mandatory field if callback_customer is 1 |
| call_hangup_recording | string | Recording to be played to customer on hangup after activating callback |



---

## Update Inbound Queue

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queueid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queueid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/inbound_queue/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the Inbound Queue |
| ring_strategy | string | Ring Strategy of Inbound Queue, valid values are 1,2 or 3 with the following convention: ,['id' => '1', 'name' => 'Random'],['id' => '2', 'name' => 'Fewest Calls'],['id' => '3', 'name' => 'Longest Wait Time'], |
| queue_timeout | string | Time for which the queue will run |
| failover_destination | string | Destination in case call is not picked, valid format is 'type|id'. For example: hangup||1, dialer_queue||id, voicemail||id |
| music_on_hold | string | To be played while the calls is connecting to the agents, should be a valid id |
| failover_music | string | It will play if no one picks up the call, leave blank for default message, else should be a valid id |
| agent_ring_timeout | string | The call will ring on each agent for the defined seconds before trying any other agent |
| sla_duration | string | This duration will be used to identify if the call was connected to the agent within the specified SLA or outside it |
| agent | string | Agent who gets connected and picks the inbound call |
| sticky_agent | boolean | Functionality to choose if same agent gets connected |
| sticky_time_format | string | Days or hours, mandatory field if sticky_time_format is 1. Valid values are 1 and 2. ['id' => '1', 'name' => 'HOURS', 'max' => 24], ['id' => '2', 'name' => 'DAYS', 'max' => 10] |
| sticky_time_period | string | Duration of sticky_agent time in days, mandatory field if sticky_time_format is 1 |
| callback_customer | boolean | Enabling this will callback customer at the same queue position if customer has pressed the selected dtmf before call hangup |
| callback_threshold_time | string | Time after which the callback can be activated, mandatory field if callback_customer is 1. |
| callback_dtmf | string | DTMF for enabling queue callback, mandatory field if callback_customer is 1, valid values are 0-9 |
| callback_threshold_recording | string | Id of recording to be played to customer after callback threshold is reached,mandatory field if callback_customer is 1 |
| call_hangup_recording | string | Recording to be played to customer on hangup after activating callback |



---

## Delete Inbound Queue

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queueid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queueid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/inbound_queue/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch inbound queue details

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queue](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerinbound_queue)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/inbound_queue`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Add a pause code

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_code](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_code)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/pause_code`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the Pause Code |
| description | string | Description to be added in Pause Code |
| breakList | string | Id of break list where pause code has to be added |



---

## Update a particular pause code

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_codeid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_codeid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/pause_code/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the Pause Code |
| description | string | Description to be added of Pause Code |
| breakList | string | Id of list where pause code has to be added |



---

## Fetch a particular pause code

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_codeid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_codeid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/pause_code/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Delete a particular pause code

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_codeid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerpause_codeid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/pause_code/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Add quick transfer list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_list-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_list-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/quick_transfer_list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the list |
| description | string | description to be added in list |
| status | string | Status of list: enabled or disabled |



---

## Update a particular quick transfer list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_listid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_listid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/quick_transfer_list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the list |
| description | string | description to be added in list |
| status | string | Status of list: enabled or disabled |



---

## Fetch quick transfer list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_list](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_list)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/quick_transfer_list`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Delete a particular quick transfer list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_listid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_listid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/quick_transfer_list/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Add Quick Transfer Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_number](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_number)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/quick_transfer_number`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the number |
| number | string | Number to be added in list |
| quickTransferList | string | Id of list |



---

## Update a Particular Quick Transfer Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_numberid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_numberid-1)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/quick_transfer_number/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the number |
| number | string | Number to be added in quick transfer list |
| quickTransferList | string | Id of quick transfer list |



---

## Fetch Quick Transfer Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_numberid](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_numberid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/quick_transfer_number/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Delete a Particular Quick Transfer Number

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_numberid-2](https://docs.smartflo.tatatelebusiness.com/reference/v1dialerquick_transfer_numberid-2)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/dialer/quick_transfer_number/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch List of Skill Lists

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/get-skill-list](https://docs.smartflo.tatatelebusiness.com/reference/get-skill-list)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/skill_lists`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Fetch a particular skill list

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/get-skill-list-id](https://docs.smartflo.tatatelebusiness.com/reference/get-skill-list-id)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/skills/{skill_list_id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |
| skill_list_id | path | True | string |
| limit | query | False | string |



---

## Schedule a Callback

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/schedule-a-callback](https://docs.smartflo.tatatelebusiness.com/reference/schedule-a-callback)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/dialer/schedule_call/`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| customer_name | string | Enter Customer Name |
| schedule_date_time | string | YYYY-MM-DD HH:MM:SS – The exact date and time when the call should be scheduled. |
| assigned_to | string | The agent ID to whom this scheduled call is assigned. |
| customer_number | string | The contact number of the customer to be called. |
| reminder_schedule_callbacks | boolean | If true, a reminder notification will be set for the scheduled callback. |
| reminder_time | integer | The time (in minutes) before the scheduled callback when the reminder should be triggered. |
| call_end_min | integer | The duration after which the scheduled call should automatically end if unanswered. |
| inbound_queue | integer | The queue ID to which this scheduled callback belongs, ensuring proper call routing, only can be used when dialer campaign inbound callback is 1 through campaigns api. |



---

## Update a Scheduled Callback

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/update-a-scheduled-callback](https://docs.smartflo.tatatelebusiness.com/reference/update-a-scheduled-callback)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/dialer/schedule_call/{callback_id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| callback_id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| customer_name | string | The name of the lead for whom the callback is being scheduled. |
| schedule_date_time | string | YYYY-MM-DD HH:MM:SS – The exact date and time when the call should be scheduled. |
| assigned_to | string | The agent ID to whom this scheduled call is assigned. |
| customer_number | string | The contact number of the customer to be called. |
| reminder_schedule_callbacks | boolean | If true, a reminder notification will be set for the scheduled callback. |
| reminder_time | integer | The time (in minutes) before the scheduled callback when the reminder should be triggered. |
| call_end_min | integer | The duration after which the scheduled call should automatically end if unanswered. |
| inbound_queue | integer | The queue ID to which this scheduled callback belongs, ensuring proper call routing, only can be used when dialer campaign inbound callback is 1 through campaigns api. |



---

## Retrieve All Scheduled Callbacks

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/retrieve-all-scheduled-callbacks](https://docs.smartflo.tatatelebusiness.com/reference/retrieve-all-scheduled-callbacks)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/schedule_call`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |
| to_date | query | True | string |
| from_date | query | True | string |



---

## Retrieve a Specific Scheduled Callback

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/retrieve-a-specific-scheduled-callback](https://docs.smartflo.tatatelebusiness.com/reference/retrieve-a-specific-scheduled-callback)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/dialer/schedule-call/{callback_id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| callback_id | path | True | string |
| Authorization | header | True | string |



---

## Create a department

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1department](https://docs.smartflo.tatatelebusiness.com/reference/v1department)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/department`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the department. For example, Counselling. |
| description | string | The description of the department.For example, Department without queue. |
| ring_strategy | string | When a customer dials an extension, there are several strategies that can be devised to distribute the calls as per the availability and the number of agents. |
| failover_dest_type | string | The type of destination where the call should be landed if no one answers the call, for example, hangup. |
| timeout | array | The time in seconds for which the call tries to connect for each agent in this department. For example, 4. |
| destination | array | The unique id of the destination where the call will be land. For example, extension||eid. |
| timeout_destination | string |  |



---

## Update details of department

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1departmentid](https://docs.smartflo.tatatelebusiness.com/reference/v1departmentid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/department/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | The name of the department. For example, Counselling. |
| description | string | The description of the department.For example, Department without queue. |
| ring_strategy | string | When a customer dials an extension, there are several strategies that can be devised to distribute the calls as per the availability and the number of agents. |
| timeout_dest_type | string | The type of destination where the call should be landed if no one answers the call, for example, hangup. |
| timeout | array | The time in seconds for which the call tries to connect for each agent in this department. For example, 4. |
| destination | array | The unique id of the destination where the call will be land. For example, Extension||eid. |



---

## Delete a department

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1departmentid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1departmentid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/department/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch details of all departments

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1departments](https://docs.smartflo.tatatelebusiness.com/reference/v1departments)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/departments`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Create IVR

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1ivr-1](https://docs.smartflo.tatatelebusiness.com/reference/v1ivr-1)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/ivr`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name of the IVR |
| description | string | Description for IVR |
| recording | string | Unique ID of the recording. For example, recording||28935. ID can be retrieved through the system recordings on the web panel |
| timeout | integer | Time for which the IVR will ring. For example, 30 |
| transfer code | string |  |
| destination | array | For example, extension||id |
| option | array | DTMF option, you can add more options by clicking on ADD button. For example, 1 |
| incorrect_count | integer | The number of retries permitted after invalid inputs. For example, 2. |
| invalid_recording | string | For example, recording||id |
| invalid_destination | string | For example, extension||id |
| timeout_retry_recording | string | For example, recording||id |
| timeout_recording | string | For example, recording||id |
| timeout_destination | string | For example, extension||id |
| timeout_tries | integer | For example, 2 |
| recording_invalid | string | For example, recording||id |
| timeout_retries | integer | For example, 2. |
| sms template | array | Unique ID of SMS Template to be associated with IVR Option, only applicable if SMS Template setting is enabled for user account. For example, 35642. |



---

## Update IVR

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1ivrid](https://docs.smartflo.tatatelebusiness.com/reference/v1ivrid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/ivr/id`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| IVR ID | query | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string |  |
| description | string |  |
| recording | string |  |
| timeout | integer |  |
| transfer code | integer |  |
| option | array |  |
| destination | array |  |
| incorrect count | integer |  |
| invalid recording | string |  |
| invalid destination | string |  |
| timeout retry recording | string |  |
| timeout recording | string |  |
| timeout destination | string |  |
| timeout tries | integer |  |
| recording invalid | string |  |



---

## Delete IVR

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1ivrid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1ivrid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/ivr/id`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| IVR ID | query | True | string |
| Authorization | header | True | string |



---

## Retrieve IVR

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1ivr](https://docs.smartflo.tatatelebusiness.com/reference/v1ivr)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/ivrs`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Create a system recording

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1recording](https://docs.smartflo.tatatelebusiness.com/reference/v1recording)

### API Endpoint

**Method:** `POST`
**Path:** `/temporarily disabled`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |



---

## Status of Recording Upload

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1recordingbatch_statusid](https://docs.smartflo.tatatelebusiness.com/reference/v1recordingbatch_statusid)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/recording/batch_status/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | False | string |



---

## Fetch details of all recordings

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1recordings](https://docs.smartflo.tatatelebusiness.com/reference/v1recordings)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/recordings`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |



---

## Create a schedule call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_call](https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_call)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/schedule_call`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| customer_name | string | Name of the customer |
| customer_number | string | Phone number of the customer |
| schedule_callback_date_time | string | Date and Time of the scheduled call, format: Y-m-d H:i:s |
| schedule_callback_text | string | Note for the scheduled call. |
| assigned_to | string | Unique ID of the agent. |
| call_end_min | string | For how much time the call is to be scheduled for |



---

## Update details of schedule call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_callid](https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_callid)

### API Endpoint

**Method:** `PUT`
**Path:** `/v1/schedule_call/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| customer_name | string | Name of the customer |
| schedule_callback_date_time | string | Date and Time of the scheduled call, format: Y-m-d H:i:s |
| schedule_callback_text | string | Note for the scheduled call |



---

## Delete a scheduled call

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_callid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_callid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/schedule_call/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch details of all schedule calls

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_calls](https://docs.smartflo.tatatelebusiness.com/reference/v1schedule_calls)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/schedule_calls`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| limit | query | False | string |
| type | query | False | string |
| to_date | query | False | string |
| page | query | False | string |
| from_date | query | False | string |
| Authorization | header | True | string |



---

## Create a Time Group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1timegroup](https://docs.smartflo.tatatelebusiness.com/reference/v1timegroup)

### API Endpoint

**Method:** `POST`
**Path:** `/v1/timegroup`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

#### Request Body

Content-Type: `application/json`

| Property | Type | Description |
| --- | --- | --- |
| name | string | Name for the timegroup |
| from_time | array | Start time of timegroup (24H Format ) |
| to_time | array | End time of timegroup |
| days | array | Days on which timegroup is applicable |
| dates | array | Dates on which timegroup is applicable, min:1, max:31 |
| months | array | Months on which timegroup is applicable |



---

## Delete a Time Group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1timegroupid-1](https://docs.smartflo.tatatelebusiness.com/reference/v1timegroupid-1)

### API Endpoint

**Method:** `DELETE`
**Path:** `/v1/timegroup/{id}`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| id | path | True | string |
| Authorization | header | True | string |



---

## Fetch details of all Time Group

**URL:** [https://docs.smartflo.tatatelebusiness.com/reference/v1timegroups](https://docs.smartflo.tatatelebusiness.com/reference/v1timegroups)

### API Endpoint

**Method:** `GET`
**Path:** `/v1/timegroups`

#### Parameters (OpenAPI Schema)

| Name | In | Required | Type |
| --- | --- | --- | --- |
| Authorization | header | True | string |

