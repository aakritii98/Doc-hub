const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Teacher = require('../models/teacherSchema');


router.post('/teacheradd',(req,res,next)=>{
    console.log('hello');
    passport.authenticate('teacheradd',(err,teacher,info)=>{
        try{
            if(err){
                console.log(err);
                res.json({
                    status:'error',
                    message:'something went wrong'
                })
            }
            else if(!teacher){
                console.log(err);
                res.json({
                    status:'failure',
                    message:'teacher already exist'
                })
            }
            else{
                req.logIn(teacher,{session:false},async(err)=>{
                    if(err){
                        res.json({
                            status:'error',
                            message:'something went wrong',
                        })
                    }
                    // const token = jwt.sign({ user: user.email }, "doc-hubJwtSecret");
                    res.json({
                        status:'success',
                        message:'Teacher Account Created successfully',
                        teacher:teacher,
                    })
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })(req, res, next)
})
router.post('/teacherremove',(req,res)=>{
    console.log(req.body);
    const teacherId=req.body.teacher_id;
    Teacher.findOneAndDelete({teacher_id:teacherId}).then((result)=>{
        if(result){
            res.json({
                status:"success",
                message:"Teacher Deleted Successfully",
                teacher:result,
            });

        } 
        else{
            res.json({
                status:"failure",
                message:"Teacher Not Found"
            });
        } 
      })
})


router.get('/teacher_view',(req,res)=>{
    const departmentId = req.user.department_id;
    console.log(departmentId,"helllo buddy");
    Teacher.find({department_id:departmentId}).then((result)=>{
        if(result){
            res.json({
                status:'success',
                message:'view success',
                data:result
            });
        }
        else{
            res.json({
                status:'failure',
                message:'No data found',
            })
        }
    })

})
module.exports = router