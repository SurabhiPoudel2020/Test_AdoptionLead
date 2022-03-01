exports.createPostValidator = (req, res, next) => {
    //course_name
    req.check('courseName', "Write the Course Name").notEmpty()
    req.check('courseName', "Course Name must be between 4 to 150 characters").isLength({
        min: 5,
        max: 150
    });
    //course_description
    req.check('courseDescription', "Write the Course Description").notEmpty()
    req.check('courseDescription', "Course Description must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });  
    //check for errors
    const errors = req.validationErrors()
    //if error show the first one as they happen
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    //proceed to next middleware
    next();
}
