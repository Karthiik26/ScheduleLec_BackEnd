const InstructorModel = require("../Schema/InstructorSchema");

async function UpdateInstructor(req, res) {
  try {
    const instructorId = req.params.InstructorId;
    const { name, email } = req.body;

    const instructor = await InstructorModel.findById(instructorId);

    if (!instructor) {
      return res.status(404).json({
        message: "Instructor not found",
        error: true,
      });
    }

    const checkEmail = await InstructorModel.findOne({ email });

    if (checkEmail && checkEmail._id.toString() !== instructorId) {
      return res.status(409).json({
        message: "Email already exists",
        error: true,
      });
    }

    const updatedInstructor = await InstructorModel.findByIdAndUpdate(
      instructorId,
      { name, email },
      { new: true }
    );

    return res.status(200).json({
      message: "Instructor updated",
      data: updatedInstructor,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = UpdateInstructor;
