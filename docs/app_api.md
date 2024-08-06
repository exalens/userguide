---
id: app-api
title: App API
---

# App API

## App API Revision History

| **Release** | **Date** | **Comment**                                                                          |
| :---------- | :------- | :----------------------------------------------------------------------------------- |
| 1.2         | Aug 2024 | Release 1.2 - Adds the ability to add, update and delete network lookups via /lookup |
| 1.1         | Oct 2023 | Release 1.1 - Adds the ability to edit and update assets via /asset                  |
| 1.0         | Aug 2023 | Release 1.0 - Initial REST API release                                               |

## Introduction

Exalens' RESTful App API is available for system administrators and developers to integrate Exalens platform intelligence into their existing applications, as well as automatically programmatically desired actions and configuration changes on the Exalens Cortex. The App API is available to access and retrieve specific information from the Exalens platform by using any web development language to access. Common use cases involve retrieving alert data related to high-risk, suspicious, anomalous, or cyber hygiene activity at the network or device level that Exalens has detected, retrieving endpoint asset information associated with these events or for management and audit, or automatically updating alert status and asset intelligence, or system configuration.The App API can be accessed via HTTPS connection to the management interface IP address of an Exalens Cortex server, whereby API query response data is provided in JSON format. Below are examples of event data provided by the Exalens platform that can be integrated into a third-party application:

- Alerts (referred to as Incidents in the App API)
- Alert Cascades (Correlated alerts with root cause analysis)
- Asset Intelligence
- Intelligence Lookups

The Exalens REST API is accessible using an API key as a security token for authentication. An API can be generated via the Exalens Cortex UI, by selecting the user name on the top right, selecting the “System Administration” menu, navigating to the “API Keys” and then selecting the “Generate API Key” option, where the API key endpoint authentication scopes can be set.

## App API Event Data

Within the Exalens platform, "Endpoints”, “Incidents", and “Cascades” are specific object elements that retrieve respective events may be used and inserted into external third-party applications for a range of use cases. Whilst the REST API provides a range of filtering options to extract these data objects, any advanced parsing of the data (provided in JSON format) should be performed after retrieval from the App API any within your target application.

| **Endpoint** | **Root URL Path** | **Description**                                        |
| :----------- | :---------------- | :----------------------------------------------------- |
| Incidents    | /incident         | Exalens Detection incident alerts                      |
| Cascades     | /cascade          | Exalens Incident Cascades (correlated incident alerts) |
| Assets       | /asset            | Exalens recorded endpoint assets                       |
| Lookups      | /lookup           | Exalens network monitoring lookups                     |

## Accessing the App API

The REST API can be used to access information related to the endpoints assets manually added to the platform automatically discovered in the network (Endpoints), network, endpoint and process incidents generated from the Exalens detection engine (Incidents) and correlated incidents cascades created via automated analysis of related incidents (Cascades).

To access the REST API the REST API make the request with x-client-id (client_id) and x-api-key (client_secret) header to the URL:
`https://<cortex hostname/ip>/api/thirdparty/<path>`

This URL will be referred to from here on as BASE_URL. The `<path>` can be any asset, alert, or cascade path.

## Generating an Authentication Token

To generate an API key for REST API access, navigate to the Exalens Cortex Web UI and click on the username icon in the top right of the webpage. From here, a dropdown menu will appear, where “System Administration” should be selected. Under the “System Administration” page, in the centre top of the page select the menu tab entitled “API Keys”. This page tab will list all existing API keys configured within the Exalens Cortex. Here, the “Generate API Key” button can be selected to open the menu for creating a new API key. A “Client ID” should first be defined for the API key. A menu listing several authentication scopes for REST API endpoint access will also be displayed – these should be selected based on the desired level of access that the API key should have. These are described below:

| **Scope**     | **Description**                                                                             |
| :------------ | :------------------------------------------------------------------------------------------ |
| ViewAssets    | Can query and retrieve Asset (endpoint) data from the Exalens Cortex                        |
| EditAssets    | Can query and edit Asset (endpoint) data within the Exalens Cortex                          |
| ViewIncidents | Can query and retrieve Incident data from the Exalens Cortex                                |
| EditIncidents | Can query and edit Incident data (e.g., status) within the Exalens Cortex                   |
| ViewCascades  | Can query and retrieve Incident Cascade (endpoint) data from the Exalens Cortex             |
| EditCascades  | Can query and edit Incident Cascade (e.g., status) data within the Exalens Cortex           |
| ViewLookup    | Can query and retrieve network monitoring lookup data from the Exalens Cortex               |
| EditLookup    | Can edit network monitoring lookup data (e.g., add/update/delete) within the Exalens Cortex |

Once the API key authentication scopes are selected, clicking the “Generate” button will create the API key. The Client ID and API Key token can be copied and used. Note that the scopes of a key may be updated by clicking on an existing key, changing the scopes, and then selecting “Update”.

## Assets

The “/asset” REST API endpoint is used to query data related to system/device endpoint assets recorded within the Exalens platform, for example, via passive network monitoring, manual API or CSV uploads in the Cortex UI. This API can be used to add new assets in the Cortex UI.

**Note**:

- To query assets add ViewEndpoints scope when generating an App API key in System Administration see [System Administration](./system_administration.md).
- To edit alerts add EditEndpoints scope when generating an App API key in System Administration see [System Administration](./system_administration.md).

## Asset API Paths

