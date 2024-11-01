---
id: iam
name: Identity and Access Management
version: 0.0.1
summary: |
  Domain that contains authentication and authorization services.
owners:
    - core
services:
    - id: IAMService
      version: 0.0.1
badges:
    - content: IAM Domain
      backgroundColor: blue
      textColor: blue
---

## Overview

The IAM Domain encompasses all services and components related to handling authentication and authorization.

## Vocabulary

<AccordionGroup>
  <Accordion title="User">
   The user who access Rocket.Chat
  </Accordion>
   <Accordion title="Permission">
     An specific action that an user can execute
  </Accordion>
  <Accordion title="Role">
     A role (admin, user, omnichannel-agent, etc) a user can belong to
  </Accordion>
</AccordionGroup>

## Bounded context

<NodeGraph />

