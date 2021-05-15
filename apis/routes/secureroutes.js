const express = require('express');
const router = express.Router();

router.get("/checkDepartmentFront",(req,res)=>{
    if(req.user.department_id){
        res.json({status:'success',message:'Department varfified'});
    }
    else{
        res.json({});
    }
})

router.get('/checkAdminFront',(req,res)=>{
        console.log(req.user);
    if(req.user.email){
        res.json({status:'success',message:'Admin varified'});
    }
    else{
        res.json({});
    }
})


router.get('/checkTeacherFront',(req,res)=>{
    console.log(req.user.teacher_id);
if(req.user.teacher_id){
    res.json({status:'success',message:'Teacher varified'});
}
else{
    res.json({});
}
})
module.exports = router;