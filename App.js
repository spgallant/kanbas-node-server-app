//const express = require('express')

import express from 'express'; // Import the Express module
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";

const app = express(); // Create an Express application
app.use(express.json());

Lab5(app);
Hello(app);

// Start the server and listen on the defined port w/ given port number
app.listen(process.env.PORT || 4000)