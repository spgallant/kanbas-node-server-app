import Database from "../Database/index.js";

export default function CourseRoutes(app) {

    // ability to update a course (PUT)
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params; //parse id of course as path parameter
        const course = req.body; //HTTP request body

        // where the id matches (it's the correct course), update that course w/ 
        //   updates from HTTP request body
        Database.courses = Database.courses.map((c) =>
          c._id === id ? { ...c, ...course } : c
        );

        res.sendStatus(204); //successful status sent back
    });
    


    // ability to delete a course (DELETE)
    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;

        //courses array becomes courses array w/ course of matching id filtered out
        Database.courses = Database.courses.filter((c) => c._id !== id);
        res.sendStatus(204); // status 204 is response
    });
    

    // ability to add a new course (POST)
    app.post("/api/courses", (req, res) => {
        const course = { ...req.body,
          _id: new Date().getTime().toString() };

        Database.courses.push(course);
        res.send(course);
    });
  

    // make courses available at localhost:4000 address below (GET/retrieve)
    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });

}
