const InstructorSchema = require("../Schema/InstructorSchema");

async function DeleteInstructor(req, res) {
  try {
    const { InstructorId } = req.body;

    const Instructor = await InstructorSchema.findById(InstructorId);

    if (!Instructor) {
      return res.status(400).json({
        message: "Course not found",
        error: true,
      });
    }

    if (Instructor.course.length > 0 && Instructor.DatesAssigned.length > 0) {
      return res.status(400).json({
        message:
          "Course And Dates are Assigned the Instructor , We can't Delete.",
        success: false,
      });
    }

    // Remove the course
    await InstructorSchema.deleteOne({ _id: InstructorId });

    return res.status(200).json({
      message: "Instructor successfully Deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = DeleteInstructor;
