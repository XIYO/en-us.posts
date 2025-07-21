---
title: Step 01
authors:
  - XIYO
dates:
  - Thu Jul 17 2025 09:00:00 GMT+0900 (대한민국 표준시)
tags:
  - mac-setup
  - developer-tools
  - git
  - docker
  - vscode
  - iterm2
  - jetbrains
---

# Installing Essential Developer Tools

> [!NOTE]
> **Prerequisites**
> [Homebrew installation](step-00) must be completed before proceeding with this guide.

## Installing Essential Tools

### Development Tools

Git - Distributed version control system

```bash
brew install git
```

GitHub CLI - Use GitHub from the terminal

```bash
brew install gh
```

### Terminal & Editor

iTerm2 - Powerful terminal emulator

```bash
brew install --cask iterm2
```

Visual Studio Code - Microsoft's free code editor

```bash
brew install --cask visual-studio-code
```

### Development Environment

Docker Desktop - Container-based virtualization platform

```bash
brew install --cask docker-desktop
```

JetBrains Toolbox - JetBrains IDE management tool

```bash
brew install --cask jetbrains-toolbox
```

### Fonts

D2Coding Nerd Font - Coding font with Korean support

```bash
brew install --cask font-d2coding-nerd-font
```

Pretendard - Highly readable Korean font

```bash
brew install --cask font-pretendard
```

> [!INFO]
> **Homebrew Package Name Changes**
>
> - **Docker**: `docker` → `docker-desktop`
> - **Font Repository**: No separate tap needed (integrated into main repository)


## Additional Setup

- **Git & GitHub CLI** → [Git & GitHub Setup Guide](git-github-setup)
- **JetBrains Toolbox** → [JetBrains Setup Guide](jetbrains-setup)
- **iTerm2 + Oh My Zsh** → [Terminal Customization Guide](terminal-customization)

## Next Steps

Essential tools installation is complete.

[Next Step: Installing System Utilities](step-02)