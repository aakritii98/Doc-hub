const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Department = require('../models/departmentSchema');






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


module.exports = router