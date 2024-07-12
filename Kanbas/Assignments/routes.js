import db from "../Database/index.js";

export default function AssignmentRoutes(app) {

    // Read operation for assignments with GET
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments.filter((a) => a.course === cid);
        
        res.json(assignments);

    });
}
