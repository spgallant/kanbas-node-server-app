import db from "../Database/index.js";

export default function AssignmentRoutes(app) {


    // Update operation for assignments with PUT
    app.put("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params; //parse assignment id from request params

        // find index where assignment id matches
        const assignmentIndex = db.assignments.findIndex(
          (a) => a._id === aid);

        //take the assignment at that index, take its current info
        //   and overlap with updated info from request body
        db.assignments[assignmentIndex] = {
          ...db.assignments[assignmentIndex],
          ...req.body
        };
        
        res.sendStatus(204); // respons is status code
    });



    // Delete operation for assignments with DELETE
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params; //request parameter used to filter specific assign.

        db.assignments = db.assignments.filter((a) => a._id !== aid); //db assigns where id isn't a match
        res.sendStatus(200); //respond with success code
    }); 



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
