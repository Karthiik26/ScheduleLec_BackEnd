const InstructorSchema = require("../Schema/InstructorSchema");
const bcryptjs = require("bcryptjs");

async function AddInstructor(req, res) {
  try {
    const { name, email, password } = req.body;

    const checkEmail = await InstructorSchema.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({
        message: "This Email Already Instructor Exits In Our System",
        error: true,
      });
    }

    // Password Hashing
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      password: hashPassword,
    };

    const Instructor = new InstructorSchema(payload);
    const Instructorsave = await Instructor.save();

    return res.status(201).json({
      message: "Instructor Created Succesfully",
      data: Instructorsave,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = AddInstructor;
