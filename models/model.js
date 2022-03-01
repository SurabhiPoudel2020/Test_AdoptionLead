//import mongoose
const mongoose = require('mongoose')
//import bcrypt for hash password
const bcrypt = require('bcrypt')

//Course Model Schema
const courseSchema = new mongoose.Schema({
    courseID: {
        type: mongoose.Schema.Types.ObjectId, ref: "courses",
    },
    courseName: {
        type: String,
        required: true,        
    },
    courseDescription:{
       type: String,
        required:true
    },
    coursePrice: {
        type: Number,
        default: 0
    },
    iconUrl: {
        type: String
    }
})

const userSubscribedCoursesSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: "users",
        required: true
    },
    courseID: {
        type: mongoose.Schema.Types.ObjectId, ref: "courses",
        required: true
    },
    
    subscribedDate: {
        type: Date,
        default: Date.now
    }
})

//User Model Schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true
    },
    userPassword: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required:true
    },
    userAddress: {
        type: String,
        required: true
    }
})

//hashing password before saving it to DB
userSchema.pre('save', function (next) {
    if (this.isModified('userPassword')) {
        bcrypt.hash(this.userPassword, 10, (err, hash) => {
            if (err) return next(err);
            this.userPassword = hash
            next()
      })  
    }
})

//exporting to Controller using mongoose method. Mongoose is the Object Data Modeling (ODM) library for MongoDB
//Creating model objects. Here 'course_xp' and 'user' are the name of collection in the database.
const CourseSchema = mongoose.model("courses", courseSchema)
const UserSchema = mongoose.model("users", userSchema)
const UserSubscribedCourses = mongoose.model("userSubscribedCourses", userSubscribedCoursesSchema)

//Exporting model objects
module.exports = {
   CourseSchema,  UserSchema, UserSubscribedCourses
}
