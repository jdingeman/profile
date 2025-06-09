const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/userRoutes');
app.use('/api/users', usersRoutes);

app.post('/api/registerNewAccount', async (req, res) => {
    const {firstName, lastName, email, organization, password } = req.body;

    try {
        const [existing] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        if (existing.length > 0) return res.status(409).json({ message: 'Email already in use' });

        console.log('Email not already in use');

        const hashedPassword = await bcrypt.hash(password, 10);

        console.log('Password encrypted:', hashedPassword);

        const [companyResult] = await pool.query('INSERT INTO company (name, type) VALUES (?, "CUSTOMER")', [
            [organization]
        ]);

        console.log('Company insert result:', companyResult);

        const orgId = companyResult.insertId;

        if (!orgId) {
            console.error('Company ID is missing');
            return res.status(500).json({ message: 'Failed to create company' });
        }

        await pool.query('INSERT INTO user (firstName, lastName, email, companyId, password_hash) VALUES (?, ?, ?, ?, ?)', [
            firstName,
            lastName,
            email,
            orgId,
            hashedPassword
        ]);

        res.status(201).json({ message: 'User registered'  });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Registration failed' });
    }
});

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
