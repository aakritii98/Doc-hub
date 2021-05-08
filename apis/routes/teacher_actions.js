const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Teacher = require('../models/teacherSchema');


router.post('/teacherrecordadd', async (req, res) => {
    let data = {};
    let recordData = req.body;
    let teacherId = req.user.teacher_id;
    console.log(teacherId);
    console.log(recordData);
    let result = await Teacher.findOneAndUpdate({ teacher_id: teacherId }, { teacher_records: [recordData] })
    if (result) {
        res.json({
            status: "success",
            message: "Teacher Data added Successfully",
            teacher: result,
        });

    }
    else {
        res.json({
            status: "failure",
            message: "Teacher Not Found"
        });
    }
})


module.exports = router