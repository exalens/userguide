---
id: app_api
title: App API
---
# App API

## App API Revision History
| **Release** | **Date**         | **Comment**                  |
|:------|:----------------|:-------|
| 1.1  | Oct 2023   |     Release 1.1 - Adds the ability to edit and update assets via /asset |
| 1.0  | Aug 2023   |     Release 1.0 - Initial REST API release | 


## Introduction
Exalens' RESTful App API is available for system administrators and developers to integrate Exalens platform intelligence into their existing applications, as well as automatically programmatically desired actions and configuration changes on the Exalens Cortex. The App API is available to access and retrieve specific information from the Exalens platform by using any web development language to access. Common use cases involve retrieving alert data related to high-risk, suspicious, anomalous, or cyber hygiene activity at the network or device level that Exalens has detected, retrieving endpoint asset information associated with these events or for management and audit, or automatically updating alert status and asset intelligence, or system configuration.  The App API can be accessed via HTTPS connection to the management interface IP address of an Exalens Cortex server, whereby API query response data is provided in JSON format. Below are examples of event data provided by the Exalens platform that can be integrated into a third-party application:

- Alerts (referred to as Incidents in the App API)
- Alert Cascades (Correlated alerts with root cause analysis)
- Asset Intelligence
- Intelligence Lookups

The Exalens REST API is accessible using an API key as a security token for authentication. An API can be generated via the Exalens Cortex UI, by selecting the user name on the top right, selecting the “System Administration” menu, navigating to the “API Keys” and then selecting the “Generate API Key” option, where the API key endpoint authentication scopes can be set.


## App API Event Data
Within the Exalens platform, "Endpoints”, “Incidents", and “Cascades” are specific object elements that retrieve respective events may be used and inserted into external third-party applications for a range of use cases. Whilst the REST API provides a range of filtering options to extract these data objects, any advanced parsing of the data (provided in JSON format) should be performed after retrieval from the App API any within your target application.


| **Endpoint** | **Root URL Path** | **Description**                  |
|:------|:----------------|:-------|
| Incidents  | /incident   |     Exalens Detection incident alerts|
| Cascades  | /cascade   |     Exalens Incident Cascades (correlated incident alerts) | 
| Assets  | /asset |     Exalens recorded endpoint assets |


## Accessing the App API
The REST API can be used to access information related to the endpoints assets manually added to the platform automatically discovered in the network (Endpoints), network, endpoint and process incidents generated from the Exalens detection engine (Incidents) and correlated incidents cascades created via automated analysis of related incidents (Cascades).

To access the REST API the REST API make the request with x-client-id (client_id) and x-api-key (client_secret) header to the URL: 
`https://<cortex hostname/ip>/api/thirdparty/<path>`

This URL will be referred to from here on as BASE_URL. The <path> can be any asset, alert, or cascade path.


## Generating an Authentication Token
To generate an API key for REST API access, navigate to the Exalens Cortex Web UI and click on the username icon in the top right of the webpage. From here, a dropdown menu will appear, where “System Administration” should be selected. Under the “System Administration” page, in the centre top of the page select the menu tab entitled “API Keys”. This page tab will list all existing API keys configured within the Exalens Cortex. Here, the “Generate API Key” button can be selected to open the menu for creating a new API key. A “Client ID” should first be defined for the API key. A menu listing several authentication scopes for REST API endpoint access will also be displayed – these should be selected based on the desired level of access that the API key should have. These are described below:


| **Scope** | **Description**        
|:------|:----------------|
| ViewAssets  | Can query and retrieve Asset (endpoint) data from the Exalens Cortex   |   
| EditAssets  | Can query and edit Asset (endpoint) data within the Exalens Cortex   |     
| ViewIncidents  | Can query and retrieve Incident data from the Exalens Cortex |   
| EditIncidents  | Can query and edit Incident data (e.g., status) within the Exalens Cortex  |   
| ViewCascades  | Can query and retrieve Incident Cascade (endpoint) data from the Exalens Cortex   |     
| EditCascades  | Can query and edit Incident Cascade (e.g., status) data within the Exalens Cortex |   

Once the API key authentication scopes are selected, clicking the “Generate” button will create the API key. The Client ID and API Key token can be copied and used. Note that the scopes of a key may be updated by clicking on an existing key, changing the scopes, and then selecting “Update”.


## Assets
The “/asset” REST API endpoint is used to query data related to system/device endpoint assets recorded within the Exalens platform, for example, via passive network monitoring, manual API or CSV uploads in the Cortex UI. This API can be used to add new assets in the Cortex UI.

## Asset API Paths