| **URL**                  | **Method** | **Description**                                                                                                                                                         |
| :----------------------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /asset                   | GET        | Returns all assets                                                                                                                                                      |
| /asset/id/{`endpoint_id`}  | GET        | Return the asset with a matching endpoint ID                                                                                                                            |
| /asset/hostname          | GET        | Return all assets with matching hostnames in its hostname list                                                                                                          |
| /asset/ip                | GET        | Return all assets with a matching IP address {`ip`}                                                                                                                       |
| /asset/mac               | GET        | Return all assets with a matching MAC address {`mac`}                                                                                                                     |
| /asset/device_category   | GET        | Return all assets with a matching device cateogry {`device_category`}                                                                                                     |
| /asset/device_type       | GET        | Return all assets with a matching device type {`device_type`}                                                                                                             |
| /asset/device_attributes | GET        | Return all assets with a matching device attributes (device_attributes)                                                                                                 |
| /asset/os                | GET        | Return all assets with a matching Operating System {`os`}                                                                                                                 |
| /asset/add               | POST       | Adds a new asset. Note the input must match the expected keys in the endpoint JSON. “`endpoint_id`” is automatically generated. IP address (`ip`) is a mandatory key:value. |
| /asset/remove            | POST       | Removes an asset with matching endpoint ID {`endpoint_id`}                                                                                                                |
| /asset/update            | POST       | Updates an asset. Note like /asset/add, the input must match the expected keys in the endpoint JSON.                                                                    |

## Asset API Examples

| **Endpoint**             | **Description**                                                                                                                                                                                                                                                                                   | **Return Type** | **Example Call**                                                                                                                                                                                                                                                                |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /asset                   | Returns all endpoints listed in the Exalens platform.                                                                                                                                                                                                                                             | `List[dict]`    | `curl -X GET "BASE_URL/asset" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                          |
| /asset/id/{`endpoint_id`}  | Return the asset with the matching asset id (`endpoint_id`). Note multiple endpoint IDs can provided by using a delimiter “;”.                                                                                                                                                                      | `List[dict]`    | `curl -X GET "BASE_URL/asset/id/exalens_dev_12;exalens_dev_2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                          |
| /asset/hostname          | Return all assets with the matching asset hostname (hostname_list). Multiple hostnames can be delimited by “;”.                                                                                                                                                                                   | `List[dict]`    | `curl -X GET "BASE_URL/asset/hostname/cls-remote-hp;asdf;ver" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                          |
| /asset/ip                | Return the asset with matching asset ip address (`ip`). Multiple ip address can be delimited by “;”.                                                                                                                                                                                                | `List[dict]`    | `curl -X GET "BASE_URL/asset/ip/192.168.1.1;192.168.1.2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                               |
| /asset/mac               | Return the asset with matching asset mac addresss (mac). Multiple mac address can be delimited by “;”.                                                                                                                                                                                            | `List[dict]`    | `curl -X GET "BASE_URL/asset/mac/1c:69:7a:6f:72:55;12:23:56:45:65:78" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                  |
| /asset/device_category   | Return all the assets with matching asset device category (device_category). Multiple device categories can be delimited by “;”.                                                                                                                                                                  | `List[dict]`    | `curl -X GET "BASE_URL/asset/device_category/Network%20Equipment;IT;OT/ICS" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                            |
| /asset/device_type       | Return all the assets with matching asset device type (device_type). Multiple device type can be delimited by “;”.                                                                                                                                                                                | `List[dict]`    | `curl -X GET "BASE_URL/asset/device_type/iot%20sensor;dd;client" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                       |
| /asset/device_attributes |  Return the asset with matching asset device attributes (device_attributes). Multiple device attributes can be delimited by “;”.                                                                                                                                                                  | `List[dict]`    | `curl -X GET "BASE_URL/asset/device_attributes/PLC;HMI" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                |
| /asset/os                | Return the asset with matching asset operating system (os). Multiple operating system can be delimited by “;”.                                                                                                                                                                                    | `List[dict]`    | `curl -X GET "BASE_URL/asset/os/windows%20server%2011;ubuntu" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                          |
| /asset/add               | Adds a new asset. Input must match the expected keys in the endpoint JSON. IP (`ip`) field is mandatory, `endpoint_id` and endpoint_no are automatically generated and not required in the input. If “first_seen” and “last_seen” for the endpoint is not given, the current epoch time will be used. | `None`          | `curl -X POST "BASE_URL/asset/add/" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"ip": "11.12.23.13"}'`                                                                                                                    |
| /asset/remove            | Removes the asset with id (`endpoint_id`). Only 1 endpoint can be removed at a time. Therefore for bulk removal, this API must be used repeatedly in repeated requests for each asset that should be removed.                                                                                       | `None`          | `curl -X POST "BASE_URL/asset/remove/exalens_dev_12" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                   |
| /asset/update            | Updates an asset. Only 1 endpoint can be changed at a time. Therefore for bulk updates, this API must be used repeatedly in repeated requests for each asset that should be updated.                                                                                                              | `None`          | `curl -X POST "$BASE_URL/asset/update" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"`endpoint_id`": "exalens_dev_1","mac": "12:45:78:56:78:32","device_type":"client","device_attributes": "hmi","hostname_list": "test1"}'` |

## Incident Alerts

The “/incident” REST API endpoint is used to query data related to alerts (called incidents within API and JSON data) detected by the Exalens platform.

**Note**

- Alerts (referred to as Incidents in the App API)
- To query incident alerts add ViewIncidents scope when generating an App API key in System Administration see [System Administration](./system_administration.md).
- To edit incident alerts add EditIncidents scope when generating an App API key in System Administration see [System Administration](./system_administration.md).

## Incident Alert API Paths

