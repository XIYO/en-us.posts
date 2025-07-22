---
title: Initial Setup
authors:
  - XIYO
dates:
  - Thu Jul 17 2025 09:00:00 GMT+0900 (대한민국 표준시)
tags: obsidian, settings, essential, first-setup
---

# Obsidian Setup Guide

Obsidian is a powerful markdown-based note-taking app. It saves your notes as local files for permanent ownership and allows you to connect and manage knowledge through links and graph views. It's optimized for organizing development documentation, study notes, and ideas systematically.

### Key Differences from Notion

| Feature | Obsidian | Notion |
|---------|----------|--------|
| **Data Storage** | Local markdown files | Cloud-only |
| **Speed** | Very fast (local) | Depends on internet speed |
| **Offline Use** | Fully supported | Limited |
| **File Ownership** | 100% user-owned | Service-dependent |
| **Customization** | Unlimited with plugins | Limited block-based |
| **Price** | Free (sync only paid) | Free limited, paid required |
| **Learning Curve** | Initial setup needed | Ready to use |

Obsidian is ideal for developers and users who need long-term knowledge management, and it's the best choice when you want complete control over your data.

## Obsidian Initial Setup

### First Launch and Vault Creation
1. Launch Obsidian
2. Select "Create new vault"
3. Enter vault name (e.g., "Dev Notes", "Knowledge Base")
4. Choose save location

> [!WARNING]
> **Configure this at the beginning**
> Changing later may require modifying existing notes.

## Essential Settings

### Use Markdown Links (Wiki Links OFF)

Settings (Cmd+,) → Files & Links:
- **Use `Wikilinks`**: OFF
- **Relative path to file**: ON

> [!INFO]
> Use standard markdown `[text](filename)` instead of wiki links `[[filename]]`.
> Compatible with other markdown editors like GitHub and VS Code.

### Organize Attachments (assets folder)

Settings → Files & Links:
- **Default location for new attachments**: "In the folder specified below"
- **Attachment folder path**: `assets`

When you drag images or files:
```
[DIR] Vault root/
  [DIR] assets/        ← All attachments go here
    [IMG] image1.png
    [IMG] image2.png
  [DIR] notes/
    [FILE] note1.md
    [FILE] note2.md
```

> [!INFO]
> **Auto-update links**: Enable "Automatically update internal links" to automatically update links when file names change.

### Use Full Screen Width

Settings → Editor:
- **Readable line length**: OFF

You can write using the full screen width instead of a narrow area.

## Additional Recommended Settings

### Appearance Settings
In Settings → Appearance:
- **Base theme**: Dark/Light (your preference)
- **Translucent window**: ON (looks nice on Mac)

### Auto Save
In Settings → Editor:
- **Autosave after delay**: 2 (auto-save after 2 seconds)

### Editor Settings
In Settings → Editor:
- **Show line numbers**: ON (useful for coding)
- **Show frontmatter**: ON (display metadata)
- **Fold heading**: ON (manage long documents)
- **Fold indent**: ON (fold indentation)
- **Tab size**: 2 or 4 (match your code style)
- **Use tabs**: OFF (spaces recommended)

### Files and Folders Settings
In Settings → Files & Links:
- **Excluded files**:
  ```
  .DS_Store
  .git/
  node_modules/
  ```

### New File Templates
After enabling Settings → Core plugins → Templates:
1. Specify templates folder location
2. Create default template files

## Settings Verification

Test with a new note:

1. **Link test**:
   - Create link with `Cmd + K` → Check if format is `[](test)`

2. **Image test**:
   - Drag image → Check if saved in `assets` folder

3. **Screen test**:
   - Type long sentence → Check if text displays to screen edge

> [!INFO]
> **Setup Complete**
>
> You're now ready to use Obsidian efficiently.

## Essential Shortcuts & Enable Core Features

### Core Shortcuts (Must Know)
- `Cmd + P`: **Command palette** (execute all commands)
- `Cmd + O`: **Quick switcher** (search and open files)
- `Cmd + N`: Create new note
- `Cmd + Shift + N`: Create new note (in new window)
- `Cmd + W`: Close current tab
- `Cmd + Shift + F`: Search entire vault
- `Cmd + F`: Search in current note
- `Cmd + E`: Toggle edit/preview mode
- `Cmd + K`: Insert link
- `Cmd + B`: **Bold**
- `Cmd + I`: *Italic*

### Enable Hidden Core Features

#### Enable Audio Recording
Settings → Core plugins → **Audio recorder** enable

Usage:
- Start recording: Click microphone icon in left sidebar
- Set hotkey: Settings → Hotkeys → Search "Start/stop recording"
- Recommended hotkey: `Cmd + Shift + R`
- Recordings automatically saved to assets folder

#### Slide Presentations
Settings → Core plugins → **Slides** enable

Usage:
- Separate slides with `---` in note
- Command palette → Run "Start presentation"
- Switch to presentation mode

#### Canvas (Infinite Whiteboard)
Settings → Core plugins → **Canvas** enable

Usage:
- `Cmd + N` → Select "Canvas" from file type
- Visually connect notes, images, links
- Create mind maps and flowcharts

#### Daily Notes
Settings → Core plugins → **Daily notes** enable

Settings:
- Date format: `YYYY-MM-DD`
- New file location: `daily/` (auto-creates folder)
- Template file location: Can set template

### Power User Shortcuts
- `Cmd + P` then `>`: Show commands only
- `Cmd + P` then `#`: Tag search
- `Cmd + P` then `^`: Heading search
- `Cmd + [` / `Cmd + ]`: Navigate back/forward
- `Option + Enter`: Open link in new window
- `Cmd + Option + ←/→`: Switch tabs
- `Cmd + \`: Toggle sidebar

### Essential Custom Hotkey Settings
Add in Settings → Hotkeys:
- **Toggle left sidebar**: `Cmd + 1`
- **Toggle right sidebar**: `Cmd + 2`
- **Focus on editor**: `Cmd + 0`
- **Move line up/down**: `Option + ↑/↓`
- **Delete paragraph**: `Cmd + D`
- **Open in default app**: `Cmd + Option + O`

## Note-Taking Tips

### Utilize Links (Markdown Format)
- `[Note Name](notename)`: Link to another note
- `[Section Link](notename#heading)`: Link to specific section

### Tag System
- `#project/frontend`: Use hierarchical tags
- `#todo`, `#idea`, `#bug`: State management
- View all at a glance in tag pane

### Daily Notes Usage
Create daily notes each morning to:
- Write to-do lists
- Organize learned content
- Memo ideas

## Next Steps

After basic setup:
- [Markdown Basic Features](markdown-basics) - Mermaid, LaTeX, Callouts, etc.
- [Sync Settings](obsidian-step01-sync-settings) - Git, Cloud, Obsidian Sync