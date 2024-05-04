// models/user.js
const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  proj_name: String,
  // Organization: String,
  location: String,
  startDate: Date,
  endDate: Date,
  description: String,
  images: [String]
}, { collection: 'projects' });

module.exports = mongoose.model('projects', projectsSchema);
