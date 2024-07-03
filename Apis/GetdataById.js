const CourseModel = require("../Schema/CourseSchema");
const InstructorModel = require("../Schema/InstructorSchema");

async function getDataById(req, res) {
  try {
    const { courseId, instructorId } = req.body;
    
    const course = await CourseModel.findById(courseId);

    const instructor = await InstructorModel.findById(instructorId);

    return res.json({ course, instructor });
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

module.exports = getDataById;
