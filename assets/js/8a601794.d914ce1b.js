"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[4543],{1268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(4848),l=n(8453);const s={id:"network-monitoring",title:"Network Monitoring"},r="Network Monitoring",o={id:"network-monitoring",title:"Network Monitoring",description:"Introduction",source:"@site/docs/network_monitoring.md",sourceDirName:".",slug:"/network-monitoring",permalink:"/userguide/docs/network-monitoring",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"network-monitoring",title:"Network Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Asset Intelligence",permalink:"/userguide/docs/asset-intelligence"},next:{title:"App API",permalink:"/userguide/docs/app-api"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Configuring Network Monitoring",id:"configuring-network-monitoring",level:2},{value:"Passive Network Monitoring via TAP, SPAN, or On-Host",id:"passive-network-monitoring-via-tap-span-or-on-host",level:2},{value:"Adding Monitor Interfaces via the Cortex UI",id:"adding-monitor-interfaces-via-the-cortex-ui",level:2},{value:"Setting Network Interface to Promiscuous Mode",id:"setting-network-interface-to-promiscuous-mode",level:2},{value:"Setting up a Monitoring Interface with a Secure Monitoring Configuration",id:"setting-up-a-monitoring-interface-with-a-secure-monitoring-configuration",level:2},{value:"Uploading PCAP files",id:"uploading-pcap-files",level:2},{value:"Generating Network Baselines",id:"generating-network-baselines",level:2},{value:"Network Lookup Intelligence",id:"network-lookup-intelligence",level:2},{value:"Network Protocol Support List",id:"network-protocol-support-list",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"network-monitoring",children:"Network Monitoring"}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"The guide will provide information on how to set up passive network monitoring on your Exalens installation, using external Exalens Data Collectors, or the internal Exalens Cortex Data Collector."}),"\n",(0,i.jsx)(t.h2,{id:"configuring-network-monitoring",children:"Configuring Network Monitoring"}),"\n",(0,i.jsx)(t.p,{children:"To enable passive network monitoring, at least one Exalens DC must be configured with a \u201cMonitoring Interface\u201d which configures the DC to activate its Deep Packet Inspection (DPI) engine for a specific network interface on the host in which the DC is installed, and start collecting and analysing packets from this interface. Once configured, the DC will begin generating and forwarding network logs to the destination Exalens Cortex for storage, processing and analysis."}),"\n",(0,i.jsx)(t.p,{children:'Configuring a \u201cMonitoring Interface\u201d on a DC is straightforward, however, before configuration atleast one network interface on the DC host should be selected and available for the DC to configure as a "Monitoring Interface" and activation of passive monitoring of network traffic received on this interface.'}),"\n",(0,i.jsx)(t.h2,{id:"passive-network-monitoring-via-tap-span-or-on-host",children:"Passive Network Monitoring via TAP, SPAN, or On-Host"}),"\n",(0,i.jsx)(t.p,{children:"When setting up passive network monitoring it is important to consider how packet capture will implemented. Typically, there are three methods for passive monitoring using an Exalens DCP, as listed below:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Network TAP"}),": A network TAP (Test Access Point) is a device that connects directly to the cabling infrastructure between two network devices, monitoring all data flows through the TAP. Using an internal splitter, the TAP creates a copy of the data for monitoring while the original data continues unimpeded through the network. A DC can be configured to receive packets from any TAP device by connecting its monitored interface to the TAP device interface that is forwarding copied capture packets."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Network SPAN port"}),": A SPAN port (sometimes called a mirror port) is a software feature built into a switch or router that creates a copy of selected packets passing through the device and sends them to a designated SPAN port. Using software, the administrator can easily configure or change what is monitored. A DC can be configured to receive packets from any SPAN-capable device by connecting its monitored interface to a device\u2019s SPAN interface configured as a mirror port."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"On-Host DC"}),": A DC can be deployed on any Linux device to monitor the interface(s) of that Linux system and forwarding network logs to a Exalens Cortex. On-host DC deployments are only recommended for Linux hosts with at least 16GB RAM and 8-core CPUs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"An illustrative example is provided below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing the Exalens Network Monitoring Deployment Options",src:n(132).A+"",width:"742",height:"352"})}),"\n",(0,i.jsx)(t.h2,{id:"adding-monitor-interfaces-via-the-cortex-ui",children:"Adding Monitor Interfaces via the Cortex UI"}),"\n",(0,i.jsx)(t.p,{children:'Configuration of a network monitoring interface on a DC is carried out under "System Administation" on the Cortex UI.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing the System Administration Option on Cortex UI",src:n(9307).A+"",width:"235",height:"214"})}),"\n",(0,i.jsx)(t.p,{children:'Navigating to "System Administration" and selecting the "Data Collectors" menu tab shows which DCs are available on the system.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing the Data Collector Tab under System Administration",src:n(1050).A+"",width:"1515",height:"297"})}),"\n",(0,i.jsxs)(t.p,{children:['Selecting the "Edit: button for a DC allows for adding a monitoring interface. ',(0,i.jsx)(t.strong,{children:"Important:"})," The name of the monitoring interface should match exactly how it appears on the DC."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing the Data Collector Edit option for setting network monitoring interfaces",src:n(1889).A+"",width:"599",height:"324"})}),"\n",(0,i.jsx)(t.p,{children:"When network monitoring interfaces are added on the DC configuration, the Cortex will notify the DC to begin monitoring network traffic on the specified interface (note this can take a few minutes to start collection). After updating the DC configuration, if the newly configured interface is not available there may be no errors or warnings generated. You can validate network monitoring is correctly functioning by reviewing the network logs under Network Monitoring - Logs, selecting the \u201cConn\u201d log and filtering the logs by the DC \u201cProbe Name\u201d field to see if traffic is being received by the Cortex from the DC on the desired interface. See the example below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing network logs being received by Data Collector",src:n(972).A+"",width:"1915",height:"549"})}),"\n",(0,i.jsx)(t.h2,{id:"setting-network-interface-to-promiscuous-mode",children:"Setting Network Interface to Promiscuous Mode"}),"\n",(0,i.jsx)(t.p,{children:"To enable fully passive monitoring of an interface on a host that allows the host to process all packets received by an interface, promiscuous mode must be enabled on the interface. To configure promiscuous mode on a network interface, run the following command:"}),"\n",(0,i.jsx)(t.p,{children:"'''sh\r\n./retina-datacollector.sh --set_promisc\r\n'''"}),"\n",(0,i.jsx)(t.p,{children:"This command lists all available network interfaces for selection as a monitoring interface. The user selects which interfaces to set to promiscuous mode for network monitoring. Do not select the DC interface used to communicate with the Cortex, as this will break the connection between the DC and Cortex, therefore, for on-host DC deployments in Linux devices, promiscuous mode should not be set."}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-a-monitoring-interface-with-a-secure-monitoring-configuration",children:"Setting up a Monitoring Interface with a Secure Monitoring Configuration"}),"\n",(0,i.jsxs)(t.p,{children:["Exalens makes available a number of command line utility tools for network monitoring and command-line PCAP uploads. These utility tools can be accessed by download the utilities repository from Exalens Github here: ",(0,i.jsx)(t.a,{href:"https://github.com/exalens/utilities",children:"Exalens Utilities on Github"}),"."]}),"\n",(0,i.jsx)(t.p,{children:'In the utilities folder, the script "set_netmon_interface.sh" enforces a secure monitoring configuration which prevents any inbound or outbound IPv4/IPv6 packets or outbound Ethernet frames being transmitted from a monitoring interface. Executing this script configures an interface with the following interface controls:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Enforcement of Promiscuous mode"}),"\n",(0,i.jsx)(t.li,{children:"IPtables block for inbound and output IPv4 and IPv6 packets"}),"\n",(0,i.jsx)(t.li,{children:"EBTables block for outbound Ethernet frames"}),"\n",(0,i.jsx)(t.li,{children:"Disabling of interface Broadcast, Multicast, and ARP"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'When running the script use sudo permissions and provide the interface name to configure when prompted, choose whether the interface is Wireless or Wired, and choose "set" to enforce the configuration or "remove" to remove the configuration. See example below:'}),"\n",(0,i.jsx)(t.p,{children:"'''\r\n~/utilities$ sudo ./set_netmon_interface.sh\r\nEnter the interface name: replay\r\nIs this a Wi-Fi interface? (yes/no): no\r\nWould you like to set or remove the monitoring configuration? (set/remove): set\r\nMonitoring configuration successfully set for replay (wired)\r\n'''"}),"\n",(0,i.jsx)(t.h2,{id:"uploading-pcap-files",children:"Uploading PCAP files"}),"\n",(0,i.jsx)(t.p,{children:"Using any DC it is possible to upload and process PCAP files by replaying them against any DC monitoring interface. Currently, this feature is only available via the command terminal using the utility script \u201cupload_pcap.sh\u201d. This script can be found under the utilities folder on the DC host it was downloaded to."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"}),' Prior to running the "upload_pcap.sh" script, tcpreplay will need to be installed on the DC host. Use the following command to install tcpreply:']}),"\n",(0,i.jsx)(t.p,{children:"'''\r\nsudo sudo apt install tcpreplay\r\n'''"}),"\n",(0,i.jsx)(t.p,{children:'It is recommended that a dedicated dummy software interface is created on the DC for replaying PCAP files. Similar to setting up a monitoring interface for live network packet capture, a PCAP file can be uploaded via a DC using a dummy software interface for PCAP file processing. This process is straightforward using the "create_dummy.sh" utility script in the utilities folder. As described in the previous section, under \u201cSystem Administration - Data Collectors\u201d the dummy software interface should be enabled for monitoring under the respective DC, using the \u201cedit\u201d button for the DC in the Data Collectors tab.'}),"\n",(0,i.jsx)(t.p,{children:"Once the dummy interface has been created and configured as a monitored interface under the DC, the \u201cupload_pcap.sh\u201d utility script in the utilities folder should be used to upload a PCAP file via the DC. Run the scrip with sudo permission, when prompted the PCAP file name, interface to perform the PCAP replay (your dummy software interface, or any other interface you wish to you), and the speed in Mbps in which you wish to perform the replay. Once the PCAP is uploaded the following PCAP upload results will be displayed on the terminal. See example below:"}),"\n",(0,i.jsx)(t.p,{children:"'''\r\n~/utilities$ sudo ./upload_pcap.sh\r\nEnter the path to the PCAP file: snmp.pcap\r\nEnter the interface name for PCAP replay: replay\r\nEnter the PCAP replay bandwidth (e.g., 50Mbps): 10Mbps\r\nUploading PCAP file...\r\nPCAP upload started: 2024-07-31 15:09:16.778469 ...\r\nPCAP upload completed: 2024-07-31 15:09:16.850959\r\nActual: 1020 packets (90612 bytes) sent in 0.072490 seconds\r\nRated: 1249993.1 Bps, 9.99 Mbps, 14070.90 pps\r\nFlows: 2 flows, 27.59 fps, 1020 flow packets, 0 non-flow\r\nStatistics for network device: replay\r\nSuccessful packets:        1020\r\nFailed packets:            0\r\nTruncated packets:         0\r\nRetried packets (ENOBUFS): 0\r\nRetried packets (EAGAIN):  0\r\nPCAP upload completed successfully.\r\n'''"}),"\n",(0,i.jsx)(t.p,{children:"Confirmation of the successfully processed PCAP can be conducted by navigating to \u201cNetwork Monitoring - Logs\u201d and checking whether network log data is appearing in expected log files. Connection logs always appear in the \u201cconn\u201d or \u201cconn_long\u201d log. You can filter by the DC name using the field \u201cprobe_name\u201d in the log table \u201cmove column left\u201d filter to only look for logs generated from the specific DC in which the PCAP file has been uploaded. See example below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing network logs being received by Data Collector from PCAP replay",src:n(9949).A+"",width:"1321",height:"380"})}),"\n",(0,i.jsx)(t.h2,{id:"generating-network-baselines",children:"Generating Network Baselines"}),"\n",(0,i.jsx)(t.p,{children:"Network baselines are a powerful feature in Exalens that allows users to define a specific period in which the Exalens Cortex will baseline all network connectivity from network logs it is receiving for DCs. Baselines are used to generate network intelligence that enables Exalens' underlying detection engine to detect abnormal system activity, by populating specific device, user, and detection indicator databases which users can also interrogate in the form of lookups."}),"\n",(0,i.jsx)(t.p,{children:"Creating a network baseline is optional, and certain high-risk, suspicious, or cyber-hygiene activities do not require network baselines for detection and alerting. However, Exalens' detection engine relies on network baselines to detect rare or abnormal network and system activity. A network baseline allows Exalens to model anomaly indicators which use historic system activity to compare with normal expected system behaviour. It is important to remember that some detections will not function without a network baseline. Detections that function without a network baseline, but contain indicators that rely on a network baseline, will not activate any baseline-dependent indicators for detection analysis."}),"\n",(0,i.jsx)(t.p,{children:"To create a network baseline, navigate to \u201cNetwork Monitoring - Configure\u201d and select the \u201cBaseline the Network\u201d tab."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing network baselines",src:n(6385).A+"",width:"1902",height:"438"})}),"\n",(0,i.jsx)(t.p,{children:"A new network baseline can be initiated by clicking the \u201cBaseline\u201d button and selecting the desired period to baseline, as well as a description of the baseline."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing network baseline configuration",src:n(1693).A+"",width:"539",height:"308"})}),"\n",(0,i.jsx)(t.p,{children:"Once a baseline has been initiated, it can be stopped by selecting the stop button in the baseline table. Note that this will retain any network baselining carried out from the start of the baseline until it is manually stopped. Once the baseline is completed, subsequent baselines will automatically update the existing network baseline."}),"\n",(0,i.jsx)(t.h2,{id:"network-lookup-intelligence",children:"Network Lookup Intelligence"}),"\n",(0,i.jsx)(t.p,{children:"Once network monitoring is enabled, the Exalens system will automatically populate network intelligence lookup databases. Network intelligence lookups are used by the Exalens Cortex detection engine for carrying out detection analysis, for example, with specific lookups supporting the generation of detection indicators. These looks are also available for end users to interact with and use as telemetry for various analysis tasks, such as preventative risk assessment or proactive alert and threat hunting investigations."}),"\n",(0,i.jsx)(t.p,{children:"Network lookups are populated automatically and continuously during live networking interface monitoring and via manual PCAP uploads. End users can also manually interact with network lookups, by deleting or uploading new lookup entries via the \u201cLookups\u201d user interface page, or via the App API. The example below provides a view of a lookup table for \u201cEndpoint Device Intelligence\u201d."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Diagram showing Endpoint Intelligence Lookup",src:n(7959).A+"",width:"1917",height:"523"})}),"\n",(0,i.jsx)(t.p,{children:"In the tables below the list of lookup categories and corresponding lookups are provided - the availability field shows whether the lookups are available to see via the user interface on the Exalens Cortex, or whether the lookup is currently unavailable in the system."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Incident Intelligence"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Status"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DCE-RPC seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Destination IP(s) seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Destination Port(s) seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Detection Label seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SSH Client Fingerprints (HAASH) seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sensitive SMB activity seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Source IP(s) seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TLS Client Fingerprints (JA3) seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TLS Server Fingerprints (JA3S) seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"User Agents seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Sensitive Files seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Not Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Suspicious Files seen in incidents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Not Available"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"DNS Intelligence"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Status"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DNS to Hostname Mapping"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Private DNS Servers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Public DNS Servers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Root Domains Accessed"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Endpoint Device Intelligence"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Status"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Device User Agents"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Internal Connectivity Paths"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Network to Hostname Mapping"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SMB Activity"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SSH Client Fingerprints (HASSH)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TLS Client Fingerprints (JA3)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Username usage by source and destination"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Windows RPC Activity"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"OT Protocol and Communication Intelligence"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Status"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BACNet"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BSAP over Serial"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BSAP over IP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CC-Link IE Control"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CC-Link IE Field"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CC-Link IE Field Basic"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CIP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DNP3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EtherCat"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"EtherCat over AOE"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Ethernet/IP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GENISYS"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KNX"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MODBUS"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"OPC UA"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"OMRON FINS"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"PROFINET DCE-RPC"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"PROFINET Function"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"S7COMM"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"S7COMM Plus"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Synchrophasor"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Safe Domain(s) / IP(s)"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"Status"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Domains"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IP Addresses"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Available"})]})]})]}),"\n",(0,i.jsx)(t.h1,{id:"passive-asset-discovery-profiling-and-tracking",children:"Passive Asset Discovery, Profiling and Tracking"}),"\n",(0,i.jsx)(t.p,{children:"When network monitoring is enabled in an Exalens product, the system will automatically begin discovering, profiling and tracking assets based on their IP address, MAC address and hostname. This asset discovery and tracking feature builds a rich inventory of system assets communicating over the network, that enables end users to gain the following insights:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Understand what assets exist across their environment"}),"\n",(0,i.jsx)(t.li,{children:"How and when assets are communicating, what network services they host and access"}),"\n",(0,i.jsx)(t.li,{children:"Understand different asset roles, device profiles, criticality in the network and their potential threat exposure"}),"\n",(0,i.jsx)(t.li,{children:"Unique asset fingerprints, as well as identification of similarities between assets based on their peer behaviours in the network"}),"\n",(0,i.jsx)(t.li,{children:"Identify which user accounts have been used on an asset and when"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In addition to this asset information, the Exalens platform utilises asset information for threat and anomaly detection by leveraging rich asset context learned from DPI network analysis to inform and prioritise detection and alert risk. By default, users do not need to set any configuration for passive asset discovery, profiling or tracking as it is automatically activated once network monitoring is enabled and start receiving network logs from an Exalens DC. ",(0,i.jsx)(t.strong,{children:"Note:"})," Asset discovery, profiling and tracking updates are performed every 15 minutes."]}),"\n",(0,i.jsxs)(t.p,{children:["A detailed overview of Asset Discovery and Intelligence features is provided in ",(0,i.jsx)(t.a,{href:"/userguide/docs/asset-intelligence",children:"Asset Discovery and Intelligence"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"network-protocol-support-list",children:"Network Protocol Support List"}),"\n",(0,i.jsxs)(t.p,{children:["Across Exalens' product portfolio, Deep Packet Inspection (DPI) protocol decoding and log generation are currently supported for the network protocols and suites listed in the table below. ",(0,i.jsx)(t.strong,{children:"Note:"})," The Exalens platform can monitor any IT/OT protocol at connection flow level. However, if you require specific DPI monitoring contact the Exalens support team via email: ",(0,i.jsx)(t.a,{href:"mailto:support@exalens.com",children:"support@exalens.com"})," or Slack if a network protocol you require DPI support for is not listed below, as it may be disabled in your Exalens distribution. Exalens is committed to providing extended support for IT/OT and vendor-proprietary protocols. Where network protocol is not currently available, a feature request can be made to our development team for enablement in future releases."]}),"\n",(0,i.jsx)(t.p,{children:"In the table below, current DPI support for IT and OT protocols is provided:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"OT / ICS Protocols"})}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:(0,i.jsx)(t.strong,{children:"IT Protocols"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Modbus TCP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DNS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Siemens S7COMM"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"mDNS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Siemens S7COMMPlus"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SSDP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"OPC-UA"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DHCPv4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DNP3"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"DHCPv6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BACNet"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MQTT"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ENIP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"ICMP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CIP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SNMP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"PROFINET"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SMB (Version 1, 2, 3)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"COTP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SSL / TLS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"BSAP"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LLDP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"CC-Link"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LDAP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KNX"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HTTP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GENYSIS"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Omron FINS"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RADIUS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Synchrophasor"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SMTP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"POP3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NETBIOS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"MYSQL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SIP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SOCKS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Telnet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RDP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"VNC"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SSH"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"FTP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TEREDO"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"GRE"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"STUN"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"LLMNR"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NTLM"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"KERBEROS"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"NTP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"SYSLOG"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"RSVP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"TFTP"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"OSPF"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"IPSec / IKE"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"}}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Wireguard"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1889:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/administration_data_collector_interface_config-8586f98cdd04d39c93fad3b3be5a69bc.png"},1050:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/administration_data_collector_tab-0aeea263707dde63b6994a3aacef40a5.png"},972:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/data_collector_network_logs-cfef4ae0847ebbb3a3a8a929aa62d93a.png"},9949:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/data_collector_network_logs_pcap-8b180080a9c0db0ddcd8b43eca07e871.png"},7959:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/endpoint_intelligence_lookup-1a0443be29b88372e8af5bcce0ffbf88.png"},1693:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/network_baseline_config-f6ec2faeaf8a4d2cc73c25778dd3c493.png"},6385:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/network_baseline_menu-8f3bb95a20e7d4b8d4d4508e92c9f48e.png"},132:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/network_monitoring_overview-c0e588e47de73a704afd5340004b5993.png"},9307:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/system_administration_option-311dede6e3ecbde18a48f09ec30b9d9f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const l={},s=i.createContext(l);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);