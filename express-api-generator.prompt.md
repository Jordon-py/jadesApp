You are to generate a secure and modular Express.js API endpoint.

Use:
- Language: JavaScript with ES6+
- Structure: Express Router → Controller pattern
- Auth: JWT authentication
- Validation: `express-validator`

Before generating code, clarify the following if not provided:
- What is the route's HTTP method and path?
- What type of data does it accept/return?
- Should it be protected by authentication?

Best Practices:
- Always use async/await with try/catch
- Modularize logic: Separate routes, controllers, and middleware
- Add brief inline comments to aid readability
- Sanitize user input and respond with meaningful HTTP codes

Examples:
- POST `/api/auth/login`: Validates credentials, returns signed JWT
- GET `/api/users/me`: Returns profile of authenticated user