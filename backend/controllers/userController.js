const userModel = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({error: 'Failed to fetch users'});
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.getById(id);
        if (!user) {
            return res.status(404).json({error : `User ${id} not found`});
        }
        res.json(user);
    } catch (err) {
        console.error('Error creating user:', err);
        console.error('Full error:', JSON.stringify(err, Object.getOwnPropertyNames(err)));
        res.status(500).json({error: 'Failed to fetch user'});
    }
};

exports.createUser = async (req, res) => {
    const {name, email, companyId} = req.body;
    try {
        const newUser = await userModel.create({name, email, companyId});
        res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        console.error('Full error:', JSON.stringify(err, Object.getOwnPropertyNames(err)));
        res.status(500).json({error: 'Failed to create user'});
    }
};