---
id: network-monitoring
title: Network Monitoring
---
# Network Monitoring

## Introduction

The guide will provide information on how to set up passive network monitoring on your Exalens installation, using external Exalens Data Collectors, or the internal Exalens Cortex Data Collector.

## Configuring Network Monitoring
To enable passive network monitoring, at least one Exalens DC must be configured with a “Monitoring Interface” which configures the DC to activate its Deep Packet Inspection (DPI) engine for a specific network interface on the host in which the DC is installed, and start collecting and analysing packets from this interface. Once configured, the DC will begin generating and forwarding network logs to the destination Exalens Cortex for storage, processing and analysis.

Configuring a “Monitoring Interface” on a DC is straightforward, however, before configuration atleast one network interface on the DC host should be selected and available for the DC to configure as a "Monitoring Interface" and activation of passive monitoring of network traffic received on this interface.

## Passive Network Monitoring via TAP, SPAN, or On-Host

When setting up passive network monitoring it is important to consider how packet capture will implemented. Typically, there are three methods for passive monitoring using an Exalens DCP, as listed below:

- **Network TAP**: A network TAP (Test Access Point) is a device that connects directly to the cabling infrastructure between two network devices, monitoring all data flows through the TAP. Using an internal splitter, the TAP creates a copy of the data for monitoring while the original data continues unimpeded through the network. A DC can be configured to receive packets from any TAP device by connecting its monitored interface to the TAP device interface that is forwarding copied capture packets.

- **Network SPAN port**: A SPAN port (sometimes called a mirror port) is a software feature built into a switch or router that creates a copy of selected packets passing through the device and sends them to a designated SPAN port. Using software, the administrator can easily configure or change what is monitored. A DC can be configured to receive packets from any SPAN-capable device by connecting its monitored interface to a device’s SPAN interface configured as a mirror port.

- **On Host**: A DC can be deployed on any Linux device to monitor the interface(s) of that Linux system and forwarding network logs to a Exalens Cortex. On-host DC deployments are only recommended for Linux hosts with at least 16GB RAM and 8-core CPUs.

An illustrative example is provided below:

![Diagram showing the Exalens Network Monitoring Deployment Options](./network_monitoring/network_monitoring_overview.png)

## Adding Monitor Interfaces via the Cortex UI
Configuration of a network monitoring interface on a DC is carried out under the "Network - Configure" menu option on the side navigation of the Cortex UI. Once in this menu, select the menu tab "Data Collectors", as shown below: 

![Diagram showing the System Administration Option on Cortex UI](./network_monitoring/network_configure.png)

Under the list of available Data Collectors, select the Data Collector you wish to configure passive network monitoring interfaces on by clicking on the "LAN" network icon. This will create a configuration popup window for configuring monitor interfaces on the Data Collector.

![Diagram showing the System Administration Option on Cortex UI](./network_monitoring/data_collector_config_button.png)

![Diagram showing the System Administration Option on Cortex UI](./network_monitoring/interface_configure_menu.png)

**Important:** The name of the monitoring interface should match exactly how it appears on the host system operating system in which the Data Collector is installed, and this interface must be up and available other this will result in the DPI engine continuously restarting its service until the interface is available.

When network monitoring interfaces are added to the Data Collector configuration, the Cortex will notify the Data Collector to begin monitoring network traffic on the specified interface (note this can take a few minutes to start collection). After updating the Data Collector configuration, if the newly configured interface is not available there may be no errors or warnings generated. You can validate network monitoring is correctly functioning by reviewing the network logs under Network Monitoring - Logs, selecting the “Conn” log and filtering the logs by the Data Collector “Probe Name” field to see if traffic is being received by the Cortex from the DC on the desired interface. See the example below: 

![Diagram showing network logs being received by Data Collector](./network_monitoring/data_collector_network_logs.png)

## Setting Network Interface to Promiscuous Mode
To enable fully passive monitoring of an interface on a host that allows the host to process all packets received by an interface, promiscuous mode must be enabled in the operating system of the host for the target interface. To configure promiscuous mode on a network interface, run the following command using the Exalens Data Collector binary on the host terminal command line:

