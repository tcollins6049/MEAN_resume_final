// models/user.js
const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: String,
  // CompanyLogo: String,
  location: String,
  position: String,
  startDate: Date,
  endDate: Date,
  description: String
}, { collection: 'experience' });

module.exports = mongoose.model('experience', experienceSchema);