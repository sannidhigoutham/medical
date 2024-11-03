const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json()); // Parse incoming JSON requests

const data = {
    "users": [
        { id: '1', name: 'gou', score: '1', country: 'India', images: "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180" },
        { id: '2', name: 'bha', score: '2', country: 'India', images: "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180" },
        { id: '3', name: 'jay', score: '3', country: 'India', images: "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180" },
        { id: '4', name: 'sum', score: '4', country: 'India', images: "https://tse4.mm.bing.net/th?id=OIP.p1LJSrhzpdQyahNT_zCSuQHaE7&pid=Api&P=0&h=180" }
    ]
};

app.get('/api', (req, res) => {
    console.log("Received GET request on /api");
    res.json(data); // Return all user data
});

// Sample mock database operation
const mockDatabase = {
    users: data.users // Simulating a database with in-memory data
};

app.post('/dataperson', (req, res) => {
    console.log("Received POST request on /dataperson");
    res.json(mockDatabase.users); // Return all users
});

app.put('/data', (req, res) => {
    const user = req.body.value; // Expecting a value in the request body
    console.log("Updating user data based on:", user);
    
    const filteredUsers = user === "All" 
        ? mockDatabase.users 
        : mockDatabase.users.filter(u => u.name === user);

    res.json({ users: filteredUsers });
});

app.get('/api/data', (req, res) => {
    res.json(mockDatabase.users); // Return all user data
});

// Authentication example
app.post("/api/signin", (req, res) => {
    const { name, password } = req.body; // Destructuring the request body
    console.log("Sign-in attempt for:", name);
    
    if (name === "goutham" && password === "goutham@123") {
        res.json({ id: "ph1", login: "successful", type: "pharmacy" });
    } else if (name === "david" && password === "david@123") {
        res.json({ id: "d01", login: "successful", type: "doctor" });
    } else if (name === "starlyn" && password === "staryln@123") {
        res.json({ id: "pa1", login: "successful", type: "patient" });
    } else {
        res.json({ id: "000000", login: "fail" });
    }
});

// Starting the server
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
