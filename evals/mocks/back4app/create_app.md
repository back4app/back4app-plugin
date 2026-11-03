---
expect:
  name: string
---
{"app": {"id": "app_123", "name": "{{input.name}}"}, "deployment": {"id": "dep_1", "status": "QUEUED"}, "nextAction": "Call get_deployment with dep_1 every few seconds until READY or FAILED."}
