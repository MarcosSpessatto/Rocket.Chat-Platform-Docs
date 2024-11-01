---
id: NotificationService
version: 0.0.1
name: Notification Service
summary: |
  Service that handles notifications (email, push, etc) to users
owners:
    - core
receives:
  - id: UserCreated
    version: 0.0.1
repository:
  language: Typescript
  url: https://github.com/boyney123/pretend-shipping-service
---

## Overview

The Notification Service is responsible for managing and delivering notifications to users and other services. It supports various notification channels such as email, SMS, push notifications, and in-app notifications. The service ensures reliable and timely delivery of messages and integrates with other services to trigger notifications based on specific events.

## Architecture diagram

<NodeGraph />
