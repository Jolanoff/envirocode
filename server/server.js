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
        return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const query = 'SELECT * FROM gebruiker WHERE email = ? AND wachtwoord = ?';
    db.query(query, [email, password], (err, result) => {
        if (err) {
            // Handle the error in a way that doesn't expose sensitive information
            return res.status(500).json({ success: false, message: 'An error occurred during login' });
        }

        if (result.length > 0) {
            // User authenticated
            // Remove the password from the user object before sending it to the frontend
            const { wachtwoord, ...userWithoutPassword } = result[0];
            res.json({ success: true, message: 'Login successful', user: userWithoutPassword });
        } else {
            // Invalid credentials
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
});

// register endpoint
app.post('/register', (req, res) => {
    const { voornaam, achternaam, email, password, key } = req.body;
    
    // Check if all fields are provided
    if (!voornaam || !achternaam || !email || !password || !key) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Check if the user already exists
    const checkUserQuery = 'SELECT email FROM gebruiker WHERE email = ?';
    db.query(checkUserQuery, [email], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error checking user existence', error: err });
        }

        if (result.length > 0) {
            // User already exists
            return res.status(409).json({ success: false, message: 'User already exists' });
        } else {
            // Insert the new user into the database
            const insertQuery = 'INSERT INTO gebruiker (voornaam, achternaam, email, wachtwoord, key) VALUES (?, ?, ?, ?, ?)';
            db.query(insertQuery, [voornaam, achternaam, email, password, key], (insertErr, insertResult) => {
                if (insertErr) {
                    return res.status(500).json({ success: false, message: 'Error registering user', error: insertErr });
                }
                // Assuming auto-increment ID is used
                const newUserId = insertResult.insertId;
                // Send the new user ID to the frontend
                res.status(201).json({ success: true, message: 'User registered successfully', userId: newUserId });
            });
        }
    });
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT id, voornaam, achternaam, email, TelefoonNummer, regio, geboorteDatum, act_key  FROM gebruiker WHERE id = ?';

    db.query(query, [userId], (err, result) => {
        if (err) {
      
            return res.status(500).json({ success: false, message: 'Failed to retrieve user', error: err });
        }

        if (result.length > 0) {
        
            res.json({ success: true, message: 'User retrieved successfully', user: result[0] });
        } else {
     
            res.status(404).json({ success: false, message: 'User not found' });
        }
    });
});

app.get('/watertest', (req, res) => {
    
    const query = `
        SELECT watertest.*, gebruiker.voornaam 
        FROM watertest 
        JOIN gebruiker ON watertest.gebruikerid = gebruiker.id
    `;

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Failed to retrieve water test data', error: err });
        }
        res.json({ success: true, message: 'Water test data retrieved successfully', data: result });
    });
});



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
