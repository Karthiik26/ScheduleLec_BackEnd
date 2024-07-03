const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    batch: []
});

module.exports = mongoose.model('Courses', CourseSchema);
