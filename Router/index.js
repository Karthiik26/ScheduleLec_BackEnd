const express = require('express');
const RegisterAdmin = require('../Apis/AdminRegister');
const AdminCheckEmailLogin = require('../Apis/AdminCheckEmailLogin');
const AdminCheckPassword = require('../Apis/AdminCheckPasswordLogin');
const AddCourse = require('../Apis/AddCourse');
const UpdateCourse = require('../Apis/UpdateCourse');
const DeleteCourse = require('../Apis/DeleteCourse');
const GetAllCourses = require('../Apis/GetAllCourses');
const GetAllInstructor = require('../Apis/GetAllInstructors');
const AddInstructor = require('../Apis/AddInstructor');
const addLecturerToCourse = require('../Apis/AddInstructorToCourse');
const UpdateInstructor = require('../Apis/UpdateInstructor');
const DeleteInstructor = require('../Apis/DeleteInstructor');
const getDataById = require('../Apis/GetdataById');
const GetAllLectures = require('../Apis/GetLectures');

const router = express.Router();

router.post('/AdminRegister', RegisterAdmin);
router.post('/AdminCheckEmail', AdminCheckEmailLogin);
router.post('/AdminCheckPasswordLogin', AdminCheckPassword);

router.post('/AddCourse', AddCourse);
router.put('/UpdateCourse/:CourseId', UpdateCourse);
router.delete('/DeleteCourse', DeleteCourse);
router.get('/GetAllCourses', GetAllCourses);


router.post('/AddInstructor', AddInstructor);
router.put('/UpdateInstructor/:InstructorId', UpdateInstructor);
router.delete('/DeleteInstructor', DeleteInstructor);
router.get('/GetAllInstructor', GetAllInstructor);

router.post('/AddLecturerToCourse', addLecturerToCourse)
router.post('/GetDataById', getDataById)
router.get('/GetAllLectures', GetAllLectures)

module.exports = router;