const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_trail_life_key_prototype';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid or expired token.' });
        
        req.user = user; // Attach user payload to request object
        next();
    });
};

// Middleware to check if user is a Troop Leader (Admin)
const requireTroopLeader = (req, res, next) => {
    if (req.user && req.user.role === 'Leader') {
        next();
    } else {
        res.status(403).json({ error: 'Access denied. Troop Leader privileges required.' });
    }
};

module.exports = {
    authenticateToken,
    requireTroopLeader,
    JWT_SECRET
};