```sh
./exalens-datacollector --netmon-config
```

This command will display all available interfaces in the host operating system. Select the number of the interface to configure in promiscuous mode. 

**Important** configuring monitoring mode on any interface will prevent the interface being used for network communication, as this command sets the interface into a locked-down "receive-only" mode. Therefore do not enable this setting on any interface where network communication is required on the host system where the Data Collector is installed. Therefore, **DO NOT* select the Data Collector interface used to communicate with the Exalens Cortex, as this will break the connection between the Data Collector and Cortex, therefore. For on-host Data Collector deployments in Linux devices, promiscuous mode should not be set.

## Setting up a Monitoring Interface with a Secure Monitoring Configuration
Exalens makes available a number of command line utility tools for network monitoring and command-line PCAP uploads. These utility tools are available in both the Exalens Cortex and Data Collector binaries.

All available utility tool commands can be seen by simply running ./exalens-cortex or ./exalens-datacollector, without any commands specified. This will output the available commands as follows:

```sh
./exalens-cortex
Usage: ./exalens-cortex --start {tag} | --stop | --update {tag} | --backup | --restore-backup | --clean-install {tag} | --uninstall | --netmon-config | --install-docker | --uninstall-docker | --container-status | --upload-pcap
```

```sh
./exalens-datacollector
sage: $0 --start {tag} | --stop | --update {tag} | --backup | --restore-backup | --clean-install {tag} | --update-hostname {hostname} | --uninstall | --download-config | --netmon-config | --install-docker | --uninstall-docker | --container-status | --upload-pcap
```

All sets of utility tools between Exalens Cortex and Exalens Data Collector binaries work in the same way. However, for Exalens Data Collector there are two extra installation related tools "--download-config" and "updated-hostname {hostname}" which are discussed in the Exalens Data Collector installation overview. Note for some of the tools, elevated permissions may be required and requested, generating password prompt to supply the credentials of a privileged user on the host system.

As previously discussed, "--netmon-config" enforces a secure monitoring configuration which prevents any inbound or outbound IPv4/IPv6 packets or outbound Ethernet frames being transmitted from a monitoring interface. Executing this script configures an interface with the following interface controls:

- Enforcement of Promiscuous mode
- IPtables block for inbound and output IPv4 and IPv6 packets
- EBTables block for outbound Ethernet frames
- Disabling of interface Broadcast, Multicast, and ARP

## Uploading / Replaying PCAP files
Using any Data Collector it is possible to upload and process PCAP files by replaying against a preconfigured Data Collector monitoring interface. Currently, this feature is only available via the command terminal using the utility tool “--upload-pcap. When running this tool, a software interface called "exalens0" is created which is used to replay all PCAP files, and is automatically setup into promiscuous mode. The PCAP replay tool uses tcpreplay software, which will be installed automatically if it is not presented on the host system when running the tool.

**Note:** The Data Collector which is replaying the PCAP must have the "exalens0" interface configured on the Exalens Cortex to successfully ingest the DPI network logs generated from uploading the PCAP. Therefore, it is recommended that on first use, the tool command "--upload-pcap" is run, then before a PCAP file is provided to the tool to replay, the "exalens0" interface is configured as a monitored interface for the respective Data Collector under "Network - Configure - Data Collectors", as discussed previously in this section.

Once the monitored interface has been configured as a monitored interface for the Data Collector in the Exalens Cortex, the full path to the PCAP should be supplied to the tool to begin the PCAP replay and upload process, as follows:

```
**Enter the path to the PCAP file: /home/ubuntu/snmp.pcap**
Uploading PCAP file...
PCAP upload started: 2024-07-31 15:09:16.778469 ...
PCAP upload completed: 2024-07-31 15:09:16.850959
Actual: 1020 packets (90612 bytes) sent in 0.072490 seconds
Rated: 1249993.1 Bps, 9.99 Mbps, 14070.90 pps
Flows: 2 flows, 27.59 fps, 1020 flow packets, 0 non-flow
Statistics for network device: replay
        Successful packets:        1020
        Failed packets:            0
        Truncated packets:         0
        Retried packets (ENOBUFS): 0
        Retried packets (EAGAIN):  0
PCAP upload completed successfully.
```

