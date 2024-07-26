// import db from "../Database/index.js";
import * as dao from "./dao.js";

// let currentModule = null;

export default function ModuleRoutes(app) {


    // CREATE
      const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    };
    // app.post("/api/modules", createModule);
    app.post("/api/courses/:cid/modules", createModule);


    // DELETE
    const deleteModule = async (req, res) => { 
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };
    app.delete("/api/modules/:moduleId", deleteModule);
    


    // FIND - READ
    const findAllModules = async (req, res) => {  

        // const { course, name } = req.query; // parse course from query string, name from "
        
        // if (course) { // if course matches 
        // const modules = await dao.findModulesByCourse(course); // use dao to retrieve modules with that course
        // res.json(modules); // respond with json of filtered module list
        // return; //exit the fn
        // }

        // if (name) { //if name matches
        // const modules = await dao.findModulesByPartialName(name);  // use dao to retrieve modules with that name
        // res.json(modules);
        // return;
        // }


        const modules = await dao.findAllModules(); // else find all modules regardless of course
        res.json(modules);
        
    };
    app.get("/api/modules", findAllModules);
    // app.get("/api/courses/:course/modules", findAllModules);


    const findModulesByCourse = async (req, res) => {
      const modules = await dao.findModulesByCourse(req.params.courseId);
      res.json(modules);
    }
    app.get("/api/courses/:courseId/modules", findModulesByCourse);


    const findModuleById = async (req, res) => { 
        const module = await dao.findModuleById(req.params.moduleId);
        res.json(module);
    };
    app.get("/api/modules/:moduleId", findModuleById);



    // UPDATE
    const updateModule = async (req, res) => { 
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    }; 
    app.put("/api/modules/:moduleId", updateModule);



    // // Update operation for modules with PUT
    // app.put("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params; //parse module id from request params

    //     // find index where module id matches
    //     const moduleIndex = db.modules.findIndex(
    //       (m) => m._id === mid);

    //     //take the module at that index, take its current inf
    //     //   and overlap with updated info from request body
    //     db.modules[moduleIndex] = {
    //       ...db.modules[moduleIndex],
    //       ...req.body
    //     };
        
    //     res.sendStatus(204); // respons is status code
    // });
    

    // // Delete operation for modules with DELETE
    // app.delete("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params; //request parameter used to filter specific mod

    //     db.modules = db.modules.filter((m) => m._id !== mid); //db mods where id isn't a match
    //     res.sendStatus(200); //respond with success code
    // });  


    // // Create operation for modules with POST
    // app.post("/api/courses/:cid/modules", (req, res) => {
    //     const { cid } = req.params; //parse cid required parameter

    //     // new module info is in request body, cid from req. param
    //     const newModule = {
    //       ...req.body,
    //       course: cid,
    //       _id: new Date().getTime().toString(),
    //     };

    //     db.modules.push(newModule); //push new module to db.modules array

    //     res.send(newModule); //reply to client with new module
    // }); 



    // // Read operation for modules with GET
    // app.get("/api/courses/:cid/modules", (req, res) => {
    //     const { cid } = req.params;
    //     const modules = db.modules.filter((m) => m.course === cid);
        
    //     res.json(modules);

    // });


}
