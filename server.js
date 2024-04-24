// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Morrie Virtual Home is a web-based platform that offers visitors a 360-degree view of a meticulously designed 3D model home. Explore the virtual space to get a feel for the layout, design, and ambiance of the Morrie Home');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