| **URL** | **Method**         | **Description**                  |
|:------|:----------------|:-------|
| /asset  | GET   |     Returns all assets |
| /asset/id/{endpoint_id}  | GET   |     Return the asset with a matching endpoint ID | 
| /asset/hostname  | GET |     Return all assets with matching hostnames in its hostname list |
| /asset/ip  | GET   |     Return all assets with a matching IP address {ip} |
| /asset/mac  | GET   |     Return all assets with a matching MAC address {mac} | 
| /asset/device_type  | GET |     Return all assets with a matching device type {device_type} |
| /asset/device_attributes  | GET   |     Return all assets with a matching device attributes (device_attributes) | 
| /asset/os  | GET |     Return all assets with a matching Operating System {os} |
| /asset/add  | POST  |     Adds a new asset. Note the input must match the expected keys in the endpoint JSON. “endpoint_id” is automatically generated. IP address (ip) is a mandatory key:value. |
| /asset/remove  | POST  |     Removes an asset with matching endpoint ID {endpoint_id} | 
| /asset/update  | POST |     Updates an asset. Note like /asset/add, the input must match the expected keys in the endpoint JSON. |


## Asset API Examples

| **Endpoint** | **Description**         | **Return Type** | **Example Call**                   |
|:------|:----------------|:-------|:---------------------------|
| /asset  | Returns all endpoints listed in the Exalens platform.| `List[dict]` | `curl -X GET "BASE_URL/asset" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"` |
| /asset/id/{endpoint_id}  | Return the asset with the matching asset id (endpoint_id). Note multiple endpoint IDs can provided by using a delimiter “;”. | `List[dict]` | `curl -X GET "BASE_URL/asset/id/exalens_dev_12;exalens_dev_2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/hostname | Return all assets with the matching asset hostname (hostname_list). Multiple hostnames can be delimited by “;”. | `List[dict]` | `curl -X GET "BASE_URL/asset/hostname/cls-remote-hp;asdf;ver" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/ip  | Return the asset with matching asset ip address (ip). Multiple ip address can be delimited by “;”.|     `List[dict]` | `curl -X GET "BASE_URL/asset/ip/192.168.1.1;192.168.1.2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/mac  | Return the asset with matching asset mac addresss (mac). Multiple mac address can be delimited by “;”.| `List[dict]`| `curl -X GET "BASE_URL/asset/mac/1c:69:7a:6f:72:55;12:23:56:45:65:78" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/device_type  | Return all the assets with matching asset device type (device_type). Multiple device type can be delimited by “;”.| `List[dict]` | ``curl -X GET "BASE_URL/asset/device_type/iot%20sensor;dd;client" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"``|
| /asset/device_attributes  |  Return the asset with matching asset device attributes (device_attributes). Multiple device attributes can be delimited by “;”.| `List[dict]` | `curl -X GET "BASE_URL/asset/device_attributes/PLC;HMI" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/os  | Return the asset with matching asset operating system (os). Multiple operating system can be delimited by “;”.|     `List[dict]` | `curl -X GET "BASE_URL/asset/os/windows%20server%2011;ubuntu" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/add | Adds a new asset. Input must match the expected keys in the endpoint JSON. IP (ip) field is mandatory, endpoint_id and endpoint_no are automatically generated and not required in the input. If “first_seen” and “last_seen” for the endpoint is not given, the current epoch time will be used.|     `None` | `curl -X POST "BASE_URL/asset/add/" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"` -H "Content-Type: application/json" -d '{"ip": "11.12.23.13"}'`|
| /asset/remove  | Removes the asset with id (endpoint_id). Only 1 endpoint can be removed at a time. Therefore for bulk removal, this API must be used repeatedly in repeated requests for each asset that should be removed. | `None` | `curl -X POST "BASE_URL/asset/remove/exalens_dev_12" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
| /asset/update  | Updates an asset. Only 1 endpoint can be changed at a time. Therefore for bulk updates, this API must be used repeatedly in repeated requests for each asset that should be updated. | `None` | `curl -X POST "$BASE_URL/asset/update" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"endpoint_id": "exalens_dev_1","mac": "12:45:78:56:78:32","device_type":"client","device_attributes": "hmi","hostname_list": "test1"}'` |

## Incident Alerts
The “/incident” REST API endpoint is used to query data related to alerts (called incidents within API and JSON data) detected by the Exalens platform.

