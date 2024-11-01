---
id: GetAllOmnichannelRooms
name: Get All Omnichannel Rooms
version: 0.0.1
summary: |
  Command that will retrive all omnichannel rooms
owners:
    - core
badges:
    - content: RPC
      backgroundColor: green
      textColor: green
schemaPath: 'schema.json'
---

## Overview

The GetAllOmnichannelRooms command is issued to retrieve the list of Omnichannel rooms.

## Architecture diagram

<NodeGraph/>

## Input Payload example
void

## Output Payload example

```json title="Output Payload example"
{
        "_id": "3f3k6Xo7rrHCifQhR",
        "membersCounter": 2,
        "msgsCounter": 1,
        "type": "l",
        "name": "room Name",
        "owner": {
          "_id": "3f3k6Xo7rghuffifQhR",
          "username": "marcos.defendi"
        },
        "displayName": "My room Name",
        "membersIds": ["3f3k6Xo7rrHCifQhR", "6QTjB8C5SEqhmz4ni"],
        "createdAt": "2024-07-04T14:48:00Z",
}

```

