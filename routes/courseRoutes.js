const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController')

router.post('/', (req, res) => {
	courseController.addCourse(req.body).then(resultFromController => res.send(resultFromController))
});

module.exports = router;