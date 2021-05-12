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
    },
    phonenumber:{
        type:Number
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
    }

})



departmentSchmema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.department_password,10)
    this.department_password = hash;
    next();
})
departmentSchmema.methods.isPasswordValid = async function(password){
    department = this;
    console.log(password);
    const res = await bcrypt.compare(password, department.department_password);
    return res;
}

module.exports = mongoose.model('departments',departmentSchmema);