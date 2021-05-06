const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
// const Department = require('../models/departmentSchema');


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

module.exports = router