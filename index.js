const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes')

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect("mongodb+srv://CGarcia:admin145@cluster0.3t9w2.mongodb.net/course-booking?retryWrites=true&w=majority", 
	{
		useNewUrlParser : true,
		useUnifiedTopology: true
	}
);

let db = mongoose.connection

	db.on('error', () => console.error.bind(console, 'error'))
	db.once('open', () => console.log('Successfully connected to MongoDB'))

app.use('/users', userRoutes);
app.use('/courses', courseRoutes);

app.listen(port, () => console.log(`Server is running at port ${port}`))