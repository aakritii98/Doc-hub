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


router.get("/signup",(req,res)=>{
    res.render('signup');
})
router.get("/adminhome",(req,res)=>{
    res.render('admin');
})

router.get("/addDepartment",(req,res)=>{
    res.render('departmentadd');
})
router.get("/removeDepartment",(req,res)=>{
    res.render('departmentremove');
})

router.get("/department",(req,res)=>{
    res.render('depart');
})
router.get("/viewDepartments",(req,res)=>{
    res.render('viewdepartment');
})
router.get('/addresearch',(req,res)=>{
    res.render('adresearch');
})
router.get('/finaleditprofile',(req,res)=>{
    res.render('finaleditprofile');
})
router.get('/adresearch',(req,res)=>{
    res.render('adresearch');
})
router.get('/teacher',(req,res)=>{
    res.render('teacher');
    
})
router.get('/trecords',(req,res)=>{
    res.render('trecords');

})




module.exports = router