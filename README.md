<img src="assets/back4app.png" alt="Back4app" width="96">

# Back4app plugin

Back4app for AI agents. One plugin gives your agent Back4app's products: the Back4app MCP server, and a skill per product that tells the agent when to use it and how.

| Product | What your agent can do | MCP server | Skill |
|---|---|---|---|
| **Web Deployment** | Deploy anything that runs in a container, from web apps and websites to APIs and backends, and get a live HTTPS address. Follow builds, read build and runtime logs, deploy new versions, set environment variables, and roll back. Start without an account and keep your deployment with a claim link, or sign in to use your Back4app account. | `back4app` | `back4app-web-deployment` |

More Back4app products join the same MCP server and this plugin.

## Install

**Claude Code**

```text
/plugin marketplace add back4app/back4app-plugin
/plugin install back4app@back4app
```

**Claude Code, Cursor, Codex, GitHub Copilot CLI, VS Code, Grok Build and Kimi Code, in one command**

```bash
npx plugins add back4app/back4app-plugin
```

**Gemini CLI**

```bash
gemini extensions install https://github.com/back4app/back4app-plugin
```

**Antigravity**

```bash
agy plugin install https://github.com/back4app/back4app-plugin
```

**Only the skills, in any agent that reads skills**

```bash
npx skills add back4app/back4app-plugin
```

**Only the MCP server, in every agent on this machine**

```bash
npx -y add-mcp https://mcp.back4app.com/mcp -n back4app -g
```

**Claude.ai and ChatGPT**: add the Back4app connector from the app's directory, or as a custom connector with the address above.

## Then

Ask your agent, for example: "Deploy this folder to Back4app."

## Privacy

The plugin talks only to Back4app:

- **MCP server** (`https://mcp.back4app.com/mcp`): the code and settings your agent deploys, and requests for logs.
- **Back4app CLI** (`npx @back4app/cli`), used by the skill only when the MCP server isn't connected: it sends the folder to deploy to Back4app (`*.back4app.com`). It leaves out `.git`, `node_modules`, `.venv` and `.env` files.

Your code, environment variables and logs stay on Back4app while the application exists. A temporary account and its application are deleted 24 hours after creation unless you claim them.

See Back4app's [privacy policy](https://www.back4app.com/privacy.pdf) and [terms](https://www.back4app.com/terms-of-service.pdf).

## License

MIT
