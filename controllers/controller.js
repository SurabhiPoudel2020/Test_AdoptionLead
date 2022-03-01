//export models functions
const {CourseSchema, UserSchema, UserSubscribedCourses} = require("../models/model")

//getting all courses call back function
exports.getAllCourse = (req,res) => {
	const posts = CourseSchema.find()
		.then((posts) => {
		res.json({posts})
	})
	.catch(err => console.log(err))
}

//posting a course call back function
exports.postCourse = (req, res) => {
	const post = new CourseSchema(req.body)
	post.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
				})
			}
			res.status(200).json({
				post: result
			})
		})
}

//getting all users call back function
exports.getAllUser = (req, res) => {
	const user = UserSchema.find()
		.then((user) => {
		res.json({user})
	})
	.catch(err => console.log(err))
}

//posting a user call back function
exports.postUser = (req, res) => {
	const userpost = new UserSchema(req.body )	
		userpost.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
				})
			}
			res.status(200).json({
				userpost: result
			})
		})	
}

//posting user subscribing a course
exports.postSubscribeCourse = async (req, res) => {	
	const subscribeuser = new UserSubscribedCourses({
		courseID: req.body.courseID,
		userID: req.params.id
	})
	try {
		const newSubscribedUser = await subscribeuser.save()
    res.json(newSubscribedUser)
	} catch (err) {
		 res.status(400).json({ message: "Invalid UserID or CourseID" })
	}
}

//getting all user subscribe course call back function
exports.getAllUserSubscribedCourse = async (req, res) => {
	try {
    const userSubscribedCourses = await UserSubscribedCourses.find()
    res.json(userSubscribedCourses)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

/* exports.getUserID = (req, res) => {
	
	res.send(req.params.id)
} */

//creating postUser call back function
/* exports.postUser = async (req, res) => {
	try {
		const hashedPassword = await Post.hash(req.body.password, 10)
		console.log(hashedPassword);
		const user = { name: req.body.name, password: hashedPassword }
		users.push(user)
		res.status(201).send()
	} catch {
		res.status(500).send()
	}
}; */

//getting usercourse with name Google and redirecting it to the specified link
/* exports.getUserCourses = async (req, res, next) => {	
	try {
		const userCourses = await UserSubscribedCourses
			.findOne({ 'userCourses': 'Google' });
		if (userCourses.userCourses == 'Google') {
			res.redirect('https://www.google.com')
		}
		console.log(userCourses.userCourses)
		next()
  	} catch (err) {
		res.status(500).json({ message: err.message })
		console.log("Google is not connected")
  }
} */

/* exports.getUserCourses = (id, callback) => {
	UserSubscribedCourses.find({userID:id},callback).populate({path:"courseID", select:['courseName']})
} */

/* const coursejoin = UserSchema.aggregate([
	{
		$lookup: {
			from: "Courses",
			localField: "_id",
			foreignField: "_id",
			as: "coursejoin"
		}		
	}
])*/


/* exports.postUserCourses = (req, res) => {
	const userCoursesPost = new UserSubscribedCourses(req.body )	
		userCoursesPost.save((err, result) => {
			if (err) {
				return res.status(400).json({
					error: err
				})
			}
			res.status(200).json({
				userCoursesPost: result
			})
		})	
} */


/* async function getUserByID(req, res, next) {
  let user
  try {
    user = await UserSchema.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find users' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
} */