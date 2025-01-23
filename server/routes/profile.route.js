const profile = require('../models/profile.model'); // Ensure lowercase for imported modules
const router = require('express').Router();

// GET route to fetch profiles by name
router.get('/get/:name', async (req, res) => {
    try {
        const profiles = await profile.find({ name: req.params.name }); // Correct variable name
        res.status(200).json(profiles); // Use status 200 for successful retrieval
    } catch (error) {
        console.error("Error fetching profiles:", error); // Log error for debugging
        res.status(400).json({ message: "Invalid Request", error: error.message });
    }
});

// POST route to create a new profile
router.post('/post', async (req, res) => {
    try {
        const newProfile = new profile(req.body); // Correct variable name
        await newProfile.save();
        res.status(201).json(newProfile); // Use status 201 for successful creation
    } catch (error) {
        console.error("Error creating profile:", error); // Log error for debugging
        res.status(400).json({ message: "Invalid Request", error: error.message });
    }
});

module.exports = router;
