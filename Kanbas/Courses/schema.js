import mongoose from "mongoose"; // Load mongoose library

const courseSchema = new mongoose.Schema({
    
    name: { type: String, required: true }, 
    number: String, 
    startDate: Date, 
    endDate: Date,
    department: String, 
    credits: Number, 
    description: String, 
    imageName: String,
},
{ collection: "courses" } // Specify the collection name
);

export default courseSchema;