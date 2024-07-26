import mongoose from "mongoose"; //load mongoose library

const moduleSchema = new mongoose.Schema({ //create schema
    name: { type: String, required: true },
    description: String,
    course: { type: String, required: true }, // Course as a string
    lessons: [
        {
        _id: String,
        name: String,
        description: String,
        module: String, 
        }
    ],


},
{ collection: "modules" } // store data in users collection
);


export default moduleSchema;