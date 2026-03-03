import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend running' });
});

// Example login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};
  // Dummy check – replace with real auth later
  if (email && password) {
    return res.json({ success: true, token: 'demo-token', email });
  }
  return res.status(400).json({ success: false, message: 'Missing fields' });
});

// Example register route
app.post('/api/register', (req, res) => {
  const { hospitalName, email, password } = req.body || {};
  if (hospitalName && email && password) {
    return res.json({
      success: true,
      message: 'Demo register success (not saved anywhere)',
    });
  }
  return res.status(400).json({ success: false, message: 'Missing fields' });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
