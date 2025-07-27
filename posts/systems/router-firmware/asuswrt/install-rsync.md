---
title: INSTALL RSYNC
description: I am running nginx on the router. \
dates:
  - "2025-07-21T16:56:54.000Z"
  - "2025-07-21T16:32:54.000Z"
  - "2025-06-15T06:10:59.000Z"
  - "2024-09-08T03:40:36.000Z"
  - "2024-09-05T14:19:14.000Z"
authors:
  - XIYO
lastModified: 2025-07-26T11:55:37+09:00
---
# INSTALL RSYNC

I am running nginx on the router. \
Since I am in the process of setting up a landing page, I will install rsync for automatic deployment.

## ENVIRONMENT

This is the environment at the time of work.

- AC88U
- Merlin 386.12\_4
- Entware 2022-02-24

## REQUIREMENTS

These are the essential elements. Detailed explanations are omitted.

- Install Merlin firmware
- Install Entware
- Activate jffs partition
- Enable ssh

## INSTALL

```bash
opkg update
opkg install rsync
```