| **URL**                                                        | **Method** | **Query Data**                                                                                                                                    |
| :------------------------------------------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| /incident                                                      | GET        | Returns all incidents.                                                                                                                            |
| /incident/id/{`incident_id`}                                     | GET        | Returns incidents with a matching incident ID {`incident_id`} – note that an incident ID is a “signature of the incident” and may not be unique.    |
| /incident/no/{`incident_no`}                                     | GET        | Returns all incidents with a matching incident number {`incident_no`}.                                                                              |
| /incident/name                                                 | GET        | Returns all incidents with a matching incident detection name {`detection_name`}.                                                                   |
| /incident/type/{`incident_type `}                                 | GET        | Returns all incidents with a matching incident type – permitted values: “cyber”, “physical”.                                                      |
| /incident/classification/{`classification`}                      | GET        | Returns all incidents with a matching incident classification – permitted values: “High Risk”, “Suspicious”, “Anomalous”, “Cyber Hygiene”.        |
| /incident/actor_ip/{`actor_ip`}                                  | GET        | Returns all incidents with a matching Incident Actor IP address.                                                                                  |
| /incident/actor_ip/{`actor_hostname`}                            | GET        | Returns all incidents with a matching Incident Actor hostname.                                                                                    |
| /incident/target_ip/{`target_ip`}                                | GET        | Returns all incidents with a matching Incident Target IP address.                                                                                 |
| /incident/target_ip/{`target_hostname`}                          | GET        | Returns all incidents with a matching Incident Target hostname.                                                                                   |
| /incident/detection_artifact                                   | GET        | Returns all incident with matching detection artifacts {`detection_artifacts`}.                                                                     |
| /incident/cascade/                                             | GET        | Returns all incidents that are linked to a cascade.                                                                                               |
| /incident/cascade/{`cascade_id`}                                 | GET        | Returns all incidents that are linked with a specific incident cascade ID.                                                                        |
| /incident/status/{`status`}                                      | GET        | Returns all incidents with a matching incident status.                                                                                            |
| /incident/update/{`incident_id`}/status/{`status`}                 | POST       | Updates dates the Incident Status of an Incident with a matching Incident ID. Permitted values: “open”, “dismissed”, “acknowledged”, “suppressed” |
| /incident/update/{`incident_id`}/add_note/{`add_note `}             | POST       | Adds a note to an incident with a matching Incident ID.                                                                                           |
| /incident/update/{`incident_id`}/response_taken/{`response_taken `} | POST       | Adds the response taken to the Incident to Incidents with a matching Incident ID.                                                                 |

## Incident Alert API Examples

| **Endpoint**                                    | **Description**                                                                                                                                                                                    | **Return Type** | **Example Call**                                                                                                                                                                                                                                                                                           |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /incident                                       | Returns all the incidents.                                                                                                                                                                         | `List[dict]`    | `curl -X GET "BASE_URL/incident" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                                                  |
| /incident/id/{`incident_id`}                      | Returns the incident with the matching incident ID (incident_id). Multiple incident IDs can be delimited by “;”.                                                                                   | `List[dict]`    | `curl -X GET "BASE_URL/incident/id/8d7e57523395dbbfa8cf514b5fe;8d7e57523395dbbfa8cf514b5fe" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>”`                                                                                                                                                       |
| incident/no/{`incident_no`}                       | Returns the incident with the matching incident number (incident_no). Multiple incident no can be delimited by “;”.                                                                                | `List[dict]`    | `curl -X GET "BASE_URL/incident/no/1;2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                                           |
| /incident/name/{`name`}                           | Returns all incidents with matching incident name (detection_name).                                                                                                                                | `List[dict]`    | `curl -X GET "BASE_URL/incident/name/Suspicious%20unsolicited%20ARP%20replies" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                    |
| /incident/type/{`incident_type `}                  | Returns all incidents with matching incident type (incident_type). Permitted values: cyber, physical. Multiple incident type can be delimited by “;”.                                              | `List[dict]`    | `curl -X GET "BASE_URL/incident/type/cyber" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `                                                                                                                                                                                                      |
| /incident/classification/{`classification`}       | Returns all incidents based on classification type (classification). Permitted values: THREAT_BEHAVIOUR, ANOMALOUS_BEHAVIOUR, CYBER_HYGIENE. Multiple classification type can be delimited by “;”. | `List[dict]`    | `curl -X GET "BASE_URL/incident/classification/threat_behaviour;ANOMALOUS_BEHAVIOUR" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                              |
| /incident/actor_ip/{`actor_ip`}                   | Returns all incidents with matching actor IP address. Multiple actor IP can be delimited by “;”.                                                                                                   | `List[dict]`    | `curl -X GET "BASE_URL/incident/actor_ip/10.0.1.100;10.0.1.100" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                   |
| /incident/actor_hostname/{`actor_hostname`}       | Returns all incidents with matching actor hostname. Multiple actor hostname can be delimited by “;”.                                                                                               | `List[dict]`    | `curl -X GET "BASE_URL/incident/actor_hostname/hostname-1;hostname-2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                             |
| /incident/target_ip/{`target_ip`}                 | Returns all incidents with matching target IP address (target_ip). Multiple target IP can be delimited by “;”.                                                                                     | `List[dict]`    | `curl -X GET "BASE_URL/incident/target_ip/10.0.1.103;10.0.1.104" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                  |
| /incident/target_hostname/{`target_hostname`}     | Returns all incidents with matching target hostname (target_hostname). Multiple target hostname can be delimited by “;”.                                                                           | `List[dict]`    | `curl -X GET "BASE_URL/incident/target_hostname/en001;irc-1" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                      |
| /incident/cascade                               | Returns all incidents that are attached to a cascade.                                                                                                                                              | `List[dict]`    | `curl -X GET "BASE_URL/incident/cascade/" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"  `                                                                                                                                                                                                       |
| /incident/cascade/{`cascade_id`}                  | Returns all incidents that belong to a specific cascade ID.                                                                                                                                        | `List[dict]`    | `curl -X GET "BASE_URL/incident/cascade/1;5" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                                                                      |
| /incident/update/{`incident_id`}/status           | Updates the status of an incident. Permitted values: "open", "dismissed", "acknowledged", "suppressed".                                                                                            | `List[dict]`    | `curl -X POST "BASE_URL/incident/update/8d7e57523395dbbfa8cf514b5fe;xcvsd/status/dismissed" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                                                       |
| /incident/update/{`incident_id`}/add_note         | Updates the "Notes" key in the incident JSON.                                                                                                                                                      | `List[dict]`    | `curl -X POST "BASE_URL/incident/update/59b461753aa6bd098e977b1e1a1;7ba8ab8ede8c3aa827f2e9222fa/add_note/testnotes" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                                                                                                               |
| /incident/update/{`incident_id`}/{`response_taken `} | Updates the "response_taken" key in the incident json.                                                                                                                                             | `List[dict]`    | `curl -X POST "BASE_URL/incident/update/8d7e57523395dbbfa8cf514b5fe;7ba8ab8ede8c3aa827f2e9222fa/response_taken" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"source":"testcase","actions":"1","incident_status_update":"close","approval":"manual"}'` |

