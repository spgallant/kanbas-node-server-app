import db from "../Database/index.js";

export default function ModuleRoutes(app) {


    // Update operation for modules with PUT
    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params; //parse module id from request params

        // find index where module id matches
        const moduleIndex = db.modules.findIndex(
          (m) => m._id === mid);

        //take the module at that index, take its current inf
        //   and overlap with updated info from request body
        db.modules[moduleIndex] = {
          ...db.modules[moduleIndex],
          ...req.body
        };
        
        res.sendStatus(204); // respons is status code
    });
    

    // Delete operation for modules with DELETE
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params; //request parameter used to filter specific mod

        db.modules = db.modules.filter((m) => m._id !== mid); //db mods where id isn't a match
        res.sendStatus(200); //respond with success code
    });  


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
