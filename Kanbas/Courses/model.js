import mongoose from "mongoose"; // load Mongoose library
import schema from "./schema.js"; // load courses schema


const model = mongoose.model("CourseModel", schema); // create mongoose model from the schema

export default model; // export it so it can be used elsewhere