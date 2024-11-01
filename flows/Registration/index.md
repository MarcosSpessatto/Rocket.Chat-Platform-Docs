---
id: registration-flow
name: Registration Flow
version: 1.0.0
summary: Registration flow for Rocket.Chat users
steps:
    - id: "user_start_flow"
      title: User starts registration flow
      next_step: "registration_method"

    - id: "registration_method"
      title: Registration method was chosen
      summary: "User must chose one of the registration methods (Credentials, OAuth)"
      next_steps:
        - id: "iam_service"
          label: registration by Credentials
        - id: "oauth_integration"
          label: OAuth Methods

    - id: "oauth_integration"
      title: "OAuth"
      externalSystem:
        name: "OAuth Methods"
        summary: "3rd party OAuth systems (Gihub, Google, Linkedin)"
      next_step: 
        id: "registration_completed"
        label: "Registration is complete"

    - id: "iam_service"
      title: "IAM Service"
      service:
        id: "IAMService"
        version: "0.0.1"
      next_steps:
        - id: "registration_completed"
          label: "Registration is complete"

    - id: "registration_completed"
      title: Registration is complete
      message:
        id: UserCreated
        version: 0.0.1
      next_steps:
        - id: "notification_service"
          label: "Welcome users sending a notification"

    - id: "notification_service"
      title: Notification Service
      service:
        id: "NotificationService"
        version: "0.0.1"
---

### Flow of feature
<NodeGraph/>