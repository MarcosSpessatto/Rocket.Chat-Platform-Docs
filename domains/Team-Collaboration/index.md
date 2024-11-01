---
id: team-collaboration
name: Team Collaboration
version: 0.0.1
summary: |
  Domain that contains all the chat-engine service
owners:
    - core
services:
  - id: RoomService
    version: 0.0.1
badges:
    - content: Team Collaboration Domain
      backgroundColor: blue
      textColor: blue
---

## Overview

The Team Collaboration Domain encompasses all services and components related to handling financial transactions within the system. It is responsible for managing payments, transactions, billing, and financial records. The domain ensures secure, reliable, and efficient processing of all payment-related activities

## Vocabulary

<AccordionGroup>
  <Accordion title="Channel">
    A public room where anyone can join.
  </Accordion>
  <Accordion title="Group">
    A private room where users can only be invited.
  </Accordion>
  <Accordion title="Direct Message(DM)">
    A private room between 2 users.
  </Accordion>
  <Accordion title="Multiple Direct Message(DM)">
    A private room between N users.
  </Accordion>
   <Accordion title="Team">
    An organization that can hold multipe rooms inside of it
  </Accordion>
  <Accordion title="Owner">
    The user who created a room.
  </Accordion>
  <Accordion title="Member">
    The user who is part of the room.
  </Accordion>
   <Accordion title="Leader">
     The user who can invite users to a room.
  </Accordion>
  <Accordion title="Moderator">
    The user who can invite users to a room.
  </Accordion>
  <Accordion title="Guest">
    The user who can see a public room message history without log-in
  </Accordion>
  <Accordion title="Discussion">
     A group of messages inside a room grouped by a message
  </Accordion>
  <Accordion title="Thread">
      A logical organization for messages grouping them by the parent message
  </Accordion>
</AccordionGroup>

## Bounded context

<NodeGraph />