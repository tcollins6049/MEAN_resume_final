// models/user.js
const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  University: String,
  // UniversityLogo: String = "",
  degreeType: String,
  startDate: Date,
  endDate: Date,
  concentration: String,
  gpa: String,
  description: String
}, { collection: 'education' });

module.exports = mongoose.model('Edu', educationSchema);
