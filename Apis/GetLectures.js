const LectureSchema = require("../Schema/LectureSchema");

async function GetAllLectures(req, res) {
  try {
    const Lecture = await LectureSchema.find();

    return res.status(200).json({
      message: "All Lectures",
      data: Lecture,
      success:true
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = GetAllLectures;
