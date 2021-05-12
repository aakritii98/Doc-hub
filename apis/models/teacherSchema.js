const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const teacherRecords = require('./teacher_records_schema')
const teacherSchema = mongoose.Schema({
    department_id:{
        type:String,
        required:true
    },
    teacher_id:{
        type:String,
        required:true
    },
    teacher_name:{
        type:String,
        required:true
    },
    department_name:{
        type:String,
        required:true
    },
    teacher_password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number
    },
    address:{
        type:String
    },
    dateofbirth:{
        type:String
    },
    eduction:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
    pincode:{
        type:Number
    },
    state:{
        type:String
    },
    teacher_records:[teacherRecords],
});



teacherSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.teacher_password,10)
    this.teacher_password = hash;
    next();
});

teacherSchema.methods.isPasswordValid = async function(password){
    let teacher = this;
    console.log(password);
    const res = await bcrypt.compare(password, teacher.teacher_password);
    return res;
}


module.exports = mongoose.model('teachers',teacherSchema);
