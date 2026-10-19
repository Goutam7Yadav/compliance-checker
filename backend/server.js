const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend running with MySQL!' });
});

// Example: fetch all users
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));

// Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add a new product
app.post('/api/products', (req, res) => {
  const { name, label_text, compliance_status } = req.body;
  db.query(
    'INSERT INTO products (name, label_text, compliance_status) VALUES (?, ?, ?)',
    [name, label_text, compliance_status],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, label_text, compliance_status });
    }
  );
});

// Register
app.post('/api/register', (req, res) => {
  const { fullName, username, password, role } = req.body;
  db.query(
    'INSERT INTO users (full_name, username, password, role) VALUES (?, ?, ?, ?)',
    [fullName, username, password, role],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, fullName, username, role });
    }
  );
});

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

      const user = results[0];
      res.json({ id: user.id, fullName: user.full_name, username: user.username, role: user.role });
    }
  );
});


