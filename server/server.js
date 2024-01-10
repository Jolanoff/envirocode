const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'envirodb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    const query = 'SELECT * FROM gebruiker WHERE email = ? AND wachtwoord = ?';
    db.query(query, [email, password], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            
            res.json({ success: true, message: 'Login successful' });
        } else {
            
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