Confirmation of the successfully processed PCAP can be conducted by navigating to “Network Monitoring - Logs” and checking whether network log data is appearing in expected log files. Connection logs always appear in the “conn” or “conn_long” log. You can filter by the DC name using the field “probe_name” in the log table “move column left” filter to only look for logs generated from the specific DC in which the PCAP file has been uploaded. See example below:

![Diagram showing network logs being received by Data Collector from PCAP replay](./network_monitoring/data_collector_network_logs_pcap.png)

## Generating Network Baselines

Network baselines are a powerful feature in Exalens that allows users to define a specific period in which the Exalens Cortex will baseline all network connectivity from network logs it is receiving for DCs. Baselines are used to generate network intelligence that enables Exalens' underlying detection engine to detect abnormal system activity, by populating specific device, user, and detection indicator databases which users can also interrogate in the form of lookups.

Creating a network baseline is optional, and certain high-risk, suspicious, or cyber-hygiene activities do not require network baselines for detection and alerting. However, Exalens' detection engine relies on network baselines to detect rare or abnormal network and system activity. A network baseline allows Exalens to model anomaly indicators which use historic system activity to compare with normal expected system behaviour. It is important to remember that some detections will not function without a network baseline. Detections that function without a network baseline, but contain indicators that rely on a network baseline, will not activate any baseline-dependent indicators for detection analysis.

To create a network baseline, navigate to “Network Monitoring - Configure” and select the “Baseline the Network” tab. 

![Diagram showing network baselines](./network_monitoring/network_baseline_menu.png)

A new network baseline can be initiated by clicking the “Baseline” button and selecting the desired period to baseline, as well as a description of the baseline. 

![Diagram showing network baseline configuration](./network_monitoring/network_baseline_config.png)

Once a baseline has been initiated, it can be stopped by selecting the stop button in the baseline table. Note that this will retain any network baselining carried out from the start of the baseline until it is manually stopped. Once the baseline is completed, subsequent baselines will automatically update the existing network baseline. 


## Network Lookup Intelligence

Once network monitoring is enabled, the Exalens system will automatically populate network intelligence lookup databases. Network intelligence lookups are used by the Exalens Cortex detection engine for carrying out detection analysis, for example, with specific lookups supporting the generation of detection indicators. These looks are also available for end users to interact with and use as telemetry for various analysis tasks, such as preventative risk assessment or proactive alert and threat hunting investigations. 

Network lookups are populated automatically and continuously during live networking interface monitoring and via manual PCAP uploads. End users can also manually interact with network lookups, by deleting or uploading new lookup entries via the “Lookups” user interface page, or via the App API. The example below provides a view of a lookup table for “Endpoint Device Intelligence”.

![Diagram showing Endpoint Intelligence Lookup](./network_monitoring/endpoint_intelligence_lookup.png)

In the tables below the list of lookup categories and corresponding lookups are provided - the availability field shows whether the lookups are available to see via the user interface on the Exalens Cortex, or whether the lookup is currently unavailable in the system.

|**Incident Intelligence**|**Status**|
|:--|:--|
|DCE-RPC seen in incidents|Available|
|Destination IP(s) seen in incidents|Available|
|Destination Port(s) seen in incidents|Available|
|Detection Label seen in incidents|Available|
|SSH Client Fingerprints (HAASH) seen in incidents|Available|
|Sensitive SMB activity seen in incidents|Available|
|Source IP(s) seen in incidents|Available|
|TLS Client Fingerprints (JA3) seen in incidents|Available|
|TLS Server Fingerprints (JA3S) seen in incidents|Available|
|User Agents seen in incidents|Available|
|Sensitive Files seen in incidents| Not Available|
|Suspicious Files seen in incidents| Not Available|

|**DNS Intelligence**|**Status**|
|:-|:-|
|DNS to Hostname Mapping|Available|
|Private DNS Servers|Available|
|Public DNS Servers|Available|
|Root Domains Accessed|Available|

