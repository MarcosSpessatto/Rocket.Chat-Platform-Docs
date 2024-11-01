---
id: RoomService
version: 0.0.1
name: Room Service
summary: |
  Service that handles rooms operations
owners:
    - core
receives:
  - id: UserCreated
    version: 0.0.1
sends:
  - id: PublicRoomCreated  
    version: 0.0.1
  - id: PrivateRoomCreated  
    version: 0.0.1
  - id: DMRoomCreated  
    version: 0.0.1
  - id: PublicRoomDeleted  
    version: 0.0.1
repository:
  language: Typescript
  url: https://github.com/boyney123/pretend-shipping-service
---

## Overview

The Room Service is responsible for managing all rooms operations.

## Architecture diagram 

<NodeGraph />