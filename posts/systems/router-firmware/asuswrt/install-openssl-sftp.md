---
title: INSTALL OPENSSL AND SFTP ON ASUSWRT
description: This document explains how to add SFTP functionality to `Dropbear`.
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
# INSTALL OPENSSL AND SFTP ON ASUSWRT

This document explains how to add SFTP functionality to `Dropbear`.

`Dropbear` is a lightweight package of `OpenSSH`. \
Some features of `OpenSSH` have been removed, including `SFTP`.

## ENVIRONMENT

- `ASUSWRT-MERLIN 386.12`
- `Entware armv7sf-k2.6`

## METHOD

```bash
opkg update
opkg install openssh-sftp-server
```

Proceed with updating and installing the package manager.

After installation, you can access it immediately without any additional configuration.

