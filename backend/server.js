const express = require('express');
const bodyParser = require('body-parser');
const firebaseAdmin = require('firebase-admin');

// Initialize Firebase Admin SDK (Set up Firebase in your project and download credentials)
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault(),
    databaseURL: "https://your-project-id.firebaseio.com" // Replace with your Firebase URL
});

const app = express();
app.use(bodyParser.json());

// Basic User Registration Route
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Here you'd usually add logic to create a user in Firebase Authentication or database
    firebaseAdmin.auth().createUser({
        email,
        password,
    })
    .then(userRecord => {
        res.status(201).send({ message: 'User created successfully!', userId: userRecord.uid });
    })
    .catch(error => {
        res.status(400).send({ error: error.message });
    });
});

// Wallet Balance Route (for simplicity, use a mock wallet balance)
app.get('/wallet/:userId', (req, res) => {
    const userId = req.params.userId;

    // For real implementation, pull data from Firebase Firestore or Realtime Database
    const mockBalance = 500; // Mock wallet balance in coins
    res.send({ userId, balance: mockBalance });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
