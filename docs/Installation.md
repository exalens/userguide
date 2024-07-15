---
id: installation
title: Installation Guide
---
# Installation Guide

## Installation
The Exalens platform can be deployed on Industrial PCs (IPCs), virtual machines, standard servers, or in the cloud. The platform is deployed using Docker containers for ease of setup and management.

## Software and Hardware Requirements
Exalens Cortex can be installed on any Debian-based server. It is recommended to use Ubuntu 22.04 server. A Docker installation script is available as part of the installation package. It is recommended to uninstall any existing Docker installations and use the provided script, as it correctly handles all permissions.

- **CPU:** Minimum 12 cores
- **Memory:** Minimum 32 GB RAM
- **Disk Space:** Minimum 1TB SSD

## Network Requirements
The installation of the Exalens Platform requires internet access for downloading the Docker containers.

- Cortex requires inbound access for TCP ports 443, 5789, and 8883.
- External Data Collector requires inbound access for TCP port 8884.

Exalens can be deployed completely in an air-gapped environment as well. Please contact us for more information.

## Trial Version
The trial version can be tested in Windows Subsystem for Linux (WSL). The resource usage is reduced to allow testing with one or two data sources.

- **CPU:** Minimum 4 cores
- **Memory:** Minimum 16 GB RAM
- **Disk Space:** Minimum 250 GB SSD

## Installation Video Guide
You can refer to the installation video for a step-by-step guide:

[![Installation Video](https://img.youtube.com/vi/-yyIRXXSsy8/maxresdefault.jpg)](https://www.youtube.com/watch?v=-yyIRXXSsy8&t=25s)

## Extracting the Package
To extract the installation package, follow these steps:

1. Download the package (e.g., process_monitoring.tar.gz).
2. Use the tar command to extract the package:

    ```sh
    tar -xvf process_monitoring.tar.gz
    ```

    Expected Output: The tar command will extract the contents of the package into the current directory, displaying the list of extracted files and directories.

## Installing Docker
To install Docker on your Linux system, first ensure the installation script is executable by running the following command in the terminal:

```sh
chmod +x install_docker.sh
```

Then, execute the provided script:

```sh
./install_docker.sh
```

## Starting the Services
To start the services on a Linux system, first ensure the start script is executable by running the following command:

```sh
chmod +x retina-cortex.sh
```

Then, use the provided script to start the services by executing the following command:

```sh
./retina-cortex.sh --start
```

This script will download the Docker images and start the Cortex.

## Accessing and Setting up the Cortex
You can access the Exalens Cortex web UI by opening a web browser and navigating to the URL only after the Exalens Cortex is started and the service is running.

```sh
https://[IP_ADDRESS]:443
```

Replace [IP_ADDRESS] with the machine's IP address where the Exalens service is running.

## First Login and Password Change
The user login prompt for Exalens will appear. Use the following default Exalens administrator user credentials to log in:

- **Username:** admin
- **Password:** @Dm1nadmin

You will be prompted to change your password. Please follow the instructions to set a new password.

## Updating the License
To update the license, follow these steps:

1. Open the license file using the cat command:

    ```sh
    cat license.txt
    ```

2. Copy the license key and paste it into the license update field in the Exalens Cortex web UI.

## Accepting the End User License Agreement (EULA)
You will need to accept the EULA to continue. Please read the agreement and click "Accept".
