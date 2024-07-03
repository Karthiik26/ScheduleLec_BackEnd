const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, "Provide Date"]
    },
    instructor: {
        type: String,
        ref: 'Instructor',
        required: [true, "Provide Instructor"]
    },
    course : {
        type: String,
        ref: 'course',
        required: [true, "Provide course"]
    },
    batchName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Lectures', LectureSchema);
