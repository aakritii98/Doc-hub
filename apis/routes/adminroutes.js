const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();

router.get("/getsdmindetails", (req,res)=>{
     const email = req.user.email; 
     User.findOne({email:email},(err,doc)=>{
         if(err)
         {
             console.log(err);
             res.json({
                status:'error',
                message:'something went wrong'
            })
         }
         else
         {
            res.json({
                status:'success',
                message:'successfully fetch data',
                result: doc
            })
         }
     })
});


router.post("/postAdminDetails", (req, res)=>{
    const data = req.body;
    console.log(data);
    User.findOneAndUpdate({email:data.email},   {name: data.name, phonenumber:data.phonenumber,address:data.address,eduction:data.eduction,dateofbirth:data.dateofbirth,city:data.city,pincode:data.pincode,country:data.country,state:data.state }).then((doc)=>{
        if(!doc)
        {
            console.log(err);
            res.json({
               status:'error',
               message:'something went wrong'
           })
        }
        else
        {
           res.json({
               status:'success',
               message:'successfully saved',
              
           })
        }
    });
   
});



module.exports = router