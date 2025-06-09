const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

async function registerUser(req, res) {
    try {
        const {firstName, lastName, organization, email, password } = req.body;

        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Save user
        const newUser = new User({firstName, lastName, organization, email, password: hashedPassword})
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}