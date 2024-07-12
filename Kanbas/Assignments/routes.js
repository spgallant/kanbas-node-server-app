import db from "../Database/index.js";

export default function AssignmentRoutes(app) {

    // Create operation for assignments with POST
    // url may need ~/assignments/:aid
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params; //parse cid required parameter

        // new assignment info is in request body, cid from req. param
        const newAssignment = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };

        db.assignments.push(newAssignment); //push new module to db.modules array

        res.send(newAssignment); //reply to client with new module
    });




    // Read operation for assignments with GET
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter((a) => a.course === cid);
        
        res.json(assignments);

    });
}
