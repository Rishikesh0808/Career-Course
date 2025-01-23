const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Job Vacancy Schema
const jobVacancySchema = new Schema({
  jobTitle: {
    type: String,
    // required: true,  // Job title is required
    // trim: true,      // Remove extra spaces around the string
  },
  jobDescription: {
    type: String,
    // required: true,  // Job description is required
  },
  jobType: {
    type: String,
    // required: true,  // Job type is required (e.g., full-time, part-time)
     // Restrict job type to predefined values
  },
  location: {
    type: String,
    // required: true,  // Location is required
    // trim: true,      // Remove extra spaces around the string
  },
  salaryRange: {
    type: String,   // Store as a string (e.g., "80,000 - 100,000 USD")
    // required: true, // Salary range is required
  },
  postedDate: {
    type: Date,
    // default: Date.now, // Default value is the current date
  },
  ApplicantList:{
    type:Array
  }
});

// Create a model based on the schema
const JobVacancy = mongoose.model('JobVacancy', jobVacancySchema);

// Export the model for use in other parts of your application
module.exports = JobVacancy;
