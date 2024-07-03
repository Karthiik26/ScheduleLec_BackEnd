const CourseModel = require("../Schema/CourseSchema");

async function GetAllCourses(req, res) {
  try {
    const Course = await CourseModel.find();

    return res.status(200).json({
      message: "All Course",
      data: Course,
      success:true
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = GetAllCourses;