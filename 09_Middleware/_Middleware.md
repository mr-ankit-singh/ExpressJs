#__ Middleware __#
    - Middleware can process request objects multiple times before the server works for that request.
    - Middleware can be used to add logging and authentication functionality.
    - Middleware improves client-side rendering performance.
    - Middleware is used for setting some specific HTTP headers.
    - Middleware helps for Optimization and better performance.

Middleware functions can perform the following tasks:
    - Execute any code.
    - Make changes to the request and the response objects.
    - End the request-response cycle.
    - Call the next middleware function in the stack.

An Express application can use the following types of middleware:
    - Application-level middleware
    - Router-level middleware
    - Error-handling middleware
    - Built-in middleware
        a. express.static() : serves static assets such as HTML files, images, and so on.
        b. express.json() : parses incoming requests with JSON payloads.
        c. express.urlencoded() : parses incoming requests with URL-encoded payloads.
    - Third-party middleware