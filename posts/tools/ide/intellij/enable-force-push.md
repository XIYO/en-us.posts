---
title: ENABLE FORCE PUSH ON INTELLIJ
description: >-
  By default, force push is protected on the master and main branches in
  IntelliJ. \
dates:
  - "2025-07-21T16:56:54.000Z"
  - "2025-07-21T16:32:54.000Z"
  - "2025-06-15T06:10:59.000Z"
  - "2024-09-18T02:16:48.000Z"
  - "2024-09-08T03:40:36.000Z"
  - "2024-09-05T14:19:14.000Z"
authors:
  - XIYO
lastModified: 2025-07-26T11:55:37+09:00
---
# ENABLE FORCE PUSH ON INTELLIJ

By default, force push is protected on the master and main branches in IntelliJ. \
Let's explore how to resolve this.

## SCENARIO

To automate deployment using GitHub Actions, I encountered several syntax errors. \
As a result, messy test code was left in the commit log, and I needed to enable force push to clean it up.

## SOLUTION

![open search everywhere](./assets/enable-force-push-20240918104825841.png)
![modify protected branch](./assets/enable-force-push-20240918104833418.png)

- Step 0: Press the shortcut keys <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> to open the `Search Everywhere` window.  
- Step 1: In the `Search Everywhere` window, type "Protected branches:" and click on the matching item.  
- Step 2: In the `settings` window, locate the `Protected branches:` field and delete its contents.

## TROUBLESHOOTING

Since GitHub and GitLab have branch protection features, you need to check the settings of each repository.

