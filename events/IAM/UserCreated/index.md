---
id: UserCreated
name: User created
version: 0.0.1
summary: |
  Indicates that a new user has been created
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

The `User Created` event is triggered whenever a new user is registered within the application using the registration method, this does not apply to Omnichannel visitors.

## Architecture diagram

<NodeGraph />

<SchemaViewer file="schema.json" title="JSON Schema" maxHeight="500" />

## Payload example

Event example you may see being published.

```json title="Payload example"
{
  "_id": "cp9hWvhg8GSvuZ9os",
  "name": "John Doe",
  "email": "john.doe@rocket.chat"
}
```