## Cascades

The “/cascade” REST API endpoint is used to query data related to alerts (incidents) linked with other alerts (incidents as) part of the Exalens root-cause analysis and alert correlation investigation automation workflow engine.

**Note**:

- To query Cascades add ViewCascades scope when generating an App API key in System Administration see [System Administration](./system_administration.md).
- To edit Cascades add EditCascades scope when generating an App API key in System Administration see [System Administration](./system_administration.md).

## Cascade API Paths

| **URL**                                          | **Method** | **Query Data**                                                                                                              |
| :----------------------------------------------- | :--------- | :-------------------------------------------------------------------------------------------------------------------------- |
| /cascade                                         | GET        | Returns all cascades.                                                                                                       |
| /cascade/id/{`cascade_id`}                         | GET        | Returns all cascades with a matching Cascade ID.                                                                            |
| /cascade/name/{`name`}                             | GET        | Returns all cascades with a matching Cascade ID.                                                                            |
| /cascacde/type/{`cascade_type `}                    | GET        | Returns all cascades with a matching Cascade Type {`cascade_type `} = permitted values: “cyber”, “physical”, “cyber-physical”. |
| /cascade/disposition/{`disposition `}               | GET        | Returns all cascades with a matching Disposition {`disposition `}.                                                             |
| /cascade/actor_ip/{`actor_ip`}                     | GET        | Returns all cascades with a matching Actor IP address.                                                                      |
| /cascade/actor_hostname/{`actor_hostname`}         | GET        | Returns all cascades with a matching Actor hostname..                                                                       |
| /cascade/target_ip/{`target_ip`}                   | GET        | Returns all cascades with a matching Target IP address.                                                                     |
| /cascade/target_hostname/{`hostname `}              | GET        | Returns all cascades with a matching Target hostname.                                                                       |
| /cascade/detection_artifact/{`detection_artifact`} | GET        | Returns all cascades with a matching Detection artifacts {`detection_artifacts`}.                                             |
| /cascade/status /{`status`}                        | GET        | Returns all cascades with a matching status – permitted values: “open”, “closed”.                                           |
| /cascade/update/{`cascade_id`}/Status/{`status`}     | POST       | Updates cascade with a matching .cascade ID – permitted values: “open”, “closed”.                                           |

## Cascade API Examples

| **Endpoint**                               | **Description**                                                                                                                                             | **Return Type** | **Example Call**                                                                                                                   |
| :----------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| /cascade                                   | Returns all cascades.                                                                                                                                       | `List[dict]`    | `curl -X GET "BASE_URL/cascade" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                           |
| /cascade/id/{`cascade_id`}                   | Returns cascade with matching cascade id (cascade_id).                                                                                                      | `List[dict]`    | `curl -X GET "BASE_URL/cascade/id/1;2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                    |
| /cascade/name                              | Returns all cascades with matching incident name (detection_name).                                                                                          | `List[dict]`    | `curl -X GET "BASE_URL/cascade/Suspicious%20unsolicited%20ARP%20replies" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" ` |
| /cascade/type/{`cascade_type `}               | Returns all cascades based on cascade types (category). Permitted values: "cyber", "physical", "cyber-physical". Multiple cascade type is delimited by “;”. | `List[dict]`    | `curl -X GET "BASE_URL/cascade/type/cyber" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                                |
| /cascade/disposition                       | Returns all cascades with matching disposition (disposition). Multiple disposition is delimited by “;”.                                                     | `List[dict]`    | `curl -X GET "BASE_URL/cascade/cybersecurity%20threat" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `                   |
| /cascade/actor_ip/{`actor_ip`}               | Return all cascades with matching incidents actor IP address (actor_ip). Multiple actor IP addresses are delimited by “;”.                                  | `List[dict]`    | `curl -X GET "BASE_URL/cascade/actor_ip/10.0.1.100;10.0.1.100" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `           |
| /cascade/actor_hostname/{`actor_hostname`}   | Returns all cascades with matching incidents actor hostname (actor_hostname). Multiple actor hostnames are delimited by “;”.                                | `List[dict]`    | `curl -X GET "BASE_URL/cascade/actor_hostname/en001;irc-1" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `               |
| /cascade/target_ip/{`target_ip`}             | Returns all cascades with matching incident target IP address (target_ip). Multiple ip addresses are delimited by “;”.                                      | `List[dict]`    | `curl -X GET "BASE_URL/cascade/target_ip/10.0.1.103;10.0.1.104" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `          |
| /cascade/target_hostname/{`target_hostname`} | Returns all cascades with matching incident target hostname (target_hostname). Multiple target hostnames are delimited by “:”.                              | `List[dict]`    | `curl -X GET "BASE_URL/cascade/target_hostname/en001;irc-1" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" `              |
| /cascade/update/{`cascade_id`}/status        | Updates the cascade status (status) of cascade id (cascade_id). Permitted values: 'open',’closed’.                                                          | `List[dict]`    | `curl -X POST "BASE_URL/cascade/update/1;5;2/acknowledged" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"`                |

## Lookups

The “/lookup” REST API endpoint is used to query and edit data related to network monioring lookup data within the Exalens platform. This API can be used to add, update or delete lookups in the Cortex UI.

**Note**:

- Table names and field names are case sensitive. CSV file column header values uploads MUST match exactly the case of the field name in the target lookup.
- Do not add First Seen, Last Seen and Count fields to any lookup request.
- To download lookup add ViewLookup scope and for other actions add EditLookup scope while generating api key.
- For a list of currently available lookups and their lookup names see [Network Monitoring](./network_monitoring.md)

## Lookup API Paths

| **URL**   | **Method** | **Description**                                     |
| :-------- | :--------- | :-------------------------------------------------- |
| /add      | POST       | Add a single lookup entry to a lookup               |
| /remove   | POST       | Remove a single lookup entry to a lookup            |
| /upload   | POST       | Bulk upload lookup entry via a CSV file to a lookup |
| /download | POST       | Download a look in CSV file format                  |
| /clear    | POST       | Clear all records in a specific lookup              |
| /clearAll | POST       | Clear all lookups                                   |

