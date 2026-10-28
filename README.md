# Back4app plugin

Deploy apps, APIs and servers to [Back4app](https://www.back4app.com) from your AI agent. No Back4app account needed to start: the agent deploys on a temporary account and gives you a link to keep the app.

It contains:

- the **Back4app Web Deployment** MCP server, which builds and runs your code and gives it a public HTTPS address;
- the **back4app-web-deployment** skill, which tells the agent when to use it and how.

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

**Only the skill, in any agent that reads skills**

```bash
npx skills add back4app/back4app-plugin
```

**Only the MCP server, in every agent on this machine**

```bash
npx -y add-mcp https://mcp.containers-homolog.back4app.com/mcp -n back4app-web-deployment -g
```

**Claude.ai and ChatGPT**: add the connector from the app's directory, or as a custom connector with the address above.

## Then

Ask your agent: "Deploy this folder to Back4app."

## License

MIT
