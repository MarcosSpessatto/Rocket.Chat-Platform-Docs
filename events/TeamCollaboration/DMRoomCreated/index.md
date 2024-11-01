---
id: DMRoomCreated
name: Direct Message Room Created
version: 0.0.1
summary: |
  Indicates that a direct message room was created
owners:
    - core
badges:
    - content: Recently created!
      backgroundColor: green
      textColor: green
    - content: Channel:Nats
      backgroundColor: yellow
      textColor: yellow
schemaPath: 'schema.json'
---

## Overview

The `Direct Message Room Created` event is triggered whenever a new direct message room was created.

## Architecture diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Payload example

Event example you may see being published.

```json title="Payload example"
{
  "_id": "cp9hWvhg8GSvuZ9os",
  "name": "General",
  "displayName": "UserA"
}
```