## Lookup API Examples

| **Endpoint** | **Description** | **Return Type** | **Example Call**  |
| :- | :-| :- | :-| 
| /add         | Adds a new IP to DNS Hostname mapping to lookup                         |                  `curl -X POST "{BASE_URL}/lookup/add" \ -H "x-client-id: client_id" \ -H "x-api-key: client_api_key" \ -H "Content-Type: application/json" \ -d '{"data_list": [{"IP": "8.8.8.8", "Hostname": "google.com"}], "collection_name": "DNS Hostname to IP Mapping"}' \ --insecure` |
| /remove      | Removes a IP to DNS Hostname mapping record from lookup                 |                 | `curl -X POST "{BASE_URL}/lookup/remove" \ -H "x-client-id: client_id" \ -H "x-api-key: client_api_key" \ -H "Content-Type: application/json" \ --insecure \ -d '{"data_list": [{"IP": "8.8.8.8", "Hostname": "google.com"}], "collection_name": "DNS Hostname to IP Mapping"}'`                 |
| /upload      | Uploads one or more IP to DNS Hostname mappings to lookup from CSV file |                 | `curl -X POST "{BASE_URL}/lookup/upload" \ -H "x-client-id: client_id" \ -H "x-api-key: client_api_key" \ -F "files=@$HOME/Downloads/DNS Hostname to IP Mapping.csv" \ # csv file path -F 'TableName={"name": "DNS Hostname to IP Mapping"}' \ --insecure -w "\nHTTP Status: %{http_code}\n"`    |
| /download    | Downloads specific lookup as CSV file                                   |                 | `curl -X POST "{BASE_URL}/lookup/download" \ -H "x-client-id: client_id" \ -H "x-api-key: client_api_key" \ -H "Content-Type: application/json" \ --insecure \ -d '{"name": "DNS Hostname to IP Mapping"}' \ -o ~/Downloads/DNS_Hostname_to_IP_Mapping.csv \ -w "\nHTTP Status: %{http_code}\n"` |
| /clear       | Clears all records from lookup                                          |                 | `curl -X POST "{BASE_URL}/lookup/clear" \ -H "x-client-id: client_id" \ -H "x-api-key: client_api_key" \ -H "Content-Type: application/json" \ --insecure \ -d '{"collection_name": "DNS Hostname to IP Mapping"}`'                                                                              |
| /ClearAll    | Clears all lookups and record from Cortex                               |                 | `curl -X POST "{BASE_URL}/lookup/clearAll" \-H "x-client-id: client_id" \-H "x-api-key: client_api_key" \ --insecure`                                                                                                                                                                            |

## Querying on Asset, Incident or Cascade JSON

To retrieve information from the system related to assets, incidents, or cascades, users can make use of specific REST endpoints: BASE_URL/asset, BASE_URL/incident, and BASE_URL/cascade. By appending a query parameter to these endpoints, users can customise their requests to obtain JSON data associated with assets, incidents, or cascades, creating more complex query to retrieve customised response data. The query parameter is a dictionary that facilitates the creation of queries, allowing users to specify filtering conditions and pagination preferences. The key components of the query parameter include:

## Syntax for filter formation

When forming queries to filter data based on certain conditions, the syntax involves representing these conditions in a structured format. There are two main types of queries: Single Field queries and Multi-field queries.

**Single Field Query**: In a Single Field query, a filtering condition is applied to a specific field within the JSON data. The syntax for a Single Field query is:

`[<field_name>, <sign>, <value>]`

Where:

`<field_name>` represents the name of the field in the JSON data.

`<sign>` can take one of the following values: `<`, `<=`, `>`, `>=`, `<>`, `=`, contains, notcontains, startswith, endswith.

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

query = `{"skip": 5, "take": 5}`

This would retrieve the incident alerts from 6 to 10 (inclusive).

The following table lists the top-level fields and descriptions present in the response for a bulk GET
request:

| **Element** | **Description**                      | **Type** | **Notes**                                               |
| :---------- | :----------------------------------- | :------- | :------------------------------------------------------ |
| data        | Array containing list of JSON data   | Array    | JSON data varies based on the specific REST API in use. |
| data_count  | Count of records in the "data" array | Integer  |

## Query-able field names for Assets

The following table lists the field name that can be queried for BASE_URL/asset:

| **Field Name**     | **Description**                                            | **Type**       | **Notes**                                                                                                        |
| :----------------- | :--------------------------------------------------------- | :------------- | :--------------------------------------------------------------------------------------------------------------- |
| `endpoint_id`        | Unique identifier for the endpoint                         | `String`       |                                                                                                                  |
| endpoint_no        | Endpoint number                                            | `Integer`      |                                                                                                                  |
| ip                 | IP address of the endpoint asset                           | `String`       |                                                                                                                  |
| hostname_list      | List of hostnames associated with the endpoint asset       | `List[string]` |                                                                                                                  |
| username_list      | List of usernames associated with the endpoint             | `List[string]` |                                                                                                                  |
| mac                | MAC address of the endpoint                                | `String`       |                                                                                                                  |
| device_category    | Category of the device                                     | `String`       | Can be one of: "IT", "OT/ICS", "Network Equipment"                                                               |
| device_type        | Type of the device (e.g., client)                          | `String`       | Can be one of: "Unknown", "Client", "Server"                                                                     |
| device_attributes  | List of additional attributes associated with the device   | `List[string]` |                                                                                                                  |
| os                 | Operating system of the endpoint                           | `String`       |                                                                                                                  |
| firmware           | Firmware version of the endpoint                           | `String`       |                                                                                                                  |
| vendor             | Vendor information of the endpoint                         | `String`       |                                                                                                                  |
| mac_vendor         | MAC vendor information of the endpoint asset's MAC address | `String`       |                                                                                                                  |
| model              | Model information of the endpoint asset                    | `String`       |                                                                                                                  |
| serial_number      | Serial number of the endpoint                              | `String`       |                                                                                                                  |
| criticality        | Criticality level of the endpoint asset                    | `String`       | Can be one of: Normal, Elevated, Critical.                                                                       |
| system_description | Description of the system                                  | `String`       |                                                                                                                  |
| status             | Current status of the endpoint asset                       | `String`       | Can be one of: Active, Inactive for last ‘x' days. Asset is considered 'active’ if last seen within last 7 days. |
| first_seen         | Timestamp of when the endpoint was first seen              | `Integer`      | UNIX EPOCH timestamp                                                                                             |
| last_seen          | Timestamp of when the endpoint was last seen               | `Integer`      | UNIX EPOCH timestamp                                                                                             |
| probe_name         | Dictionary containing first_seen_probe and last_seen_probe | `Dict`         | E.g: `{'first_seen_probe': "site1", 'last_seen_probe': "site10"}`                                             |
| site               | Site information of the endpoint asset                     | `String`       |                                                                                                                  |
| area               | Area information of the endpoint asset                     | `String`       |                                                                                                                  |
| unit_location      | Unit location information of the endpoint asset            | `String`       |                                                                                                                  |
| custodian_name     | Name of the custodian of the endpoint asset                | `String`       |                                                                                                                  |
| custodian_email    | Email of the custodian of the endpoint                     | `String`       |                                                                                                                  |
| zone               | Zone information of the endpoint                           | `String`       |                                                                                                                  |
| purdue_level       | Purdue level of the endpoint                               | `Integer`      | Can be one of the following values: 0, 1, 2, 3, 3.5, 4, 5                                                        |
| asset_grouping_id  | ID associated with the asset grouping of the endpoint      | `Integer`      |                                                                                                                  |

