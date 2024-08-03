---
id: mtconnect_adapter
title: MTConnect Adapter
---
# How to Create an MTConnect Adapter DataSource Client

This guide provides step-by-step instructions on how to create a data source client using the Exalens platform. The client will connect to an MTConnect Adapter to collect and store data, which can then be visualized using table and chart views.

## Connect

### Create a New Data Source

On the Exalens dashboard, navigate to the "Datasources" section.

![Datasource](mtconnect_adapter_img/1.png)

Click on the "Create Datasource" button.

![Create a New Data Source](mtconnect_adapter_img/2.png)

### Select MTConnect Adapter

A dialog box titled "Select Datasource" will appear. Choose "MTConnect Adapter" from the list of available options.

![Select MTConnect Adapter](mtconnect_adapter_img/3.png)

### Configure the MTConnect Adapter Connection

Fill in the details for the MTConnect Adapter in the provided fields:
- **Name:** Enter a descriptive name for the data source.
- **Adapter Host:** Input the Adapter Host. This is the address of the server. Use "localhost" if the server is on the same machine you are working on. Replace it with the actual IP address if the server is on a different machine.
- **Adapter Port:** Input the port number. Ensure this port is open and accessible. 

![MTConnect Adapter](mtconnect_adapter_img/4.png)

### Data Collector Name

Selecting the correct Data Collector is crucial. Ensure you choose a Data Collector that has network access to the MTConnect Adapter. The client runs on the Data Collector, establishing the connection with the MTConnect Adapter. All installed Data Collectors will be listed in the dropdown menu.

![Data Collector Name](mtconnect_adapter_img/5.png)

### Create the Data Source

After configuring the adapter connection details, click the "Create" button. This action establishes a persistent client connection with the MTConnect Adapter. A confirmation message will appear indicating a successful connection. If the connection fails, verify your adapter host, adapter port number and network settings, then try again.

![Create Data Source](mtconnect_adapter_img/6.png)

![connection success](mtconnect_adapter_img/7.png)

![data source client](mtconnect_adapter_img/8.png)

![data source client](mtconnect_adapter_img/9.png)

## Collect and Store

After the data source client is created, click on the data source client. You will be taken to the live view where you can monitor the variable's live data. The data collected from these variables will be stored in a time series database for further analysis and historical reference.

![live view](mtconnect_adapter_img/10.png)

## Visualize

Access the table view to see historical data and recent values. You can filter and export data as a CSV file from this view. The chart view allows you to visualize data trends over time.

![Table view](mtconnect_adapter_img/11.png)

![Table view](mtconnect_adapter_img/12.png)
