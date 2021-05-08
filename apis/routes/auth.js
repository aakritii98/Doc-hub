const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup',(req,res,next)=>{
    console.log('hello');
    passport.authenticate('signup',(err,user,info)=>{
        try{
            if(err){
                console.log(err);
                res.json({
                    status:'error',
                    message:'something went wrong'
                })
            }
            else if(!user){
                console.log(err);
                res.json({
                    status:'failure',
                    message:info.message
                })
            }
            else{
                req.logIn(user,{session:false},async(err)=>{
                    if(err){
                        res.json({
                            status:'error',
                            message:'something went wrong'
                        })
                    }
                    console.log(user,"user created");
                    const token = jwt.sign({ user: user.email }, "doc-hubJwtSecret");
                    res.json({
                        status:'success',
                        message:'User Created successfully',
                        token:token,
                        user:user
                    })
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })(req, res, next)
})

router.post("/signin",(req,res)=>{
    passport.authenticate('signin',(err,user,info)=>{
        try {
            if(err){
                console.log(err);
                res.json({
                    status:'error',
                    message:'something went wrong'
                })
            }
            else if(!user){
                res.json({
                    status:'failure',
                    message:'Wrong Password'
                })
            }
            else{
                req.logIn(user,{session:false},async(err)=>{
                    if(err){
                        res.json({
                            status:'error',
                            message:'something went wrong'
                        })
                    }
                    const token = jwt.sign({ user: user.email }, "doc-hubJwtSecret");
                    res.json({
                        status:'success',
                        message:'User Logged IN successfully',
                        token:token,
                        user:user
                    })
                })

            }
        } catch (error) {
            console.log(error);
        }
    })(req,res);
})




router.post('/departmentsignin',(req,res,next)=>{
    console.log('hello');
    passport.authenticate('departmentSignIn',(err,department,info)=>{
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
                    message:info.message
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
                    const token = jwt.sign({ department: department.department_id }, "doc-hubJwtSecret");
                    res.json({
                        status:'success',
                        message:info.message,
                        department:department,
                        token:token,
                    })
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })(req, res, next)
})

router.post('/teachersignin',(req,res,next)=>{
    console.log('hello');
    passport.authenticate('teacherSignIn',(err,teacher,info)=>{
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
                    message:info.message
                })
            }
            else{
                req.logIn(teacher,{session:false},async(err)=>{
                    if(err){
                        res.json({
                            status:'error',
                            message:'something went wrong'
                        })
                    }
                    const token = jwt.sign({ teacher: teacher.teacher_id }, "doc-hubJwtSecret");
                    res.json({
                        status:'success',
                        message:info.message,
                        teacher:teacher,
                        token:token,
                    })
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })(req, res, next)
})

module.exports = router