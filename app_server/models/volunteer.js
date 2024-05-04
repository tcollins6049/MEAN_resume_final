// models/user.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    company: String,
    // CompanyLogo: String,
    location: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String,
    images: [String]
});

module.exports = mongoose.model('Volunteer', volunteerSchema);