const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const departmentSchmema = mongoose.Schema({
    admin_id:{
        type:String,
        required:true
    },
    department_name:{
        type:String,
        required:true
    },
    department_id:{
        type:String,
        unique:true,
        required:true,
    },
    department_password:{
        type:String,
        required:true
    }
})



departmentSchmema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.department_password,10)
    this.department_password = hash;
    next();
})
departmentSchmema.methods.isPasswordValid = async function(password){
    user = this;
    console.log(password);
    bcrypt.compare(password, department.department_password,(err,result)=>{
            if(result){
                console.log("hlfkgkfkg");
                return result
            }
            else {
                return err;
            }
    });
}

module.exports = mongoose.model('departments',departmentSchmema);