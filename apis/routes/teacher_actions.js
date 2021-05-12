const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Teacher = require('../models/teacherSchema');


router.post('/teacherrecordadd', async (req, res) => {
    let data = {};
    let recordData = req.body;
    let teacherId = req.user.teacher_id;
    console.log(teacherId);
    console.log(recordData);
    let result = await Teacher.findOneAndUpdate({ teacher_id: teacherId }, {$push:{ teacher_records:recordData}});
        if (result) {
        res.json({
            status: "success",
            message: "Teacher Data added Successfully",
            teacher: result,
        });

    }
    else {
        res.json({
            status: "failure",
            message: "Teacher Not Found"
        });
    }
})

router.get('/techerRecordGet',(req,res)=>{
    const teacherId = req.user.teacher_id;
    console.log(teacherId,"helllo buddy");
    Teacher.find({teacher_id:teacherId}).then((result)=>{
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

router.post('/teacherRecordDelete',(req,res)=>{
    console.log(req.body);
    const id=req.body._id

    console.log(id,"this is id");
    const teacher_Id = req.user.teacher_id;
    Teacher.findOne({teacher_id:teacher_Id}).then(async(result)=>{
        await result.teacher_records.remove({_id:id});
        result.save().then((resu)=>{
            console.log(resu);
            if(resu){
                res.json({
                    status:"success",
                    message:"Teacher Record Deleted Successfully",
                    teacher:resu,
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
})


router.get("/getteacherdetails", (req,res)=>{
    const teacherId = req.user.teacher_id; 
    Teacher.findOne({teacher_id:teacherId},(err,doc)=>{
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


router.post("/postteacherDetails", (req, res)=>{
   const data = req.body;
   console.log(data);
   Teacher.findOneAndUpdate({teacher_id:data.email},{teacher_name: data.name, phonenumber:data.phonenumber,address:data.address,eduction:data.eduction,dateofbirth:data.dateofbirth,city:data.city,pincode:data.pincode,country:data.country,state:data.state }).then((doc)=>{
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