## Incident Alert API Paths
| **URL** | **Method**         | **Query Data** |
|:------|:----------------|:-------|
|/incident|GET|Returns all incidents.|
|/incident/id/{incident_id}|GET|Returns incidents with a matching incident ID {incident_id} – note that an incident ID is a “signature of the incident” and may not be unique.|
|/incident/no/{incident_no}|GET|Returns all incidents with a matching incident number {incident_no}.|
|/incident/name|GET|Returns all incidents with a matching incident detection name {detection_name}.|
|/incident/type/{incident_type}|GET|Returns all incidents with a matching incident type – permitted values: “cyber”, “physical”.|
|/incident/classification/{classification}|GET|Returns all incidents with a matching incident classification – permitted values: “High Risk”, “Suspicious”, “Anomalous”, “Cyber Hygiene”.|
|/incident/actor_ip/{actor_ip}|GET|Returns all incidents with a matching Incident Actor IP address.|
|/incident/actor_ip/{actor_hostname}|GET|Returns all incidents with a matching Incident Actor hostname.|
|/incident/target_ip/{target_ip}|GET|Returns all incidents with a matching Incident Target IP address.|
|/incident/target_ip/{target_hostname}|GET|Returns all incidents with a matching Incident Target hostname.|
|/incident/detection_artifact|GET|Returns all incident with matching detection artifacts {detection_artifacts}.|
|/incident/cascade/|GET|Returns all incidents that are linked to a cascade.|
|/incident/cascade/{cascade_id}|GET|Returns all incidents that are linked with a specific incident cascade ID.|
|/incident/status/{status}|GET|Returns all incidents with a matching incident status.|
|/incident/update/{incident_id}/status/{status}|POST|Updates dates the Incident Status of an Incident with a matching Incident ID. Permitted values: “open”, “dismissed”, “acknowledged”, “suppressed”|
|/incident/update/{incident_id}/add_note/{add_note}|POST|Adds a note to an incident with a matching Incident ID.|
|/incident/update/{incident_id}/response_taken/{response_taken}|POST|Adds the response taken to the Incident to Incidents with a matching Incident ID.|

## Incident Alert API Examples
| **Endpoint** | **Description**         | **Return Type** | **Example Call**                   |
|:------|:----------------|:-------|:---------------------------|
|/incident|Returns all the incidents.|`List[dict]`|`curl -X GET "BASE_URL/incident" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/id/{incident_id}|Returns the incident with the matching incident ID (incident_id). Multiple incident IDs can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/id/8d7e57523395dbbfa8cf514b5fe;8d7e57523395dbbfa8cf514b5fe" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>”`|
|incident/no/{incident_no}|Returns the incident with the matching incident number (incident_no). Multiple incident no can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/no/1;2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/name/{name}|Returns all incidents with matching incident name (detection_name).|`List[dict]`|`curl -X GET "BASE_URL/incident/name/Suspicious%20unsolicited%20ARP%20replies" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/type/{incident_type}|Returns all incidents with matching incident type (incident_type). Permitted values: cyber, physical. Multiple incident type can be delimited by “;”.      |`List[dict]`|`curl -X GET "BASE_URL/incident/type/cyber" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `|
|/incident/classification/{classification}|Returns all incidents based on classification type (classification). Permitted values: THREAT_BEHAVIOUR, ANOMALOUS_BEHAVIOUR, CYBER_HYGIENE. Multiple classification type can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/classification/threat_behaviour;ANOMALOUS_BEHAVIOUR" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"` |
|/incident/actor_ip/{actor_ip}|Returns all incidents with matching actor IP address. Multiple actor IP can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/actor_ip/10.0.1.100;10.0.1.100" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/actor_hostname/{actor_hostname}|Returns all incidents with matching actor hostname. Multiple actor hostname can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/actor_hostname/hostname-1;hostname-2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/target_ip/{target_ip}|Returns all incidents with matching target IP address (target_ip). Multiple target IP can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/target_ip/10.0.1.103;10.0.1.104" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/target_hostname/{target_hostname}|Returns all incidents with matching target hostname (target_hostname). Multiple target hostname can be delimited by “;”.|`List[dict]`|`curl -X GET "BASE_URL/incident/target_hostname/en001;irc-1" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/cascade|Returns all incidents that are attached to a cascade.|`List[dict]`|`curl -X GET "BASE_URL/incident/cascade/" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"  `|
|/incident/cascade/{cascade_id}|Returns all incidents that belong to a specific cascade ID.|`List[dict]`|`curl -X GET "BASE_URL/incident/cascade/1;5" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/update/{incident_id}/status|Updates the status of an incident. Permitted values: "open", "dismissed", "acknowledged", "suppressed". |`List[dict]`|`curl -X POST "BASE_URL/incident/update/8d7e57523395dbbfa8cf514b5fe;xcvsd/status/dismissed" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/update/{incident_id}/add_note|Updates the "Notes" key in the incident JSON.|`List[dict]`|`curl -X POST "BASE_URL/incident/update/59b461753aa6bd098e977b1e1a1;7ba8ab8ede8c3aa827f2e9222fa/add_note/testnotes" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`|
|/incident/update/{incident_id}/{response_taken}|Updates the "response_taken" key in the incident json.|`List[dict]`|`curl -X POST "BASE_URL/incident/update/8d7e57523395dbbfa8cf514b5fe;7ba8ab8ede8c3aa827f2e9222fa/response_taken" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"source":"testcase","actions":"1","incident_status_update":"close","approval":"manual"}'`|

