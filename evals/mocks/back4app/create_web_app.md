---
expect:
  name: string
---
{"app": {"id": "app_123", "name": "{{input.name}}"}, "deployment": {"id": "dep_1", "status": "QUEUED"}, "account": {"kind": "temporary", "expiresAt": "2026-11-05T15:00:00Z", "expiresSoon": false, "claimUrl": "https://containers.back4app.com/claim/tmp_7f3a9c", "appOnlineMinutes": 60}, "nextAction": "Call get_deployment with dep_1 every few seconds until READY or FAILED."}

Tell the person: This app belongs to a temporary account that expires at 2026-11-05 15:00 UTC. When it expires, the app and its code are deleted. To keep the app, the person opens https://containers.back4app.com/claim/tmp_7f3a9c and signs in to Back4App: it moves to their account.
