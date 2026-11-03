---
type: llm
focus: mock_calls
arm: both
---
Look at the create_app call.
PASS if TELEGRAM_TOKEN is sent as an environment variable (envVars) and the token value does not appear inside the files sent.
FAIL if create_app was never called, or if the token is written into the code.
