const mongoose = require('mongoose');

const InstructorSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Provide Name"]
    },
    email : {
        type : String,
        required : [true, "Provide Email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Provide Password"]
    },
    DatesAssigned: [],
    course : [],
    batchname: []
},
{
    timestamps: { createdOn: 'createdAt', updatedOn: 'updatedAt' },
})


const InstructorModel = mongoose.model('Instructors', InstructorSchema);

module.exports = InstructorModel;