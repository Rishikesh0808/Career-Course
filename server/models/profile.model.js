const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  phone: { type: String, match: /^[0-9]{10,15}$/ },
  education: [
    {
      degree: { type: String, required: true },
      institution: { type: String, required: true },
      year: { type: Number }
    }
  ],
  experience: [
    {
      jobTitle: { type: String },
      company: { type: String },
      duration: { type: String },
      responsibilities: { type: String }
    }
  ],
  skills: [{ type: String, trim: true }],
  resume: { type: String }
});

const profile=mongoose.model('profile',applicantSchema);
module.exports = profile;
