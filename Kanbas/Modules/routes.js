import db from "../Database/index.js";

export default function ModuleRoutes(app) {


    // Create operation for modules with POST
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params; //parse cid required parameter

        // new module info is in request body, cid from req. param
        const newModule = {
          ...req.body,
          course: cid,
          _id: new Date().getTime().toString(),
        };

        db.modules.push(newModule); //push new module to db.modules array

        res.send(newModule); //reply to client with new module
    }); 


    
    // Read operation for modules with GET
    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules.filter((m) => m.course === cid);
        
        res.json(modules);

    });


}
