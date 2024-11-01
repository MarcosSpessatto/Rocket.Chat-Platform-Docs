---
id: api-gateway
name: API Gateway
version: 0.0.1
summary: |
  Domain that contains the API Gateway
owners:
    - core
services:
    - id: APIGatewayService
      version: 0.0.1
badges:
    - content: API Gateway Domain
      backgroundColor: blue
      textColor: blue
---

## Overview

The API Gateway serves as a unified entry point for a microservices architecture, simplifying client interactions. It handles routing requests to the correct microservice, enforces security measures, manages rate limits, caches frequently accessed data, and monitors API usage. By centralizing these functions, an API Gateway enhances the overall reliability, scalability, and security of the microservices architecture.

### Registration processing flow
Documented flow when a user starts the registration flow within the API Gateway

<Flow id="registration-flow" version="1.0.0" includeKey={false} />
