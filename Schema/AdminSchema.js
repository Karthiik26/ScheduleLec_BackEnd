const mongoose = require('mongoose');

const AdminSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Provide Name"]
    },
    email : {
        type : String,
        required : [true, "Provide Email"],
        unique : true
    },
    phone : {
        type : Number,
        required : [true, "Provide Number"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Provide Password"]
    }
})

const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;