const CourseModel = require("../Schema/CourseSchema");
const InstructorModel = require("../Schema/InstructorSchema");
const LectureModel = require("../Schema/LectureSchema");

async function addLecturerToCourse(req, res) {
  try {
    
    const { courseId, date, instructorId, batchName } = req.body;

    // const lecture = { courseId, date, instructorId, batchName };
    
    const instructor = await InstructorModel.findById(instructorId);
    if (!instructor) {
      return res.status(400).json({
        message: "Instructor does not exist",
        error: true,
      });
    }

    const course = await CourseModel.findById(courseId);
    if (!course) {
      return res.status(400).json({
        message: "Course not found",
        error: true,
      });
    }


    const conflict = course.batch.some(
      (lecture) =>
        new Date(lecture.date).getTime() === new Date(date).getTime() &&
        lecture.instructor === instructorId
    );

    if (conflict) {
      return res.status(400).json({
        message:
          "Instructor is already assigned to another lecture on this date",
        error: true,
      });
    }

    if (instructor.DatesAssigned.length > 0) {
      return res.status(400).json({
        message: "Instructor already has assigned dates",
        error: true,
      });
    }

    const newLecture = new LectureModel({
      date,
      course : course.name,
      instructor: instructor.name,
      batchName,
    });
    
    await newLecture.save();

    course.batch.push(newLecture);
    await course.save();

    instructor.DatesAssigned.push(new Date(date).getTime());
    if (!instructor.course) {
      instructor.course = [];
    }
    
    instructor.course.push(course._id);
    instructor.batchname.push(batchName);
    await instructor.save();

    return res.status(201).json({
      message: "Instructor added to course successfully",
      data: instructor,
      success: true,
    });
    
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = addLecturerToCourse;
