const CourseModel = require("../Schema/CourseSchema");

async function DeleteCourse(req, res) {
  try {
    const { CourseId } = req.body;

    const CourseDetect = await CourseModel.findById(CourseId);

    if (!CourseDetect) {
      return res.status(400).json({
        message: "Course not found",
        error: true,
      });
    }

    if (CourseDetect.batch.length > 0) {
       return res.status(400).json({
        message: "You Are Assigned the Instructor.",
        success: true,
      });
    }

    // Remove the course
    await CourseModel.deleteOne({ _id: CourseId });

    return res.status(200).json({
      message: "Course successfully Deleted",
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = DeleteCourse;
