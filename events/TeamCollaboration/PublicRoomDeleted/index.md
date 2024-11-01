---
id: PublicRoomDeleted
name: Public Room Deleted
version: 0.0.1
summary: |
  Indicates that a public room was deleted
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

The `Public Room Deleted` event is triggered whenever a new public room was deleted.

## Architecture diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Payload example

Event example you may see being published.

```json title="Payload example"
{
  "_id": "cp9hWvhg8GSvuZ9os",
  "name": "General",
  "displayName": "General"
}
```
