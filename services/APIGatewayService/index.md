---
id: APIGatewayService
version: 0.0.1
name: API Gateway
summary: |
  Service that handles the authentication and authorization
owners:
    - core
sends:
  - id: CreateOmnichannelRoom
    version: 0.0.1
  - id: DeleteOmnichannelRoom
    version: 0.0.1
  - id: GetAllOmnichannelRooms
    version: 0.0.1
repository:
  language: Typescript
  url: https://github.com/boyney123/pretend-shipping-service
---

## Overview

The Identity and Access Management (IAM) service provides a centralized platform for managing digital identities and controlling access to resources. It offers features like user authentication, authorization, and single sign-on, allowing secure and efficient access to Rocket.Chat. IAM solutions often include role-based access control, multi-factor authentication, and user provisioning and de-provisioning, ensuring that only authorized individuals can access the appropriate resources and preventing unauthorized access.

## Architecture diagram

<NodeGraph />