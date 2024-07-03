const CourseModel = require("../Schema/CourseSchema");

async function AddCourse(req, res) {
  try {
    const courseId = req.params.CourseId;
    const { name, description, level, image } = req.body;

    const course = await CourseModel.findById(courseId);

    if (!course) {
      return res.status(400).json({
        message: "This Course Not Found",
        error: true,
      });
    }

    const payload = {
      name,
      description,
      level,
      image,
    };

    const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, payload, { new: true });

    return res.status(201).json({
      message: "Course Updated",
      data: updatedCourse,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = AddCourse;
