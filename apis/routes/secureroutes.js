const express = require('express');
const router = express.Router();
router.get("/checkauthFromFront",(req,res)=>{
    if(req.user){
        res.json({status:'success',message:'User verfyfied'});
    }
})

module.exports = router;