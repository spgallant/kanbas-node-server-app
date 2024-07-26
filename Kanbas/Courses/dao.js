import model from "./model.js";


// CREATE
export const createCourse = (course) => {
    delete course._id // remove _id field just in case client sends it
    return model.create(course); // database will create _id for us instead
}
  

// FIND
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId);
export const findCourseByName = (name) =>  model.findOne({ name: name });


export const findCoursesByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
      $or: [{ name: { $regex: regex } }],
    });
};
  


// UPDATE
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });

//DELETE
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });

