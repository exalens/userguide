"use strict";(self.webpackChunkuserguide=self.webpackChunkuserguide||[]).push([[7940],{6233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var l=n(4848),s=n(8453);const i={id:"software-deployment-specifications",title:"Software Deployment Specifications"},r="Software Deployment Specifications",d={id:"software-deployment-specifications",title:"Software Deployment Specifications",description:"The guide will provide an overview of the Exalens platform appliance specifications for virtual and physical deployments of the Exalens Cortex and Data Collector Probe (DCP). The guide provides an overview of the different appliance types, minimum and recommended system requirements and physical appliance solutions offered by Exalens.",source:"@site/docs/software-deployment-specifications.md",sourceDirName:".",slug:"/software-deployment-specifications",permalink:"/userguide/docs/software-deployment-specifications",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"software-deployment-specifications",title:"Software Deployment Specifications"}},o={},a=[{value:"Platform Deployment Options",id:"platform-deployment-options",level:2},{value:"Platform Deployment Sizing",id:"platform-deployment-sizing",level:2},{value:"Host Specifications",id:"host-specifications",level:2},{value:"Recommended Cortex Resources",id:"recommended-cortex-resources",level:3},{value:"Recommended DC Specifications",id:"recommended-dc-specifications",level:3}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"software-deployment-specifications",children:"Software Deployment Specifications"}),"\n",(0,l.jsx)(t.p,{children:"The guide will provide an overview of the Exalens platform appliance specifications for virtual and physical deployments of the Exalens Cortex and Data Collector Probe (DCP). The guide provides an overview of the different appliance types, minimum and recommended system requirements and physical appliance solutions offered by Exalens."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"IMPORTANT - Deployment specifications are subject to change following updated guidance provided by Exalens' Technical Support Team."}),": It is recommended to contact the Exalens support team for detailed information and guidance on correct product scoping and platform sizing. Exalens does not guarantee that this guide's recommended specifications are suitable for and deliver reliable platform performance in a specific customer environment. These specifications are provided as guidelines only."]}),"\n",(0,l.jsx)(t.h2,{id:"platform-deployment-options",children:"Platform Deployment Options"}),"\n",(0,l.jsx)(t.p,{children:"The Exalens platform is a software solution installed as docker containers and can be deployed on any conventional hardware systems such as Industrial PCs and Server, as well as Virtual Machines on-premises, in the Cloud, or across a hybrid architecture, both as a all-in-one installation or with distributed Exalens Cortex and Data Collector (DC) hosts. Exalens docker containers can be installed without custom support on any Debian operating system, and therefore are also compatible on Windows systems using Windows Subsystem for Linux (WSL) for docker containers. Regardless of deployment method and design, the functional behaviour and use of the Exalens platform remain consistent providing users with flexibility in deployment approaches that best suit their environment and requirements."}),"\n",(0,l.jsx)(t.p,{children:"The Exalens platform (regardless of product licensing) may be installed as an All-in-One configuration, where only the Exalens Cortex and internal Cortex DC are installed, or, within a distributed deployment with the Exalens Cortex and one or more external DC on different host machines. By default, the Exalens Cortex installation process installs an internal DC which can be disabled by the user if desired."}),"\n",(0,l.jsx)(t.p,{children:"DCs monitoring capabilities can be provisioned based on the deired monitoring scope, for example, can be enabled for passive network traffic monitoring, process/machine datasource monitoring, or both. It is not recommended to enable both in a single DC unless there are sufficient resources or a clear deployment requirement for doing so. Defining the monitoring scope is not a static operation as it can be updated during live deployment. This provides flexibility for what types and numbers of DCs are required in a user environment, as well as required system resources as the environment data demands evolve over time."}),"\n",(0,l.jsx)(t.h2,{id:"platform-deployment-sizing",children:"Platform Deployment Sizing"}),"\n",(0,l.jsx)(t.p,{children:"Currently, Exalens makes system requirements specifications based on the scope of Exalens product deployment against 3 deployment tier sizes: small, medium, and large. These tier sizes assume a certain environment scale with system resources available for reliable platform performance."}),"\n",(0,l.jsx)(t.p,{children:"The product deployment scope specifications are as follows:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Product License"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Product Scope"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data Historian"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource collect, store and visualise"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data Ops"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource collect, storage, visualise, contextualise, Data Model, Forward"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Process Monitoring"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource collect, storage, visualise, contextualise, Data Model, Monitor, Learning, Alert, Analyse, Forward"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CPS Threat Detection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource and Network traffic collect, storage, visualise, contextualise, Data Model, Monitor, Learning, Alert, Analyse, Forward"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Environment sizing specifications are as follows:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Environment Size"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Datasource Tags"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Average Bandwidth"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Up to 10,000 tags"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Up to 300 Mbps"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Up to 50,000 tags"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Up to 1Gbps"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Up to 100,000 tags"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Up to 5Gbps"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"host-specifications",children:"Host Specifications"}),"\n",(0,l.jsx)(t.p,{children:"The host specification guidelines are based on deploying the Exalens software on a Debian Linux operating system on a physical host equipped with an Intel/AMD x64 processor with a minimum clock speed of 2.5 GHz. Virtualised hosts may not provide dedicated CPU, RAM and Disk resources to Exalens software during operation. Up to a 50% drop in Datasource Tags and Average and 70% drop in Network Bandwidth Ingest performance can be expected for virtualised hosts running the Exalens software depending on environment size and different virtualisation technology, hardware and network equipment configurations."}),"\n",(0,l.jsx)(t.p,{children:"On request, Exalens provides tailored physical appliances for customers, and customers may also deploy the Exalens platform on their bare metal hardware systems where desired to house the Exalens software. Note that for customer-supplied bare metal hardware, it is recommended that customers engage with the Exalens support team to assess the compatibility of both hardware and operating system."}),"\n",(0,l.jsx)(t.h3,{id:"recommended-cortex-resources",children:"Recommended Cortex Resources"}),"\n",(0,l.jsx)(t.p,{children:"These specifications assume a single Cortex deployment with one or more external DCs."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Environment Size"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Product Scope"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Cores"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Memory (RAM)"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Storage (SSD)"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data Historian & Data Ops"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"12"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"32GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Process Monitoring"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"12"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"64GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CPS Threat Detection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"16"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"64GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data Historian & Data Ops"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"16"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"64GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1TB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Process Monitoring"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"24"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"128GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1TB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CPS Threat Detection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"32"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"256GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2TB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Data Historian & Data Ops"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"24"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"128GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2TB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Process Monitoring"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"48"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"256GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"2TB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"CPS Threat Detection"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"64"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"512GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4TB"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"recommended-dc-specifications",children:"Recommended DC Specifications"}),"\n",(0,l.jsx)(t.p,{children:"These specifications assume a single external DC. Multiple smaller resource DCs can be deployed to accommodate large environment depending on the specific deployment design. It is recommended to contact and engage the Exalens support to discuss deployment requirements and design options to determine optimal DC resource requirements."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Environment Size"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Product Scope"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Cores"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Memory (RAM)"})}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:(0,l.jsx)(t.strong,{children:"Storage (SSD)"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource tags only"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"8"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"16GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Small"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Network Monitoring only"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"16"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"32GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource tags only"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"16"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"32GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Medium"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Network Monitoring only"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"16"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"64GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1TB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Datasource tags only"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"24"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"64GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"500GB"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Large"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Network Monitoring only"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"48"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"128GB"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"1TB"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var l=n(6540);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);