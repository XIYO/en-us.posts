---
title: Cookie Transmission Scenario Analysis
description: >-
  This document analyzes cookie transmission scenarios, organizing cookie
  transmission status according to various SameSite settings and domain
  attributes. This analysis is based on requests between `https://api.hello.dev`
  and `https://hello.dev`.
dates:
  - "2025-07-21T17:43:54.000Z"
  - "2025-07-21T16:32:54.000Z"
  - "2025-07-13T06:54:45.000Z"
  - "2025-06-15T13:04:31.000Z"
  - "2025-06-15T13:01:45.000Z"
authors:
  - XIYO
  - xiyo
---
# Cookie Transmission Scenario Analysis

This document analyzes cookie transmission scenarios, organizing cookie transmission status according to various SameSite settings and domain attributes. This analysis is based on requests between `https://api.hello.dev` and `https://hello.dev`.

## Prerequisites

All cookies have the following common options:
- **Secure=true**: Cookies are only transmitted over HTTPS connections

Since browsers transmit all SameSite setting cookies only in requests between **same sites** (where origin and target share the same registered domain hello.dev), there is no blocking due to SameSite here. When a cookie's Domain attribute is specified, the cookie is transmitted to that domain and all its subdomains. In the tables below, ✅ indicates cookie transmission, and 🚫 indicates no transmission.

## `https://api.hello.dev` → `https://api.hello.dev`

|**Domain**|**SameSite**|**Form GET**|**Form POST**|**Fetch GET**|**Fetch POST**|
|---|---|---|---|---|---|
|api.hello.dev|Strict|✅|✅|✅¹|✅¹|
|api.hello.dev|Lax|✅|✅|✅¹|✅¹|
|api.hello.dev|None|✅|✅|✅¹|✅¹|
|.hello.dev|Strict|✅|✅|✅¹|✅¹|
|.hello.dev|Lax|✅|✅|✅¹|✅¹|
|.hello.dev|None|✅|✅|✅¹|✅¹|

## `https://api.hello.dev` → `https://*.hello.dev`

|**Domain**|**SameSite**|**Form GET**|**Form POST**|**Fetch GET**|**Fetch POST**|
|---|---|---|---|---|---|
|api.hello.dev|Strict|🚫|🚫|🚫|🚫|
|api.hello.dev|Lax|🚫|🚫|🚫|🚫|
|api.hello.dev|None|🚫|🚫|🚫|🚫|
|.hello.dev|Strict|✅|✅|✅¹|✅¹|
|.hello.dev|Lax|✅|✅|✅¹|✅¹|
|.hello.dev|None|✅|✅|✅¹|✅¹|

## `https://api.hello.dev` → `https://hello.dev`

|**Domain**|**SameSite**|**Form GET**|**Form POST**|**Fetch GET**|**Fetch POST**|
|---|---|---|---|---|---|
|api.hello.dev|Strict|🚫|🚫|🚫|🚫|
|api.hello.dev|Lax|🚫|🚫|🚫|🚫|
|api.hello.dev|None|🚫|🚫|🚫|🚫|
|.hello.dev|Strict|✅|✅|✅¹|✅¹|
|.hello.dev|Lax|✅|✅|✅¹|✅¹|
|.hello.dev|None|✅|✅|✅¹|✅¹|

## `https://hello.dev` → `https://api.hello.dev`

|**Domain**|**SameSite**|**Form GET**|**Form POST**|**Fetch GET**|**Fetch POST**|
|---|---|---|---|---|---|
|hello.dev|Strict|🚫|🚫|🚫|🚫|
|hello.dev|Lax|🚫|🚫|🚫|🚫|
|hello.dev|None|🚫|🚫|🚫|🚫|
|.hello.dev|Strict|✅|✅|✅¹|✅¹|
|.hello.dev|Lax|✅|✅|✅¹|✅¹|
|.hello.dev|None|✅|✅|✅¹|✅¹|

## `https://hello.dev` → `https://*.hello.dev`

|**Domain**|**SameSite**|**Form GET**|**Form POST**|**Fetch GET**|**Fetch POST**|
|---|---|---|---|---|---|
|hello.dev|Strict|🚫|🚫|🚫|🚫|
|hello.dev|Lax|🚫|🚫|🚫|🚫|
|hello.dev|None|🚫|🚫|🚫|🚫|
|.hello.dev|Strict|✅|✅|✅¹|✅¹|
|.hello.dev|Lax|✅|✅|✅¹|✅¹|
|.hello.dev|None|✅|✅|✅¹|✅¹|

---

## Footnotes

¹ With credentials included (Fetch API requires credentials: include option)

**Note:** When a domain attribute is specified, cookies are transmitted to the specified domain and all its subdomains.