## Query-able field names for Incidents

The following table lists the fields that can be queried for BASE_URL/incident with query parameter:

| **Field Name**           | **Description**                                                   | **Type**       | **Notes**                                                                                   |
| :----------------------- | :---------------------------------------------------------------- | :------------- | :------------------------------------------------------------------------------------------ |
| incident_id              | Unique identifier for the incident                                | `String`       |                                                                                             |
| incident_no              | Incident number                                                   | `Integer`      |                                                                                             |
| detection_description    | Description of the detection                                      | `String`       |                                                                                             |
| assigned_to              | User or entity assigned to handle the incident                    | `String`       | Default value is "Unassigned"                                                               |
| detection_name           | Description of the detected incident alert                        | `String`       |                                                                                             |
| incident_ts              | Timestamp of when the incident alert was detected                 | `Integer`      | UNIX EPOCH timestamp                                                                        |
| status                   | Current status of the incident alert                              | `String`       | Can be in one of the following: open, dismissed, acknowledged                               |
| first_seen_utc           | Timestamp of when the incident alert was first seen (in UTC)      | `String`       | e.g."2023-10-20 15:10:12"                                                                   |
| last_seen_utc            | Timestamp of when the incident alert was last seen (in UTC)       | `String`       | e.g. "2023-10-20 15:10:32"                                                                  |
| first_seen               | Timestamp of when the incident alert was first seen               | `Integer`      | UNIX EPOCH timestamp                                                                        |
| last_seen                | Timestamp of when the incident alert was last seen                | `Integer`      | UNIX EPOCH timestamp                                                                        |
| duration                 | Duration of the incident (in seconds)                             | `Integer`      |                                                                                             |
| strength                 | Detection strength of the incident alert                          | `Integer`      | Values allowed: 0-100                                                                       |
| category                 | Category of the incident alert                                    | `String`       | Can be one of the following values: "Cyber", "Physical"                                     |
| detection_grouping       | Grouping of the incident detection                                | `String`       |                                                                                             |
| detection_context        | Context of the incident detection                                 | `String`       |                                                                                             |
| detection_set_name       | Name of the detection set                                         | `String`       |                                                                                             |
| suppression_timeout      | Timestamp for incident alert suppression timeout                  | `Integer`      | UNIX EPOCH timestamp                                                                        |
| suppression_timeout_utc  | Suppression timeout for incident alert in UTC                     | `String`       |                                                                                             |
| suppression_interval     | Interval for incident alert suppression (in seconds)              | `Integer`      |                                                                                             |
| physical_process_monitor | Details about the physical process monitor                        | `List`         |                                                                                             |
| actor                    | List of actors involved in the incident                           | `List[string]` |                                                                                             |
| actor_label              | Label for the actor                                               | `String`       |                                                                                             |
| target                   | List of targets affected by the incident                          | `List[string]` |                                                                                             |
| target_label             | Label for the target                                              | `String`       |                                                                                             |
| detection_summary        | Summary of the incident alert detection                           | `String`       |                                                                                             |
| classification           | Classification of the incident                                    | `String`       | Can be one of the following values: "High Risk", "Suspicious", "Anomalous", "Cyber Hygiene" |
| cascade_id               | ID of the incident alert's cascade correlation                    | `Integer`      |                                                                                             |
| parent_incident_id       | ID of the parent incident alert in cascade                        | `Integer`      |                                                                                             |
| parent_link              | Link to the parent incident alert in cascade                      | `String`       |                                                                                             |
| parent_delta             | Delta value for the parent incident alert                         | `Integer`      |                                                                                             |
| child_incident_ids       | List of IDs of child incident alerts                              | `List[string]` |                                                                                             |
| is_root                  | Boolean indicating if the incident alert is the root of a cascade | `Boolean`      |                                                                                             |
| service_indicator        | Indicator of the service associated with the incident alert       | `String`       |                                                                                             |
| mitre_attack             | List of MITRE ATT&CK ICS Tactics associated to incident alert     | `List[string]` |                                                                                             |
| source                   | Source of the incident data                                       | `String`       |                                                                                             |
| detection_label          | Label for the incident detection                                  | `String`       |                                                                                             |
| response_time            | Timestamp indicating when the response actions were taken         | `Integer`      | UNIX EPOCH timestamp                                                                        |

## Query-able field names for Cascades

The following table lists the fields that can be queried for BASE_URL/cascade with query parameter:

