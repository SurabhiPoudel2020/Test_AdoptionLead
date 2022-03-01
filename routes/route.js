//import express function from the express package
const express = require("express")
const app = express()
app.use(express.json())

//import controller function from file controllers/controller
const controller = require("../controllers/controller")

const validator = require("../validator")

const router = express.Router()

//GET data from database with the url /getAllCourses. using call back function called getAllCourse from Controller
router.get("/getAllCourses", controller.getAllCourse)
//POST data to url /postCourse and validating using createPostValidator. using the call back function called postCourse from Controller
router.post("/postCourse", validator.createPostValidator, controller.postCourse)

router.get("/getAllUsers", controller.getAllUser)
router.post("/postUser", controller.postUser)

router.post("/postSubscribeCourse/:id", controller.postSubscribeCourse)
router.get("/getAllUserSubscribedCourse", controller.getAllUserSubscribedCourse)

/* router.get("/:id", (req, res) => {
    res.send(req.params.id)
}) */

//module is a variable that represents the current module and export is an object
module.exports = router


