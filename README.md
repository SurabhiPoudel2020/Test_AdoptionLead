# Adoptionlead Backend API

Adoptionlead Backend API The sample called Adoptionlead Backend API is created to GET the REST API from the users and POST it to the database and vice versa. Here, MongoDB is used for the database and NodeJS is used for the backend coding. 

The application is divided into three folders Model, Controller and Router. 

### Model  

A file named model.js is created inside Model folder. Model acts like the view layer for the user. 

Here, first we import the database library for MongoDB called mongoose. To import this, we create a constant called mongoose, 

const mongoose = require('mongoose') 

Now, Adding properties such as course_name, course_description, course_expiryDate to Course Model Post Schema ‘postCourseSchema’ method, 

const postCourseSchema = new mongoose.Schema({ 

    course_name:{ 

        type: String, 

        required:true 

    }, 

    course_description:{ 

       type: String, 

        required:true 

    }, 

    course_expiryDate: { 

        type: String, 

        required:true 

    } 

})  

OR 

Const postCourseSchema = new mongoose.Schema({ 

course_name: String, course_description: String, course_expiryDate: String}) 

Similar to function for posting user schema name " postUserSchema" 

 

Here, encrypting user password using pre hook for postUserSchema before saving it to the database. Also, importing bcrypt model for hashing password. 'Next' is used to allow the next route handler in line to handle the request. 

postUserSchema.pre('save', function (next) { 

    if (this.isModified('user_password')) { 

        bcrypt.hash(this.user_password, 10, (err, hash) => { 

            if (err) return next(err); 

            this.user_password = hash 

            next() 

      })   

    } 

}) 

 

Finally, model objects are created using 'mongoose' method and exported to the Controller using 'model.export' . Mongoose is the Object Data Modeling (ODM) library for MongoDB. 

 

### Controller 

A file named controller.js is created inside Controller folder. Controller acts as the main brain of the application. All the control functions are written here to separate from the route. 

The functions from Model are imported using destructure.  

const {PostSchema, PostUserSchema} = require("../models/model"); 

Then, creating call-back function for posting data to the database and getting data from the database. For example, 

exports.createPost = (req, res) => { 

    const post = new PostSchema(req.body) 

} 

 

### Route 

A file named route.js is created inside Route folder. Router route the code for HTTP verb such as GET, POST, PUT and DELETE. All the routing path and call back functions are called here from the controller 

### Package.json 

There are the lists of modules which can be install in the nodeJS for the easier coding.

-	Node Package Manager (NPM) is open-source free and the world's largest Software Library (Registry) module. To INSTALL npm TYPE, npm init

-	Dotenv is a lightweight npm package that automatically loads environment variables from a .env file into the process. To INSTALL dotenv TYPE, npm i dotenv

-	Nodemon module load code automatically without restarting the server. To INSTALL nodemon TYPE, npm i nodemon

-	Express is a back-end web application framework for Node. Js. It is designed for building web applications and APIs. To INSTALL express TYPE, npm i express

-	Morgan is a NodeJS and Express middleware to log HTTP requests and errors and simplifies the process. In NodeJS and Express, middleware is a function that has access to       the request and response lifecycle methods, and the next() method to continue logic in your Express server. To INSTALL morgan TYPE, npm i morgan

-	Body-parser is the NodeJS body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it. To INSTALL Body-parser     TYPE, npm i body-parser

-	Mongoose is a NodeJS based Object Data Modeling (ODM) library for MongoDB. To INSTALL mongoose TYPE, npm i mongoose

-	Express-Validator is a set of express. js middlewares that wraps validator. js validator and sanitizer functions. To INSTALL express-validator TYPE, npm i express-           validator
 

### Validator 

A file named index.js is created inside Validator folder. The Validator folder is created for placing the validation functions. 

### App.js  

App.js is the main file of the application where all modules are imported and initialize with the variables. Database connection, middleware and port are initialized. The URI for connecting your localhost MongoDB database is written in .env file which is called in app.js using mongoose, 

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}) 

 

### Request.rest 

Using built-in extension of visual studio code called 'REST API' for creating application program interface (API) that makes use of the HTTP requests to GET, PUT, POST and DELETE the data over WWW. This extension helps to get rid of external open-source platforms such as Postman. 

Just like postman for 'GET' request, we simply pass url after GET. Example; 

GET http://localhost:8080/ 

Here, '###' is used to separate the request. 

For 'POST' request, pass url along with the Content-Type as application/json. Passing dummy data inside the curly braces.  

 

 

 

 

 

 

 

 

 

 

 

 

 
