---
type: llm
---
PASS if the reply says the app crashed at start because the module 'dotenv' is missing, and suggests adding dotenv to the dependencies in package.json (or removing the require) and deploying again.
FAIL if it blames the port, the build, or Back4app, or gives no concrete fix.
