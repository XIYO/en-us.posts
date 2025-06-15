---
authors:
  - XIYO
  - XIYO
  - XIYO
dates:
  - "2025-06-15T13:01:45.902Z"
  - "2025-06-15T10:48+0900"
  - "2025-06-07T14:58+0900"
messages:
  - "✨ 쿠키 전송 시나리오 분석 문서 추가"
  - \U0001F921
  - "\U0001F4DD 초안"
title: "쿠키 전송 시나리오 분석"
description: "모든 쿠키는 다음 공통 옵션을 가집니다:"
---
# 쿠키 전송 시나리오 분석

## 전제 조건

모든 쿠키는 다음 공통 옵션을 가집니다:
- **Secure=true**: HTTPS 연결에서만 쿠키 전송

브라우저는 **동일 사이트**(origin과 target이 같은 등록 도메인 hello.dev를 공유) 간의 요청에서만 모든 SameSite 설정 쿠키를 전송하므로, 여기서 SameSite로 인한 차단은 없다. 쿠키의 Domain 속성을 지정하면 해당 도메인과 모든 서브도메인에 쿠키가 전송된다. 아래 표에서 ✅는 쿠키 전송, 🚫는 전송되지 않음을 나타낸다.

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

## 각주

¹ 자격증명 포함 (Fetch API는 credentials: include 옵션 필요)

**참고:** 도메인 속성 지정 시 지정 도메인과 모든 서브도메인에 쿠키가 전송됨.
