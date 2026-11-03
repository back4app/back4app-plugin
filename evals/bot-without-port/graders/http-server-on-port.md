---
type: llm
focus: mock_calls
arm: both
---
Look at the files sent in the create_web_app call.
PASS if the code sent includes an HTTP server that listens on process.env.PORT (for example http.createServer(...).listen(process.env.PORT)) alongside the bot.
FAIL if create_web_app was never called, or if the code sent has no server listening on process.env.PORT.