|**Endpoint Device Intelligence**|**Status**|
|:--|:--|
|Device User Agents|Available|
|Internal Connectivity Paths|Available|
|Network to Hostname Mapping|Available|
|SMB Activity|Available|
|SSH Client Fingerprints (HASSH)|Available|
|TLS Client Fingerprints (JA3)|Available|
|Username usage by source and destination|Available|
|Windows RPC Activity|Available|

|**OT Protocol and Communication Intelligence**|**Status**|
|:--|:--|
|BACNet|Available|
|BSAP over Serial|Available|
|BSAP over IP|Available|
|CC-Link IE Control|Available|
|CC-Link IE Field|Available|
|CC-Link IE Field Basic|Available|
|CIP|Available|
|DNP3|Available|
|EtherCat|Available|
|EtherCat over AOE|Available|
|Ethernet/IP|Available|
|GENISYS|Available|
|KNX|Available|
|MODBUS|Available|
|OPC UA|Available|
|OMRON FINS|Available|
|PROFINET DCE-RPC|Available|
|PROFINET Function|Available|
|S7COMM|Available|
|S7COMM Plus|Available|
|Synchrophasor|Available|

|**Safe Domain(s) / IP(s)**|**Status**|
|:--|:--|
|Domains|Available|
|IP Addresses|Available|

# Passive Asset Discovery, Profiling and Tracking

When network monitoring is enabled in an Exalens product, the system will automatically begin discovering, profiling and tracking assets based on their IP address, MAC address and hostname. 
This asset discovery and tracking feature builds a rich inventory of system assets communicating over the network, that enables end users to gain the following insights:
 

- Understand what assets exist across their environment
- How and when assets are communicating, what network services they host and access
- Understand different asset roles, device profiles, criticality in the network and their potential threat exposure
- Unique asset fingerprints, as well as identification of similarities between assets based on their peer behaviours in the network
- Identify which user accounts have been used on an asset and when

In addition to this asset information, the Exalens platform utilises asset information for threat and anomaly detection by leveraging rich asset context learned from DPI network analysis to inform and prioritise detection and alert risk. By default, users do not need to set any configuration for passive asset discovery, profiling or tracking as it is automatically activated once network monitoring is enabled and start receiving network logs from an Exalens DC. **Note:** Asset discovery, profiling and tracking updates are performed every 15 minutes.

A detailed overview of Asset Discovery and Intelligence features is provided in [Asset Discovery and Intelligence](./asset_intelligence.md).

## Network Protocol Support List
Across Exalens' product portfolio, Deep Packet Inspection (DPI) protocol decoding and log generation are currently supported for the network protocols and suites listed in the table below. **Note:** The Exalens platform can monitor any IT/OT protocol at connection flow level. However, if you require specific DPI monitoring contact the Exalens support team via email: support@exalens.com or Slack if a network protocol you require DPI support for is not listed below, as it may be disabled in your Exalens distribution. Exalens is committed to providing extended support for IT/OT and vendor-proprietary protocols. Where network protocol is not currently available, a feature request can be made to our development team for enablement in future releases. 

In the table below, current DPI support for IT and OT protocols is provided: 

|**OT / ICS Protocols**|**IT Protocols**|
|:--|:--|
|Modbus TCP|DNS|
|Siemens S7COMM|mDNS|
|Siemens S7COMMPlus|SSDP|
|OPC-UA|DHCPv4|
|DNP3|DHCPv6|
|BACNet|MQTT|
|ENIP|ICMP|
|CIP|SNMP|
|PROFINET|SMB (Version 1, 2, 3)|
|COTP|SSL / TLS|
|BSAP|LLDP|
|CC-Link|LDAP|
|KNX|HTTP|
|GENYSIS|HTTPS|
|Omron FINS|RADIUS|
|Synchrophasor|SMTP|
||POP3|
||NETBIOS|
||MYSQL|
||SIP|
||SOCKS|
||Telnet|
||RDP|
||VNC|
||SSH|
||FTP|
||TEREDO|
||GRE|
||STUN|
||LLMNR|
||NTLM|
||KERBEROS|
||NTP|
||SYSLOG|
||RSVP|
||TFTP|
||OSPF|
||IPSec / IKE|
||Wireguard|
