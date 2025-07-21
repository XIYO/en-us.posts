---
title: Oracle Docker Installation Guide
tags:
  - docker
  - oracle
  - database
  - guide
  - installation
---

# Oracle Docker Quick Install Guide

This guide explains how to quickly install Oracle Database Free Edition using Docker.

> [!INFO]
> For detailed information about Oracle Database concepts and editions, please refer to the [Oracle Database Concepts Guide](oracle-database-concepts).

## Prerequisites

- Docker Desktop installed
- Minimum 2GB free RAM
- Minimum 15GB free disk space

## Oracle Database Free Edition Installation

### Download Oracle Database 23c Free Image

> [!INFO]
> **What is a Container Registry?**
> A repository for storing and distributing Docker images. While Docker Hub is the most famous,
> Oracle operates its own Container Registry (container-registry.oracle.com).
> 
> Most Container Registries require login before downloading images.
> However, Oracle allows downloading the Free Edition without login by using it as a "loss leader" product.
> 
> For more details about Container Registry, refer to the [Oracle Database Concepts Guide](oracle-database-concepts).

Download Oracle Database 23c Free, the latest free version for developers.

Open a terminal and copy and paste the following command:
```bash
docker pull container-registry.oracle.com/database/free:latest
```
## Run Oracle Free Container

### Basic Run

Run the Oracle Free 23c container.

Open a terminal and copy and paste the following command:
```bash
docker run -d --name oracle-free -p 1521:1521 -p 5500:5500 -e ORACLE_PWD=oracle123 container-registry.oracle.com/database/free:latest
```

Explanation of each option in the command above:

**Basic run options:**
- `-d`: Run in background
- `--name oracle-free`: Specify container name
- `-p 1521:1521`: Database port mapping
- `-p 5500:5500`: Enterprise Manager Express port mapping

**Required environment variables:**
- `-e ORACLE_PWD=oracle123`: Set password for SYS, SYSTEM, PDBADMIN users

**Optional environment variables (add if needed):**
- `-e ORACLE_CHARACTERSET=KO16MSWIN949`: Change character set (default: AL32UTF8)
- `-e ORACLE_PDB=MYAPP`: Change PDB name (default: FREEPDB1)
- `-e ENABLE_ARCHIVELOG=true`: Enable archive log mode
- `-v oracle-free-data:/opt/oracle/oradata`: Persist data permanently

> [!INFO]
> **Connection Information**
> - **Ports**: 1521 (database), 5500 (web management tool)
> - **Default users**: SYS, SYSTEM (password is oracle123 set above)
> - **Database name**: FREEPDB1
> 
> Connection string example: `username/password@localhost:1521/FREEPDB1`
> 
> For Oracle core concepts like SID, Service Name, PDB, refer to the [Oracle Database Concepts Guide](oracle-database-concepts).



## Check Container Status

### Check Logs

Monitor oracle-free container logs in real-time.

Open a terminal and copy and paste the following command:
```bash
docker logs -f oracle-free
```

When the database is ready, you'll see this message:
```
DATABASE IS READY TO USE!
```

### Check Container Status

Open a terminal and copy and paste the following command:
```bash
docker ps -a | grep oracle
```

### Check Database Status

Verify the container is running properly.

Open a terminal and copy and paste the following command:
```bash
docker ps | grep oracle-free
```


## Troubleshooting

### Port Conflict

If you encounter a port conflict, first check which process is using port 1521.

Open a terminal and copy and paste the following command:
```bash
lsof -i :1521
```

**Sample output:**

When port is not in use (normal):
```
# No result (empty screen)
```

When port is already in use:
```
COMMAND   PID      USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
com.docke 642 username  190u  IPv6 0x651391288870c513      0t0  TCP *:ncube-lm (LISTEN)
```

Port conflict error when running Docker container:
```
docker: Error response from daemon: failed to set up container networking: 
Bind for 0.0.0.0:1521 failed: port is already allocated
```

Two ways to resolve port conflicts:

#### Resolve by Stopping Existing Container

Stop the existing Oracle container and start new one.

Open a terminal and copy and paste the following command:
```bash
docker stop oracle-free
```

#### Resolve by Using Different Port

To run multiple Oracle instances simultaneously, use different ports.

Open a terminal and copy and paste the following command:
```bash
docker run -d --name oracle-free2 -p 1522:1521 -p 5501:5500 -e ORACLE_PWD=YourPassword123 container-registry.oracle.com/database/free:latest
```