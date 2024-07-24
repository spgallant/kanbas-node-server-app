//const express = require('express')

import "dotenv/config"; // import dotenv library to read connection string
import express from 'express'; // Import the Express module
import mongoose from "mongoose"; // Load mongoose library
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js"; //add courses routes
import ModuleRoutes from './Kanbas/Modules/routes.js'; //add modules routes
import AssignmentRoutes from './Kanbas/Assignments/routes.js'; //add assignments routes
import cors from "cors";

import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas" //connect to kanbas db
mongoose.connect(CONNECTION_STRING);

const app = express(); // Create an Express application
app.use(cors()); 
app.use(express.json()); // enables server to parse JSON data from request body | must follow cors stmnt


UserRoutes(app);

// remaining work below (after cors and express lines) - A5
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

// Start the server and listen on the defined port w/ given port number
app.listen(process.env.PORT || 4000)