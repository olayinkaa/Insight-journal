# Installation
```sh
brew install --cask claude-code
```

# Command
```sh
/init 
/model
/usage
/permissions
```

#
```sh
/permissions
# specifier
Bash(git init)
Bash(git switch:*)
```

## custom commands
```md
---
description: create a commit message by analyzing git diffs
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

## Context:
- Current git status: !`git status`
- Current git diff: ! `git diff --staged`

## Your task:
Analyze above staged git changes and create a commit message.
Use present tense and explain "why" something has changed, not just "what" has changed

## Run these commands
```bash
git status
git diff --staged
```

## Commit types with emojis:
Only use the following emojis
- `feat:` - New feature
- `fix` - Bug fix
- `refactoring` - Refactoring code
- `docs` - Documentation
- `style` - Styling/formatting
- `test` - Tests
- `perf` - Performance
## Format:
use the following format for making the commit message:
```
<emoji> <type>: <concise_description> <optional_body_explaining_why>
```

## Output
1. Show summary of changes currently staged
2. Propose commit message with appropriate emoji
3. Ask for confirmation before committing
   
DO NOT auto-commit - wait for user approval, and only commit if the user says so.


```

## Command Arguments
```md
---
description: Create a UI component using TDD (test-driven development)
allowed-tools: Read, Write, Edit, Glob, Bash(npm test:*)
argument-hit: "[Brief component description]"
---

## User Input

The user has provided information about the component to make: **$ARGUMENTS**

## Do This First

```

## MCP SERVER
Tip: To make your Figma MCP server available across all projects, install it with the --scope user flag: claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp

By default, Claude Code uses local scope, so the server is only available in the current project. Applying the user scope means you don't have to reinstall the server for each of your projects.
```sh
# <!-- figma -->
claude mcp add --scope user --transport http figma https://mcp.figma.com/mcp
# <!-- local figma desktop -->
claude mcp add --transport http figma-desktop http://127.0.0.1:3845/mcp
claude mcp remove figma-desktop
claude mcp remove figma

```