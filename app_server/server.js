const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Experience = require('./models/experience');
const Education = require('./models/education');
const Projects = require('./models/projects');
const Volunteer = require('./models/volunteer')

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/resume_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/experience', async (req, res) => {
  try {
    const experience = await Experience.find();
    const volunteer = await Volunteer.find();

    const returnObj = [experience, volunteer];
    console.log("app.get/experience - returnObj: " + returnObj.e + " " + returnObj.v);

    // Send response with both education and volunteer data
    res.json(returnObj);
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: err.message });
  }
});

app.get('/education', async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/volunteer', async (req, res) => {
  try {
    const volunteer = await Volunteer.find();
    res.json(volunteer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/projects', async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to fetch project details by ID
app.get('/projects/:_id', async (req, res) => {
  try {
    const project = await Projects.findById(req.params._id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.post('/users', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    contactInfo: req.body.contactInfo
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the MEAN stack application!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


