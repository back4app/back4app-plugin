---
description: A worker with no web server. The skill says it needs a small HTTP server on PORT or the health check fails.
max_turns: 20
allowed_tools: [Skill]
tags: [deploy, port]
---

Put my Telegram bot online on Back4app. No account yet. The bot token goes in the TELEGRAM_TOKEN environment variable.

package.json:
```json
{ "name": "echo-bot", "version": "1.0.0", "main": "bot.js", "scripts": { "start": "node bot.js" }, "dependencies": { "node-telegram-bot-api": "^0.66.0" } }
```

bot.js:
```js
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
bot.on('message', (msg) => bot.sendMessage(msg.chat.id, msg.text));
```
