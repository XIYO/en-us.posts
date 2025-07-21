---
title: Step 01
authors:
  - XIYO
dates:
  - Thu Jul 17 2025 09:00:00 GMT+0900 (대한민국 표준시)
tags: obsidian, sync, git, cloud, backup
---

# Obsidian Sync Settings

> [!NOTE]
> **Sync notes across multiple devices**
> How to use the same notes on desktop, laptop, mobile, and tablet.

## Sync Options Comparison

| Method | Price | Desktop | Mobile | Real-time | Version Control |
|--------|-------|---------|--------|-----------|-----------------|
| Obsidian Sync | $4/month | O | O | O | O |
| Git (Obsidian Git) | Free | O | X | Auto | O |
| iCloud | Free | O | O | O | X |
| **Git + iCloud** | Free | O | O | O | O |

## Git Sync (Developer Recommended)

> [!IMPORTANT]
> **Prerequisites Required**
> Git and GitHub setup is required. Complete the [Git & GitHub Setup Guide](../mac-setup/git-github-setup.md) first.

### Install Obsidian Git Plugin

1. Settings → Community plugins → Browse
2. Search and install "Obsidian Git"
3. Enable plugin

### Initialize Git Repository

Open terminal and copy-paste these commands:
```bash
cd ~/Documents/Obsidian/YourVault
git init
echo ".obsidian/workspace*" >> .gitignore
git add .
git commit -m "Initial commit"
```

### Connect GitHub Repository

> [!TIP]
> **If already logged in with gh**
> If you're logged in with GitHub CLI, authentication is handled automatically.

Open terminal and copy-paste this command:
```bash
gh repo create obsidian-vault --private --source=. --remote=origin --push
```

### Obsidian Git Plugin Settings

In Settings → Obsidian Git:

#### Basic Settings
- **Vault backup interval**: 10 (auto-backup every 10 minutes)
- **Auto pull interval**: 10 (auto-pull every 10 minutes)
- **Commit message**: `vault backup: {{date}}`
- **Pull updates on startup**: ON (get latest version on startup)
- **Push on backup**: ON (auto-push on backup)

#### Advanced Settings
- **Sync method**: Merge (merge on conflict)
- **Pull method**: Merge (merge method for pull)
- **Disable push**: OFF (enable push)
- **Disable notifications**: OFF (show notifications)
- **Show status bar**: ON (show Git status in status bar)

#### Auto Backup Triggers
- **Backup on file save**: ON (backup when file saved)
- **Backup after file change**: ON (backup after file change)
- **Auto backup after latest commit**: 5 (auto-backup 5 minutes after last commit)

> [!IMPORTANT]
> **Auto-backup on app exit**
> To automatically backup when closing Obsidian or entering sleep mode:
> 1. Register hotkey for **Command palette** (Cmd+P) → "Obsidian Git: Create backup"
> 2. Create automation in **macOS Shortcuts app**:
>    - Trigger: "When app quits" or "When entering sleep mode"
>    - Action: Run Obsidian Git backup
>
> Or more simply:
> - Set **Auto backup after latest commit**: 1-2 minutes
> - This ensures backup within 1-2 minutes after last change.

#### File Management
- **List of files to not commit**:
  ```
  .obsidian/workspace*
  .obsidian/app.json
  .obsidian/appearance.json
  .trash/
  .DS_Store
  ```
- **Pull changes before push**: ON (run pull before push)

#### Performance Optimization
- **Improved performance for large vaults**: ON (optimize for large vaults)
- **Show changes files count**: ON (show changed files count)

> [!TIP]
> **Commit Message Variables**
> - `{{date}}`: Current date/time
> - `{{hostname}}`: Computer name
> - `{{numFiles}}`: Number of changed files
>
> Example: `vault backup: {{date}} on {{hostname}} ({{numFiles}} files)`

> [!INFO]
> **Setup Complete**
>
> Now automatically backs up to Git.
> Uses gh credentials without separate authentication setup.

## iCloud Sync (Apple Users)

> [!IMPORTANT]
> **Must create vault on iPhone first**
> To create the Obsidian directory in iCloud Drive, you must first create a vault in the iPhone Obsidian app. You cannot create it directly on Mac.

### Create Vault on iPhone
1. **Install Obsidian app on iPhone**
2. **Launch app and select "Create new vault"**
3. **Select "Store in iCloud" option**
4. **Name the vault** (e.g., MyVault)
5. **Obsidian folder automatically created in iCloud Drive**

### Connect on Mac
1. **Open Finder** → **iCloud Drive**
2. **Find Obsidian folder**
3. **Select "Open folder as vault" in Mac Obsidian**
4. **Select iCloud Drive → Obsidian → MyVault**

### Advantages
- Very simple setup
- Real-time sync
- Supports all Apple devices

### Disadvantages
- Apple devices only
- No version control
- Must set up on iPhone first

## Obsidian Sync (Official Solution)

### Advantages
- All platforms supported
- End-to-end encryption
- Version history

### Pricing
- **$4/month** (annual billing)
- 40% student discount: [Apply here](https://obsidian.md/student-discount)

### Setup
1. Settings → Sync → Log in
2. Auto-sync after subscription

## Hybrid: Git + iCloud (Optimal Solution)

> [!TIP]
> **Leverage advantages of both methods**
> Version control with Git on desktop, access with iCloud on mobile

### Setup Method

> [!WARNING]
> **Order is important!**
> You must create the vault in the iPhone Obsidian app first for the Obsidian directory to be created in iCloud Drive.

1. **Confirm vault created on iPhone**
   - Create vault with "Store in iCloud" in iPhone Obsidian app
   - This process automatically creates Obsidian folder in iCloud Drive

2. **Open vault on Mac**
   ```
   ~/Library/Mobile Documents/com~apple~CloudDocs/Obsidian/MyVault
   ```

3. **Initialize Git (refer to Git sync method above)**

4. **Workflow**
   - Desktop: Commit/push with Git (version control)
   - Mobile: Read/write with iCloud (real-time sync)
   - Obsidian Git plugin automatically syncs

### Advantages
- Available on all devices
- Version control + real-time sync
- Completely free

## Recommendations

- **Developers**: Git + iCloud hybrid
- **General users**: iCloud (Mac) or Obsidian Sync
- **Cross-platform**: Obsidian Sync

> [!WARNING]
> With Git + iCloud hybrid, edit on only one device at a time. Simultaneous editing may cause conflicts.

## Next Steps

After sync setup is complete:
- [Essential Plugin Installation](step-02.md)
- [Advanced Settings](step-03.md)