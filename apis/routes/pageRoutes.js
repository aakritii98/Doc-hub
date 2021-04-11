const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index');
})

router.get("/adminLogin",(req,res)=>{
    res.render('login');
})

router.get("/departmentLogin",(req,res)=>{
    res.render('login2');
})

router.get("/teacherLogin",(req,res)=>{
    res.render('TLogin');
})

router.get("/adminHomePage",(req,res)=>{
    res.render('admin');
})
router.get("/signup",(req,res)=>{
    res.render('signup');
})

router.get("/addDepartment",(req,res)=>{
    res.render('adminadd');
})
router.get("/removeDepartment",(req,res)=>{
    res.render('adminremove');
})

router.get("/department",(req,res)=>{
    res.render('depart');
})



module.exports = router