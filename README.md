# Back4app

Deploy anything that runs in a container, from web apps and websites to APIs and backends, and get a live HTTPS address. No account needed to start.

## What you can ask

- "Deploy the web app we just built to Back4app."
- "My Back4app deployment failed. What went wrong?"
- "The last version broke my site. Roll it back on Back4app."

## How it works

- Your agent sends the folder to Back4app, which builds it with its Dockerfile, or detects the language when there is none, runs it in a container and gives it a public HTTPS address.
- No account is needed to start: the agent deploys on a temporary account that lasts 24 hours and gives you a claim link. Open it and sign in, or sign up for free, to keep the application. Or ask the agent to sign in to your Back4app account.
- Your agent follows the build, reads build and runtime logs, deploys new versions, sets environment variables and rolls back.
- Changes to a live application, like new environment variables or a rollback, are shown to you as a summary first and run only after you agree.
- The application must answer HTTP on the port in the `PORT` environment variable.

## What's inside

| Product | MCP server | Skill |
|---|---|---|
| **Web Deployment** | `back4app` (`https://mcp.back4app.com/mcp`) | `back4app-web-deployment` |

More Back4app products join the same MCP server and this plugin.

## Privacy

The plugin talks only to Back4app:

- **MCP server** (`https://mcp.back4app.com/mcp`): the code and settings your agent deploys, and requests for logs.
- **Back4app CLI** (`npx @back4app/cli`), used by the skill only when the MCP server isn't connected: it sends the folder to deploy to Back4app (`*.back4app.com`). It leaves out `.git`, `node_modules`, `.venv` and `.env` files.

Your code, environment variables and logs stay on Back4app while the application exists. A temporary account and its application are deleted 24 hours after creation unless you claim them.

See Back4app's [privacy policy](https://www.back4app.com/privacy.pdf) and [terms](https://www.back4app.com/terms-of-service.pdf).

## Install

**Claude (claude.ai, desktop, Cowork)**: add the Back4app plugin from the directory in Customize > Plugins, then connect it from the plugin's Connectors tab.

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

**ChatGPT**: add the Back4app connector as a custom connector with the address above.

## License

MIT
