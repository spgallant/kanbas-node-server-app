// import Database from "../Database/index.js";
import * as dao from "./dao.js";

// let currentCourse = null;

export default function CourseRoutes(app) {


     // CREATE
     const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };
    app.post("/api/courses", createCourse);


    // DELETE
    const deleteCourse = async (req, res) => { 
        const status = await dao.deleteCourse(req.params.courseId);
        res.json(status);
    };
    app.delete("/api/courses/:courseId", deleteCourse);



    // FIND - READ
    const findAllCourses = async (req, res) => {  

        // const { name } = req.query; // parse role from query string, name from "
        // if (name) { //if name matches
        // const courses = await dao.findCoursesByPartialName(name);  // use dao to retrieve courses with that name
        // res.json(courses);
        // return;
        // }


        const courses = await dao.findAllCourses(); // else find all courses regardless of name
        res.json(courses);
    
    };
    app.get("/api/courses", findAllCourses);

  
    const findCourseById = async (req, res) => { 
        const course = await dao.findCourseById(req.params.courseId);
        res.json(course);
    };
    app.get("/api/courses/:courseId", findCourseById);



    // UPDATE
    const updateCourse = async (req, res) => { 
        const { courseId } = req.params;
        const status = await dao.updateCourse(courseId, req.body);
        res.json(status);
    }; 
    app.put("/api/courses/:courseId", updateCourse);

    


    // // ability to update a course (PUT)
    // app.put("/api/courses/:id", (req, res) => {
    //     const { id } = req.params; //parse id of course as path parameter
    //     const course = req.body; //HTTP request body

    //     // where the id matches (it's the correct course), update that course w/ 
    //     //   updates from HTTP request body
    //     Database.courses = Database.courses.map((c) =>
    //       c._id === id ? { ...c, ...course } : c
    //     );

    //     res.sendStatus(204); //successful status sent back
    // });
    


    // // ability to delete a course (DELETE)
    // app.delete("/api/courses/:id", (req, res) => {
    //     const { id } = req.params;

    //     //courses array becomes courses array w/ course of matching id filtered out
    //     Database.courses = Database.courses.filter((c) => c._id !== id);
    //     res.sendStatus(204); // status 204 is response
    // });
    

    // // ability to add a new course (POST)
    // app.post("/api/courses", (req, res) => {
    //     const course = { ...req.body,
    //       _id: new Date().getTime().toString() };

    //     Database.courses.push(course);
    //     res.send(course);
    // });
  

    // // make courses available at localhost:4000 address below (GET/retrieve)
    // app.get("/api/courses", (req, res) => {
    //     const courses = Database.courses;
    //     res.send(courses);
    // });

}
