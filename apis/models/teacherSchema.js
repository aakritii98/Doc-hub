const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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
    }
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
