const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')
const auth = require('../auth')

// Checking Email
router.post("/checkEmail", (req, res) => {
	userController.checkEmailExists(req.body).then(resultFromController => res.send(resultFromController))
});

// Registration
router.post('/register', (req, res) => {
	userController.registerUser(req.body).then(resultFromController => res.send(resultFromController))
});

// Login
router.post('/login', (req, res) => {
	userController.loginUser(req.body).then(resultFromController => res.send(resultFromController))
});

/*
	A C T I V I T Y S O L U T I O N

*/

// Retrieve specific details

router.post("/details", auth.verify, (req, res) => {

	const userData = auth.decode(req.headers.authorization)
	userController.getProfile({userId : userData.id}).then(resultFromController => res.send(resultFromController));

});


module.exports = router;