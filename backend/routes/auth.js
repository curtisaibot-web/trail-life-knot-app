const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Make sure to npm install bcrypt
// const db = require('../models/db');
const { JWT_SECRET } = require('../middleware/auth');

// POST: Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role = 'Scout' } = req.body;
        
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Mock DB Insert
        // const result = await db.query(
        //     'INSERT INTO users (username, email, password_hash, role) VALUES ($1, $2, $3, $4) RETURNING id, username, role',
        //     [username, email, hashedPassword, role]
        // );
        // const newUser = result.rows[0];

        const newUser = { id: 5, username, role }; // Mock response

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error during registration' });
    }
});

// POST: Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Mock DB Lookup
        // const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        // const user = result.rows[0];
        
        const user = { id: 1, email: 'curtis@example.com', password_hash: await bcrypt.hash('password123', 10), role: 'Scout', username: 'CurtisA' }; // Mock

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' } // Token valid for 7 days
        );

        res.json({ message: 'Login successful', token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error during login' });
    }
});

module.exports = router;
