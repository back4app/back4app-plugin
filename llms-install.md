# Installing the Back4app MCP server

The Back4app MCP server is remote: there is nothing to clone, build or run locally, and no API key to set.

- URL: `https://mcp.back4app.com/mcp`
- Transport: Streamable HTTP
- Authentication: none to start. The server makes a temporary account when the person asks to deploy. Signing in to a Back4app account is OAuth 2.1, started by the server's `sign_in` tool.

## Cline

Add this entry to `cline_mcp_settings.json` (MCP Servers > Configure MCP Servers):

```json
{
  "mcpServers": {
    "back4app": {
      "type": "streamableHttp",
      "url": "https://mcp.back4app.com/mcp",
      "disabled": false
    }
  }
}
```

Then check that the `back4app` server shows its tools, among them `whoami`, `create_app` and `get_deployment`.

## Check it works

Call `whoami`. With no account connected it answers `signedIn: false`, which is expected: ask "Deploy this folder to Back4app" and the server creates a temporary account, deploys, and returns the public HTTPS address and a claim link.

## Other agents

See the README for Claude Code, Cursor, Codex, Gemini CLI and the other agents. The `skills/back4app-web-deployment` skill teaches the agent when and how to deploy; it is optional for Cline.