## Cascades
The “/cascade” REST API endpoint is used to query data related to alerts (incidents) linked with other alerts (incidents as) part of the Exalens root-cause analysis and alert correlation investigation automation workflow engine.

## Cascade API Paths

## Cascade API Examples


## Querying on Asset, Incident or Cascade JSON
To retrieve information from the system related to assets, incidents, or cascades, users can make use of specific REST endpoints: BASE_URL/asset, BASE_URL/incident, and BASE_URL/cascade. By appending a query parameter to these endpoints, users can customise their requests to obtain JSON data associated with assets, incidents, or cascades, creating more complex query to retrieve customised response data. The query parameter is a dictionary that facilitates the creation of queries, allowing users to specify filtering conditions and pagination preferences. The key components of the query parameter include:

## Syntax for filter formation
When forming queries to filter data based on certain conditions, the syntax involves representing these conditions in a structured format. There are two main types of queries: Single Field queries and Multi-field queries.

**Single Field Query**: In a Single Field query, a filtering condition is applied to a specific field within the JSON data. The syntax for a Single Field query is:

`[<field_name>, <sign>, <value>]`

Where:

`<field_name>` represents the name of the field in the JSON data.

`<sign>` can take one of the following values: <, <=, >, >=, <>, =, contains, notcontains, startswith, endswith.

`<value>` is the specific value to be applied as the filter.

Example: 

To retrieve all incidents with an "Open" status, the query parameter would look like this:

`query = {"filter": [["status", "=", "Open"]]}`

**Multi-Field Query**: In a Multi-Field query, two Single Field queries can be combined using logical operators "and" or "or." This allows for more complex filtering conditions that involve multiple fields. The syntax for a Multi-Field query is:

`[<Single Field query>, <logical_operator>, <Single Field query>]`

Where:

`<Single Field query>` is a Single Field query as described above.

`<logical_operator>` can be either "and" or "or" and specifies how the conditions should be combined.

Example: 

To retrieve all incidents with an "Open" status and a "first_seen" timestamp greater than a specific epoch time, the query parameter would look like this:

`query = {"filter": [["status", "=", "Open"], "and", ["first_seen", ">", 1702063402]]}`

By utilising these syntax patterns, users can construct flexible queries to filter data based on specific conditions, allowing for both simple and intricate filtering requirements.

Curl Example:

```sh
curl -X GET "${BASE_URL}/incident?query=$(echo -e $(curl -G --data-urlencode "query={\"filter\":[[\"first_seen\", \">\", 0],\"and\",[\"status\",\"=\",\"Open\"]]}") )" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"
```



**Python Example**

```python
headers = {"x-client-id": <client_id>, "x-api-key": <client_api_key>}
response = requests.get(f"{THIRD_BASE_URL}/asset",
                        verify=False,
                        headers=headers,
                        params={"query": json.dumps(
                            {"filter": [["first_seen", ">", "0"], }
                        )}
                        )
print(response)
print(response.json())
```

**Pagination**:

For pagination, skip and take can be used for this purpose. The query parameter would be:

query = {"skip": 5, "take": 5}

This would retrieve the incident alerts from 6 to 10 (inclusive).

The following table lists the top-level fields and descriptions present in the response for a bulk GET
request:

| **Element** | **Description**  | **Type**    | **Notes** |
|:------|:----------------|:-------|:-------|
| data  | Array containing list of JSON data   |    Array | JSON data varies based on the specific REST API in use. |
| data_count | Count of records in the "data" array |  Integer |


## Query-able field names for Assets 
The following table lists the field name that can be queried for BASE_URL/asset

## Query-able field names for Incidents 
The following table lists the fields that can be queried for BASE_URL/incident with query parameter.

## Query-able field names for Cascades 
The following table lists the fields that can be queried for BASE_URL/cascade with query parameter.

## JSON Object Fields
In this section each of the JSON REST API Objects and their respective fields are summarised.

**Asset JSON**

**Incident JSON**

**Cascade JSON**
