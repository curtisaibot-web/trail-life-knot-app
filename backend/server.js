const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/knots', require('./routes/knots'));
app.use('/api/streaks', require('./routes/streaks'));
app.use('/api/leaderboard', require('./routes/leaderboard'));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'Trail Knotz Backend is running!' });
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Trail Knotz Backend running on port ${PORT}`);
});
