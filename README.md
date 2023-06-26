# node_exercises

This repository is created for small task developed in Node for demonstartion purpose.
Features:

1. Routes are defined in separate module and registered in server.js.
2. In recent versions of Express, the body-parser middleware has been deprecated as it is included within the Express package itself. You no longer need to install or require body-parser separately. Instead, you can directly use the built-in middleware provided by Express.
3. for same entity topic, get, put and post apis are defined. No DB is integrated. data is comming from json file
4. Jest is used for testing and code coverage.
5. Static files are served for home page and page not found.
6. Use of private method in service class.
7. separation of application and server code.

In this branch api are created using route. body parser is used to convert request data into objects before any update operation.
