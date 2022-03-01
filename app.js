//import express and initialize to the variable called express
const express = require("express");
const app = express();
//import body parser
const bodyParser = require("body-parser");
//import mongoose
const mongoose = require("mongoose");
//import morgan
const morgan = require("morgan");
//import Express validator for POST request validator
const expressValidator = require("express-validator");
//import bcrypt for securing the user password

const jsonwebtoken = require("jsonwebtoken")
//load env variables
const dotenv = require("dotenv");
dotenv.config();

//Database Connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
	.then(() => console.log("DB Connected"));
//OR
//mongoose.connect('mongodb://localhost:27017/adoptionlead_db').then(() => {
//	console.log('Mongodb connected...');
//})

mongoose.connection.on("error", err => {
	console.log(`DB connection error: ${err.message}`);
});

//bring in routes
const postRoutes = require("./routes/route");

//creating you own middleware
//const myOwnMiddleware = (req, res, next) =>{
//	console.log("middleware applied");
//	next();
//};

//middleware

app.use(morgan("dev"));
//app.use(myOwnMiddleware);
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
app.use(express.json());

//listening to the port 8080
const port = process.env.PORT ||8080

app.listen(port, () => {
	console.log(`A Node JS API is listenting on port: ${port}`);
});

