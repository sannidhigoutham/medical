const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    // Verify the webhook is from GitHub (optional)
    // const signature = req.headers['x-hub-signature'];
    // const isValid = verifySignature(signature, req.body);
    // if (!isValid) return res.status(401).send('Unauthorized');

    // Pull the latest changes
    exec('git pull origin main && npm install && pm2 restart my-app', (err, stdout, stderr) => {
        if (err) {
            console.error('exec error: ${err}');
            return res.status(500).send('Error pulling code');
        }
        console.log('stdout: ${stdout}');
        console.error('stderr: ${stderr}');
        res.send('Successfully updated');
    });
});

// Start your server
app.listen(3000, () => {
    console.log('Server is running on port 5000');
});