| **Field Name**          | **Description**                                              | **Type**       | **Notes**                                                        |
| :---------------------- | :----------------------------------------------------------- | :------------- | :--------------------------------------------------------------- |
| root_node               | Unique identifier for the root node of the cascade           | `String`       |                                                                  |
| cascade_id              | Identifier for the cascade                                   | `Integer`      |                                                                  |
| nodes                   | List of nodes in the cascade                                 | `List[string]` |                                                                  |
| leaf_nodes              | List of leaf nodes in the cascade                            | `List[string]` | risk_score                                                       |
| status                  | Status of the cascade                                        | `String`       | Can be any one of the following: "open", "close"                 |
| cascade_name            | Name of the cascade                                          | `String`       |                                                                  |
| category                | Category of the cascade                                      | `String`       | Can be any one of the following: PHYSICAL, CYBER, CYBER_PHYSICAL |
| first_seen              | Timestamp of when the cascade was first seen                 | `Integer`      | UNIX EPOCH timestamp                                             |
| last_seen               | Timestamp of when the cascade was first seen                 | `Integer`      | UNIX EPOCH timestamp                                             |
| cascade_description     | Description of the cascade                                   | `String`       |                                                                  |
| assigned_to             | User or entity assigned to the cascade                       | `String`       |                                                                  |
| kill_chain              | List of stages in the kill chain associated with the cascade | `List[string]` | E.g. `["Lateral Movement","Action on Objectives"]`               |
| incident_classification | List of incident classifications associated with the cascade | `List[string]` | e.g.`["High Risk", "Informational"]`                             |
| mitre_attack            | List of MITRE ATT&CK ICS Tactics associated to cascade       | `List[string]` | e.g.`["Discovery", "Inhibit Response Function"]`                 |

## Asset, Incident and Cascade JSON Object Fields

In this section each of the JSON REST API Objects and their respective fields are summarised.

**Asset JSON**

| **Field**             | **Description**                                                                          |
| :-------------------- | :--------------------------------------------------------------------------------------- |
| endpoint_no           | Unique number used to represent asset                                                    |
| vlan                  | Last seen VLAN (Virtual Local Area Network) ID associated with this asset on the network |
| vlan_history          | VLAN ID history of the endpoint asset                                                    |
| status                | Status of the endpoint (“Active”/“Inactive”)                                             |
| probe_name            | The name of probe where this asset was first seen                                        |
| probe_last_seen_ts    | Last seen timestap of the probe                                                          |
| assigned_process_tags | **(Deprecated – to be removed)**                                                         |
| process_names         | **(Deprecated – to be removed)**                                                         |
| mac_vendor            | Mac vendor of the mac                                                                    |
| ip                    | IP address of the asset                                                                  |
| mac                   | Mac address of the asset                                                                 |
| os                    | Operating system of the asset                                                            |
| firmware              | Firmware of the asset                                                                    |
| criticality           | Criticality of the asset                                                                 |
| model                 | Model of the asset                                                                       |
| vendor                | Vendor of the asset                                                                      |
| description           | **(Deprecated – to be removed) – Replaced by system_description**                        |
| system_description    | System Description of the asset                                                          |
| group                 | **(Deprecated – to be removed)**                                                         |
| custodian             | Contains name and email address of the user responsible for this asset                   |
| site                  | The operational site of the asset                                                        |
| location              | The physical location of the asset                                                       |
| device_attributes     | Device attributes of the Asset                                                           |
| device_type           | The type of device e.g., Server, IoT Sensor, etc.                                        |
| hostname_list         | List of hostnames of the Asset                                                           |
| ip_history            | History of IP address of the asset that may be due to dynamic network addressing         |
| mac_history           | History of mac address of the asset                                                      |
| first_seen            | Asset’s first discovered epoch time                                                      |
| last_seen             | Asset’s last activity epoch time                                                         |
| risk_score            | **(Deprecated – to be removed)**                                                         |
| asset_grouping_id     | Grouping id of the asset used for similar_host                                           |
| similar_hosts         | Assets that are similar to the current asset - and classified as peer asstes             |
| mac_ts                | All Mac address of the asset and its last seen                                           |
| hosted_services       | Count of the services hosted discovered for the asset                                    |
| accessed_services     | Count of the services accessed discovered for the asset                                  |
| multicast_services    | Count of the multicast services discovered for the asset                                 |
| broadcast_services    | Count of the broadcast services discovered for the asset                                 |
| fingerprints          | Count of unique network fingerprints discovered for the asset                            |
| default_gateway       | L2 and L3 Default gateway of the asset                                                   |

**Incident JSON**

