---
id: software-deployment-specifications
title: Software Deployment Specifications
---
# Software Deployment Specifications

The guide will provide an overview of the Exalens platform appliance specifications for virtual and physical deployments of the Exalens Cortex and Data Collector Probe (DCP). The guide provides an overview of the different appliance types, minimum and recommended system requirements and physical appliance solutions offered by Exalens.

**IMPORTANT - Deployment specifications are subject to change following updated guidance provided by Exalens' Technical Support Team.**: It is recommended to contact the Exalens support team for detailed information and guidance on correct product scoping and platform sizing. Exalens does not guarantee that this guide's recommended specifications are suitable for and deliver reliable platform performance in a specific customer environment. These specifications are provided as guidelines only.

## Platform Deployment Options
The Exalens platform is a software solution installed as docker containers and can be deployed on any conventional hardware systems such as Industrial PCs and Server, as well as Virtual Machines on-premises, in the Cloud, or across a hybrid architecture, both as a all-in-one installation or with distributed Exalens Cortex and Data Collector (DC) hosts. Exalens docker containers can be installed without custom support on any Debian operating system, and therefore are also compatible on Windows systems using Windows Subsystem for Linux (WSL) for docker containers. Regardless of deployment method and design, the functional behaviour and use of the Exalens platform remain consistent providing users with flexibility in deployment approaches that best suit their environment and requirements.

The Exalens platform (regardless of product licensing) may be installed as an All-in-One configuration, where only the Exalens Cortex and internal Cortex DC are installed, or, within a distributed deployment with the Exalens Cortex and one or more external DC on different host machines. By default, the Exalens Cortex installation process installs an internal DC which can be disabled by the user if desired. 

DCs monitoring capabilities can be provisioned based on the deired monitoring scope, for example, can be enabled for passive network traffic monitoring, process/machine datasource monitoring, or both. It is not recommended to enable both in a single DC unless there are sufficient resources or a clear deployment requirement for doing so. Defining the monitoring scope is not a static operation as it can be updated during live deployment. This provides flexibility for what types and numbers of DCs are required in a user environment, as well as required system resources as the environment data demands evolve over time. 

## Platform Deployment Sizing
Currently, Exalens makes system requirements specifications based on the scope of Exalens product deployment against 3 deployment tier sizes: small, medium, and large. These tier sizes assume a certain environment scale with system resources available for reliable platform performance. 

The product deployment scope specifications are as follows:

| **Product License** | **Product Scope**  | 
|:-|:-|
|Data Historian|Datasource collect, store and visualise|
|Data Ops|Datasource collect, storage, visualise, contextualise, Data Model, Forward|
|Process Monitoring|Datasource collect, storage, visualise, contextualise, Data Model, Monitor, Learning, Alert, Analyse, Forward|
|CPS Threat Detection|Datasource and Network traffic collect, storage, visualise, contextualise, Data Model, Monitor, Learning, Alert, Analyse, Forward|

Environment sizing specifications are as follows:

| **Environment Size** | **Datasource Tags**  | **Average Bandwidth** |
|:-|:-|:-|
|Small|Up to 10,000 tags|Up to 300 Mbps|
|Medium|Up to 50,000 tags|Up to 1Gbps|
|Large|Up to 100,000 tags|Up to 5Gbps|

## Host Specifications
The host specification guidelines are based on deploying the Exalens software on a Debian Linux operating system on a physical host equipped with an Intel/AMD x64 processor with a minimum clock speed of 2.5 GHz. Virtualised hosts may not provide dedicated CPU, RAM and Disk resources to Exalens software during operation. Up to a 50% drop in Datasource Tags and Average and 70% drop in Network Bandwidth Ingest performance can be expected for virtualised hosts running the Exalens software depending on environment size and different virtualisation technology, hardware and network equipment configurations.

On request, Exalens provides tailored physical appliances for customers, and customers may also deploy the Exalens platform on their bare metal hardware systems where desired to house the Exalens software. Note that for customer-supplied bare metal hardware, it is recommended that customers engage with the Exalens support team to assess the compatibility of both hardware and operating system.

### Recommended Cortex Resources 
These specifications assume a single Cortex deployment with one or more external DCs. 

| **Environment Size** | **Product Scope**  | **Cores** |**Memory (RAM)** |**Storage (SSD)** |
|:-|:-|:-|:-|:-|
|Small|Data Historian & Data Ops|12|32GB |500GB|
|Small|Process Monitoring|12|64GB |500GB|
|Small|CPS Threat Detection|16|64GB |500GB|
|Medium|Data Historian & Data Ops|16|64GB |1TB|
|Medium|Process Monitoring|24|128GB |1TB|
|Medium|CPS Threat Detection|32|256GB |2TB|
|Medium|Data Historian & Data Ops|24|128GB |2TB|
|Medium|Process Monitoring|48|256GB |2TB|
|Medium|CPS Threat Detection|64|512GB |4TB|

### Recommended DC Specifications
These specifications assume a single external DC. Multiple smaller resource DCs can be deployed to accommodate large environment depending on the specific deployment design. It is recommended to contact and engage the Exalens support to discuss deployment requirements and design options to determine optimal DC resource requirements.

| **Environment Size** | **Product Scope**  | **Cores** |**Memory (RAM)** |**Storage (SSD)** |
|:-|:-|:-|:-|:-|
|Small|Datasource tags only|8|16GB |250GB|
|Small|Network Monitoring only|16|32GB |500GB|
|Medium|Datasource tags only|16|32GB |500GB|
|Medium|Network Monitoring only|16|64GB |1TB|
|Large|Datasource tags only|24|64GB |500GB|
|Large|Network Monitoring only|48|128GB |1TB|