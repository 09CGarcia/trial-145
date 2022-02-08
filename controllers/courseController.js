const Course = require('../models/Course');

// Add Course
module.exports.addCourse = (reqBody) => {
	let newCourse = new Course({
		name : reqBody.name,
		description : reqBody.description,
		price : reqBody.price
	});

	return newCourse.save().then((course, error) => {
		if(error){
			return false
		} else {
			return `Added ${course}`
		}
	})
}