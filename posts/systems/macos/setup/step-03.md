---
title: Step 03
authors:
  - XIYO
dates:
  - Thu Jul 17 2025 09:00:00 GMT+0900 (대한민국 표준시)
tags:
  - mac-setup
  - java
  - openjdk
  - programming-languages
  - intellij
---

# Installing Programming Languages

> [!NOTE]
> **Prerequisites**
> [Homebrew installation](step-00) must be completed.

## Advice on Java Installation

> [!INFO]
> **IntelliJ IDEA Manages JDKs Automatically**
> IntelliJ IDEA downloads and manages the required JDK for each project. Since IntelliJ handles everything automatically without needing Java installed system-wide, delay installation unless absolutely necessary.

### When Should You Install Java on Your System?

System-wide Java is only needed in these cases:

- When using the `java` command directly in terminal
- When running Java applications without IntelliJ
- When Java is needed in CI/CD pipelines

## How to Install Java 21 OpenJDK

If you really need it, you can easily install with Homebrew.

Open Terminal and copy-paste the following command:

```bash
(brew install openjdk@21 || true)
```

> [!IMPORTANT]
> **DO NOT Set JAVA_HOME**
> Homebrew manages PATH automatically. There's no need to add `export JAVA_HOME=...` to `.zshrc` like in the old ways.

## Verify Installation

After installation, check if Java is working properly.

Open Terminal and copy-paste the following command:

```bash
java --version
```

If you see a message similar to this, it's successful:

```text
openjdk 21.x.x 2024-xx-xx
OpenJDK Runtime Environment Homebrew (build 21.x.x)
OpenJDK 64-Bit Server VM Homebrew (build 21.x.x, mixed mode, sharing)
```

> [!TIP]
> IntelliJ IDEA automatically recognizes JDKs installed on your system. Just select from the list when creating a project.

## Next Steps

All necessary tools are ready! Learn some tips for using macOS more efficiently.

[Next Step: macOS Tips Collection](step-04)