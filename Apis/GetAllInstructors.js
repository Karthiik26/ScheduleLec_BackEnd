const InstructorSchema = require("../Schema/InstructorSchema");

async function GetAllInstructor(req, res) {
  try {
    const Instructor = await InstructorSchema.find().select("-password");

    return res.status(200).json({
      message: "All Instructor",
      data: Instructor,
      success:true
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = GetAllInstructor;
