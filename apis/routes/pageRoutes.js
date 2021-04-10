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

module.exports = router