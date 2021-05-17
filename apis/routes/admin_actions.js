const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Department = require('../models/departmentSchema');

const Teacher = require('../models/teacherSchema');



router.post('/departmentadd',(req,res,next)=>{
    console.log('hello');
    passport.authenticate('departmentAdd',(err,department,info)=>{
        try{
            if(err){
                console.log(err);
                res.json({
                    status:'error',
                    message:'something went wrong'
                })
            }
            else if(!department){
                console.log(err);
                res.json({
                    status:'failure',
                    message:'deparment already exist'
                })
            }
            else{
                req.logIn(department,{session:false},async(err)=>{
                    if(err){
                        res.json({
                            status:'error',
                            message:'something went wrong'
                        })
                    }
                    // const token = jwt.sign({ user: user.email }, "doc-hubJwtSecret");
                    res.json({
                        status:'success',
                        message:'Department Created successfully',
                        department:department,
                    })
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })(req, res, next)
})

router.post('/removeDepartment',(req,res)=>{
    console.log(req.body);
    const departId=req.body.department_id
    Department.findOneAndDelete({department_id:departId}).then((result)=>{
        if(result){
            res.json({
                status:"success",
                message:"Department Deleted Successfully",
                department:result,
            });

        } 
        else{
            res.json({
                status:"failure",
                message:"Department Not Found"
            });
        } 
      })
})

router.get('/viewdepartment',(req,res)=>{
    const adminId = req.user.email;
    console.log(adminId,"helllo buddy");
    Department.find({admin_id:adminId}).select("-department_password").then((result)=>{
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

router.get('/techerRecordGenerate',(req,res)=>{
    const departmentName = req.body.department_name;
    Teacher.find({}).then((result)=>{
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

router.get('/teacher_view_admin',(req,res)=>{
    Teacher.find({}).then((result)=>{
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