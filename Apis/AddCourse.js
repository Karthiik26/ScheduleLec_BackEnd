const CourseModel = require('../Schema/CourseSchema');

async function AddCourse(req, res) {
    try {
        const { name, level, description, image } = req.body;

        // Check if a course with the same name already exists
        const existingCourse = await CourseModel.findOne({ name });
        if (existingCourse) {
            return res.status(400).json({
                message: "Course with the same name already exists",
                error: true
            });
        }

        const payload = {
            name,
            level,
            description,
            image,
        };

        const course = new CourseModel(payload);

        const savedCourse = await course.save();

        return res.status(201).json({
            message: "Course successfully created",
            data: savedCourse,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
}

module.exports = AddCourse;
