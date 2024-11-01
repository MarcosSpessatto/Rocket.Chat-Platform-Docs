---
id: PrivateRoomCreated
name: Private Room Created
version: 0.0.1
summary: |
  Indicates that a private room was created
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

The `Private Room Created` event is triggered whenever a new private room was created.

## Architecture diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Payload example

Event example you may see being published.

```json title="Payload example"
{
  "_id": "cp9hWvhg8GSvuZ9os",
  "name": "Private Room",
  "displayName": "Private Room"
}
```