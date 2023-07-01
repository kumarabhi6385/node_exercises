# node_exercises

This repository is created for small task developed in Node for demonstartion purpose

we did below task in express_demo branch:

Routes are defined in separate module and registered in server.js.
In recent versions of Express, the body-parser middleware has been deprecated as it is included within the Express package itself. You no longer need to install or require body-parser separately. Instead, you can directly use the built-in middleware provided by Express.
for same entity topic, get, put and post apis are defined. No DB is integrated. data is comming from json file
Jest is used for testing and code coverage.
Static files are served for home page and page not found.
Use of private method in service class.
separation of application and server code.

#######################################################################################################

# Highlights

Tree like data structure is created using materialized path in mongo db.
CRUD operation is performed by APIs

# babel set up

npm i -D @babel/core @babel/cli @babel/node @babel/preset-env
Add new file .babelrc and paste below content:
{
"presets": [
"@babel/preset-env"
]
}

update npm start to:
nodemon ./src/server.js --exec babel-node

# esmodule is used.

require statements are replaced by import

# Register routes in modular approach

app is pased to routes file to register routes.

# Separation of Concern

Fetching data from business logic has been put in controller
and rotes files has only registration of function and APIs routes.

# Secure API

1. Implement User managment. use bycrypt for hashing password.
   npm i bcrypt jsonwebtoken
