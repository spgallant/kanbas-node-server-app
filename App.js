//const express = require('express')

import express from 'express'; // Import the Express module
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js"; //add courses routes
import cors from "cors";


const app = express(); // Create an Express application
app.use(cors()); 
app.use(express.json()); // enables server to parse JSON data from request body | must follow cors stmnt

// remaining work below (after cors and express lines)

CourseRoutes(app);
Lab5(app);
Hello(app);

// Start the server and listen on the defined port w/ given port number
app.listen(process.env.PORT || 4000)