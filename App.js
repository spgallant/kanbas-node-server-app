//const express = require('express')

import "dotenv/config"; // import dotenv library to read connection string
import express from 'express'; // Import the Express module
import mongoose from "mongoose"; // Load mongoose library
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/Courses/routes.js"; //add courses routes
import ModuleRoutes from './Kanbas/Modules/routes.js'; //add modules routes
import AssignmentRoutes from './Kanbas/Assignments/routes.js'; //add assignments routes
import session from "express-session"; //import new server session library
import cors from "cors";

import UserRoutes from "./Users/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas" //connect to kanbas db
mongoose.connect(CONNECTION_STRING);



const app = express(); // Create an Express application

app.use(cors({
    credentials: true, // support cookies
    origin: process.env.NETLIFY_URL || "http://localhost:3000", // restrict cross origin resource, diff url in dev vs prod
  })
 ); 

 app.use(express.json()); // enables server to parse JSON data from request body | must follow cors stmnt

// const sessionOptions = { //configure after configuring cors
//     secret: "any string", //default session config for local (update further for remote server)
//     resave: false,
//     saveUninitialized: false,
// };
// app.use(
//     session(sessionOptions)
// );
  
const sessionOptions = { // default session options
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
if (process.env.NODE_ENV !== "development") {  // in production
    sessionOptions.proxy = true;   // turn on proxy support
    sessionOptions.cookie = {  // configure cookies for remote server
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
  

UserRoutes(app);

// remaining work below (after cors and express lines) - A5
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

// Start the server and listen on the defined port w/ given port number
app.listen(process.env.PORT || 4000)