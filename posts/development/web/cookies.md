---
title: Cookie Transmission Scenario Analysis
description: 'All cookies have the following common options:'
authors:
  - XIYO
  - XIYO
  - XIYO
  - XIYO
dates:
  - '2025-06-15T13:04:31.601Z'
  - '2025-06-15T13:01:45.902Z'
  - 2025-06-15T10:48+0900
  - 2025-06-07T14:58+0900
tags: []
messages:
  - '✨ Added cookie transmission scenario analysis content: Organized cookie transmission status based on SameSite settings and domain attributes'
  - ✨ Added cookie transmission scenario analysis document
  - \U0001F921
  - 📝 Draft
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