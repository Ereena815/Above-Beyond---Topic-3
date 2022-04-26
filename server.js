/****
   SIT209 - Software Engineering 2: Developing IoT Applications
   Exercise:       Above & Beyond Topic 3
   Student Name:   Ereena Bagga
   Student ID:     2010993040 
 ****/

// Include the express module and initialise a new instance
const express = require('express');
const app = express();

// Specifying a port for the web server to listen to and a base url for each of our routes
const port = 3000;
const base = `${__dirname}/public`;

// Specifying middleware to server static files from the /public directory
app.use(express.static('public'));

// Start the web server and listen to requests on the specified port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// Route middleware for the root URI path / which returns an html file
app.get('/', (req, res) => {
    res.sendFile(`${base}/Login.html`);
});

// Route middleware for the root URI path /register-device which returns an html file
app.get('/car-controls', (req, res) => {
    res.sendFile(`${base}/Car-controls.html`);
});

// Route middleware for the root URI path /register-device which returns an html file
app.get('/drive-controls', (req, res) => {
    res.sendFile(`${base}/Drive-controls.html`);
});

// Route middleware for the root URI path /iot-applications which returns an html file
app.get('/simulation', (req, res) => {
    res.sendFile(`${base}/Simulation.html`);
});

// Route middleware statement for any unmatched URIs
app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});