| **Field**                    | **Description**                                                                                      |
| :--------------------------- | :--------------------------------------------------------------------------------------------------- |
| incident_id                  | Unique hash of the incident                                                                          |
| incident_no                  | Unique identifier of the incident                                                                    |
| detection_description        | A detailed description of the detection                                                              |
| assigned_to                  | The person or team responsible for this incident                                                     |
| priority                     | **Deprecated – to be removed**                                                                       |
| detection_name               | The name or label of the incident                                                                    |
| incident_ts                  | The timestamp when the incident alert occurred                                                       |
| status                       | Status of the incident alert                                                                         |
| status_history               | History of status changes                                                                            |
| first_seen_utc               | Timestamp when the incident was first observed in UTC time                                           |
| last_seen_utc                | Timestamp when the incident was last seen in UTC time                                                |
| src                          | Source of the incident alert                                                                         |
| dst                          | Destination of the incident alert                                                                    |
| src_port                     | Source port(s) present in the incident alert                                                         |
| dst_port                     | Destination port(s) present in the incident alert                                                    |
| src_hostname                 | Hostname associated with the source / actor of an incident                                           |
| dst_hostname                 | Hostname associated with the destination / target of an incident                                     |
| first_seen                   | Epoch time that the incident was first observed                                                      |
| last_seen                    | Epoch time that the incident was last observed                                                       |
| src_`endpoint_id`              | Identifier for the source endpoint asset involved in the incident alert                              |
| dst_`endpoint_id`              | Identifier for the destination endpoint asset involved in the incident alert                         |
| duration                     | Duration of the incident                                                                             |
| occurrence                   | Number of times the incident alert has occurred within suppression timeout                           |
| incident_update              | Last update or change made to the incident alert                                                     |
| strength                     | Strength /confidence of the incident’s detection context                                             |
| category                     | Category to which the incident alert belongs (“cyber”, “physical”)                                   |
| detection_grouping           | Grouping of detection involved.                                                                      |
| detection_set_name           | Name of the detection                                                                                |
| linking_timeout              | Analysis timeout for linking related incident alerts                                                 |
| suppression_timeout          | Time period during which the incident remains active and may be updated                              |
| suppression_timeout_utc      | Incident alert suppression timeout in UTC time                                                       |
| suppression_interval         | The interval between detection updates for the incident alert                                        |
| response                     | **Deprecated – to be removed (replaced by response_taken)**                                          |
| terms                        | **Deprecated – to be removed**                                                                       |
| physical_process_monitor     | **Deprecated – to be removed**                                                                       |
| actor                        | The actor or entity responsible for the incident alert                                               |
| actor_label                  | A label or description for the actor                                                                 |
| target                       | The target or entity affected by the incident                                                        |
| target_label                 | A label or description for the target                                                                |
| detection_summary            | A summary of the incident alert                                                                      |
| incident_summary             | **Deprecated – to be removed**                                                                       |
| description                  | A general description of the detection                                                               |
| severity                     | **Deprecated – to be removed**                                                                       |
| severity_text                | **Deprecated – to be removed**                                                                       |
| classification               | Classification of the incident (“High Risk”, “Suspicious”, “Anomalous”, “Cyber Hygiene”)             |
| risk_score                   | **Deprecated – to be removed**                                                                       |
| risk_score_label             | **Deprecated – to be removed**                                                                       |
| cascade_summary              | A summary of a cascade incident (for this and related incidents in the cascade)                      |
| cascade_suppression_timeout  | The suppression timeout for cascade incidents                                                        |
| cascade_id                   | This incident alert's cascsade ID (if applicable)                                                    |
| parent_incident_id           | This incident alert's parent cascade incident ID (if applicable)                                     |
| parent_link                  | This incident alert's parent cascade link (if applicable)                                            |
| parent_delta                 | The time difference between this incident alert's parent incident alert first_seen                   |
| child_incident_ids           | The IDs of this incident alert's children incidents linked in a cascade (if applicable)              |
| is_root                      | A flag indicating if this incident is the root incident in a cascade                                 |
| behavioural_lookup_artifacts | **Deprecated - to be removed**                                                                       |
| detection_artifacts          | Artifacts associated with the detection incident.                                                    |
| service_indicator            | Indicators related to a specific service or application seen in the incident                         |
| mitre_attack                 | References to MITRE ATT&CK Framework and Tactics, Techniques and Procedures related to this incident |
| kill_chain                   | Reference to cyber killchain phase potentially related to this incident                              |
| query                        | **Deprecated – to be removed**                                                                       |
| source                       | The source or origin of the incident alert                                                           |
| detection_label              | A label or identifier for the detection                                                              |
| cortex_url                   | URL or reference to the Exalens Cortex incident analysis view for this incident                      |
| notes                        | Notes and comments related to this incident alert                                                    |
| response_taken               | Actions and responses taken in response to the incident                                              |
| indicators_triggered_flag    | Flags indicating if certain detection indicators were triggered for this incident                    |
| null_attributes              | Deprecated - to be removed                                                                           |
| full_text                    | Deprecated - to be removed                                                                           |

**Cascade JSON**

| **Field**               | **Description**                                                                                                                |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| root_node               | Indicates the root incident within a cascade (e.g., the start of the cascade)                                                  |
| cascade_id              | A unique identifier for the cascade of incidents                                                                               |
| nodes                   | Represents the individual incidents within a cascade                                                                           |
| leaf_nodes              | Refers to the leaf nodes in the cascade, which are the incidents that do not have child incidents                              |
| risk_score              | **Deprecated - to be removed**                                                                                                 |
| risk_score_label        | **Deprecated - to be removed**                                                                                                 |
| risk_score_threshold    | **Deprecated - to be removed**                                                                                                 |
| visible                 | Indicates whether the cascade of incidents is visible or hidden in the Cortex UI                                               |
| status                  | Status of the cascade" "open", "closed"                                                                                        |
| cascade_name            | Name or label for the cascade of incidents (usually a number and root incident alert name e.g., 11: Network Scanning Activity) |
| category                | Impact category to which the cascade belongs ("PHYSICAL", "CYBER", "CYBER_PHYSICAL")                                           |
| suppression_timeout     | The duration during which updates to the cascade can be made, after which it can no longer be updated                          |
| cascade_no              | A unique identifier or number associated with the cacade                                                                       |
| first_seen              | Timestamp when the cascade was first created                                                                                   |
| last_seen               | Timestamp when the cascade was last updated (via an update to one of the cascade incident alerts)                              |
| cascade_description     | A summary description of the cascade of incident alerts                                                                        |
| status_history          | History of status changes of the cascade                                                                                       |
| assigned_to             | The person or team responsible for managing or responding to the cascade                                                       |
| threat_signature        | **Deprecated - to be removed**                                                                                                 |
| cascade_edges           | Represents the connections or relationships between incidents in the cascade                                                   |
| disposition             | The disposition of the cascade                                                                                                 |
| explanation             | Explanation or analysis of the cascade pattern and its linked incidents                                                        |
| confidence              | **Deprecated - to be removed**                                                                                                 |
| response                | **Deprecated - to be removed**                                                                                                 |
| mitre_attack            | References to MITRE ATT&CK Framework and the Tactics, Techniques and Procedures associated to incidents in the cascade         |
| kill_chain              | A representation of the steps or stages of the cyber killchain observed for incidents in the cascade                           |
| incident_classification | The classification or type of the cascade based on the incidents linked in the cascade ("PHYSICAL", "CYBER", "CYBER_PHYSICAL") |
| cortex_url              | URL or reference to the cascade analysis view in the Exalens Cortex UI                                                         |
| notes                   | Notes and comments related to the cascade added by an analyst                                                                  |
| null_attributes         | Deprecated - to be removed                                                                                                     |
