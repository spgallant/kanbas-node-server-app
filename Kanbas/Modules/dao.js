import model from "./model.js";

// CREATE
export const createModule = (module) => {
    delete module._id // remove _id field just in case client sends it
    return model.create(module); // database will create _id for us instead
}
  
// FIND - READ
export const findAllModules = () => model.find();
export const findModuleById = (moduleId) => model.findById(moduleId);
export const findModuleByName = (name) =>  model.findOne({ name: name });

export const findModulesByCourse = (course) => model.find({ course: course }); // or just model.find({ course })

export const findModulesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
      $or: [{ name: { $regex: regex } }],
    });
};
  


// UPDATE
export const updateModule = (moduleId, module) =>  model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });

