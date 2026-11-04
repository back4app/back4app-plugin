---
description: A person with no Back4app account, connected on a temporary account chosen with "Continue without an account", asks to deploy a small Express API. No terminal, only the MCP server.
max_turns: 20
allowed_tools: [Skill]
tags: [deploy]
---

Deploy this API to Back4app so I get a public link. I don't have a Back4app account.

package.json:
```json
{ "name": "hello-api", "version": "1.0.0", "main": "server.js", "scripts": { "start": "node server.js" }, "dependencies": { "express": "^4.19.2" } }
```

server.js:
```js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ hello: 'world' }));
app.listen(process.env.PORT || 3000);
```
