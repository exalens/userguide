---
id: app_api
title: App API
---
# App API

## App API Revision History
| **Release** | **Date**         | **Comment**                  |
|:------:|:----------------:|-------:|
| 1.1  | Oct 2023   |     Release 1.1 - Adds the ability to edit and update assets via /endpoint |
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

Default REST Endpoints

| **Endpoint** | **Root URL Path**         | **Description**                  |
|:------:|:----------------:|-------:|
| Incidents  | /incidents   |     Exalens Detection incidents |
| Cascades  | /cascades   |     Exalens Incident Cascades (correlated incidents) | 
| Endpoints  | /Michael Brown |     Exalens recorded endpoint assets |

## Accessing the App API
The REST API can be used to access information related to the endpoints assets manually added to the platform automatically discovered in the network (Endpoints), network, endpoint and process incidents generated from the Exalens detection engine (Incidents) and correlated incidents cascades created via automated analysis of related incidents (Cascades).

To access the REST API the REST API make the request with x-client-id (client_id) and x-api-key (client_secret) header to the URL: 
`https://<cortex hostname/ip>/api/thirdparty/<path>`

This URL will be referred to from here on as BASE_URL. The <path> can be any asset, alert, or cascade path.

## Generating an Authentication Token
To generate an API key for REST API access, navigate to the Exalens Cortex Web UI and click on the username icon in the top right of the webpage. From here, a dropdown menu will appear, where “System Administration” should be selected. Under the “System Administration” page, in the centre top of the page select the menu tab entitled “API Keys”. This page tab will list all existing API keys configured within the Exalens Cortex. Here, the “Generate API Key” button can be selected to open the menu for creating a new API key. A “Client ID” should first be defined for the API key. A menu listing several authentication scopes for REST API endpoint access will also be displayed – these should be selected based on the desired level of access that the API key should have. These are described below:

| **Scope** | **Description**        
|:------:|:----------------:|
| ViewAssets  | Can query and retrieve Asset (endpoint) data from the Exalens Cortex   |   
| EditAssets  | Can query and edit Asset (endpoint) data within the Exalens Cortex   |     
| ViewIncidents  | Can query and retrieve Incident data from the Exalens Cortex |   
| EditIncidents  | Can query and edit Incident data (e.g., status) within the Exalens Cortex  |   
| ViewCascades  | Can query and retrieve Incident Cascade (endpoint) data from the Exalens Cortex   |     
| EditCascades  | Can query and edit Incident Cascade (e.g., status) data within the Exalens Cortex |   

Once the API key authentication scopes are selected, clicking the “Generate” button will create the API key. The Client ID and API Key token can be copied and used. Note that the scopes of a key may be updated by clicking on an existing key, changing the scopes, and then selecting “Update”.

## Asset (System/Device Endpoints)
The “/asset” REST API endpoint is used to query data related to system/device endpoint assets recorded within the Exalens platform, for example, via passive network monitoring, manual API or CSV uploads in the Cortex UI. This API can be used to add new assets in the Cortex UI.

## Endpoint (Asset) API Paths

| **URL** | **Method**         | **Description**                  |
|:------:|:----------------:|-------:|
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

## Endpoint Asset API Examples

| **Endpoint** | **Description**         | **Return Type** | **Example Call**                   |
|:------:|:----------------:|-------:|:---------------------------:|
| /asset  | Returns all endpoints listed in the Exalens platform.   |     `List[dict]` | curl -X GET "BASE_URL/asset" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" |
| /asset/id/{endpoint_id}  | Return the asset with the matching asset id (endpoint_id). Note multiple endpoint IDs can provided by using a delimiter “;”. |     `List[dict]` | curl -X GET "BASE_URL/asset/id/exalens_dev_12;exalens_dev_2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/hostname | Return all assets with the matching asset hostname (hostname_list). Multiple hostnames can be delimited by “;”.
|     `List[dict]` | curl -X GET "BASE_URL/asset/hostname/cls-remote-hp;asdf;ver" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/ip  | Return the asset with matching asset ip address (ip). Multiple ip address can be delimited by “;”.|     `List[dict]` | curl -X GET "BASE_URL/asset/ip/192.168.1.1;192.168.1.2" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/mac  | Return the asset with matching asset mac addresss (mac). Multiple mac address can be delimited by “;”.|     `List[dict]`| curl -X GET "BASE_URL/asset/mac/1c:69:7a:6f:72:55;12:23:56:45:65:78" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/device_type  | Return all the assets with matching asset device type (device_type). Multiple device type can be delimited by “;”.
|  `List[dict]` | curl -X GET "BASE_URL/asset/device_type/iot%20sensor;dd;client" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/device_attributes  |  Return the asset with matching asset device attributes (device_attributes). Multiple device attributes can be delimited by “;”.|     `List[dict]` | curl -X GET "BASE_URL/asset/device_attributes/PLC;HMI" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/os  | Return the asset with matching asset operating system (os). Multiple operating system can be delimited by “;”.|     `List[dict]` | curl -X GET "BASE_URL/asset/os/windows%20server%2011;ubuntu" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/add | Adds a new asset. Input must match the expected keys in the endpoint JSON. IP (ip) field is mandatory, endpoint_id and endpoint_no are automatically generated and not required in the input. If “first_seen” and “last_seen” for the endpoint is not given, the current epoch time will be used.|     `None` | curl -X POST "BASE_URL/asset/add/" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"ip": "11.12.23.13"}'|
| /asset/remove  | Removes the asset with id (endpoint_id). Only 1 endpoint can be removed at a time. Therefore for bulk removal, this API must be used repeatedly in repeated requests for each asset that should be removed. | `None` | curl -X POST "BASE_URL/asset/remove/exalens_dev_12" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>"|
| /asset/update  | Updates an asset. Only 1 endpoint can be changed at a time. Therefore for bulk updates, this API must be used repeatedly in repeated requests for each asset that should be updated. | `None` | curl -X POST "$BASE_URL/asset/update" -H "x-client-id: <client_id>" -H "x-api-key: <api_key>" -H "Content-Type: application/json" -d '{"endpoint_id": "exalens_dev_1","mac": "12:45:78:56:78:32","device_type":"client","device_attributes": "hmi","hostname_list": "test1"}' |






































































