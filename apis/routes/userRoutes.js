const express = require("express");
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup',async(req,res)=>{
    const userData = req.body;
    console.log(userData);
    userData.password = await bcrypt.hash(userData.password,10);
    User.findOne({email:userData.email},(err,result)=>{
        if(result){
            res.json({
                status:"Failure",
                message:"email already exist",
                data:userData.email
            })
        }
        else{
            const user = new User({
                name:userData.name,
                email:userData.email,
                institutecode:userData.institute,
                password:userData.password
            })
            user.save().then((result)=>{
                jwt.sign({email:result.email},'DOChubJsonWEbTOkenSecret',(err,res)=>{
                    res.json({
                        status:"success",
                        message:"user created",
                        token:res,
                        name:result.name
                    })
                })
            })
        }
    })
})


module.exports = router