// Import the app configured in server.js
const app = require('./server');

// Define the port for local development (use environment variable or default to 3000)
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server.');
}); 