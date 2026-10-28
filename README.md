# Back4app plugin

Back4app for AI agents. One plugin gives your agent Back4app's products: the Back4app MCP server, and a skill per product that tells the agent when to use it and how.

| Product | What your agent can do | MCP server | Skill |
|---|---|---|---|
| **Web Deployment** | Deploy apps, APIs and servers from a folder of code and get a public HTTPS address. No Back4app account needed to start: the agent deploys on a temporary account and gives you a link to keep the app. | `back4app` | `back4app-web-deployment` |

More Back4app products join the same MCP server and this plugin.

## Install

**Claude Code**

```text
/plugin marketplace add back4app/back4app-plugin
/plugin install back4app@back4app
```

**Claude Code, Cursor, Codex, GitHub Copilot CLI, VS Code and others, in one command**

```bash
npx plugins add back4app/back4app-plugin
```

**Gemini CLI**

```bash
gemini extensions install https://github.com/back4app/back4app-plugin
```

**Only the skills, in any agent that reads skills**

```bash
npx skills add back4app/back4app-plugin
```

**Only the MCP server, in every agent on this machine**

```bash
npx -y add-mcp https://mcp.containers-homolog.back4app.com/mcp -n back4app -g
```

**Claude.ai and ChatGPT**: add the Back4app connector from the app's directory, or as a custom connector with the address above.

## Then

Ask your agent, for example: "Deploy this folder to Back4app."

## License

MIT
