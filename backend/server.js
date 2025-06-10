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

    // Create transaction connection to database
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
        // Check if email is already in use
        const [existing] = await pool.query('SELECT * FROM user WHERE email = ?', [email]);
        if (existing.length > 0) return res.status(409).json({ message: 'Email already in use' });

        // Hash user's input password
        const hashedPassword = await bcrypt.hash(password, 10);

        // First, add company to database and get its companyId
        const [companyResult] = await pool.query('INSERT INTO company (name, type) VALUES (?, "CUSTOMER")', [
            [organization]
        ]);

        const orgId = companyResult.insertId;

        if (!orgId) {
            console.error('Company ID is missing');
            return res.status(500).json({ message: 'Failed to create company' });
        }

        // Add new user to database with found companyId and commit the transaction
        await pool.query('INSERT INTO user (firstName, lastName, email, companyId, password_hash) VALUES (?, ?, ?, ?, ?)', [
            firstName,
            lastName,
            email,
            orgId,
            hashedPassword
        ]);
        await connection.commit();
        res.status(201).json({ message: 'User registered'  });
    } catch (err) {
        // If error, rollback the transaction and don't persist data to database
        console.error('Registration error:', err);
        await connection.rollback();
        res.status(500).json({ message: 'Registration failed' });
    } finally {
        await connection.end();
        
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
