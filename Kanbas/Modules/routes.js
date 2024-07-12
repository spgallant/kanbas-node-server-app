import db from "../Database/index.js";

export default function ModuleRoutes(app) {

    // Read operation for modules with GET
    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules.filter((m) => m.course === cid);
        
        res.json(modules);

    });


}
