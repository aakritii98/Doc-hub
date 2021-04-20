const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    institutecode:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


userSchema.pre('save',async function(next){
    const hash = await bcrypt.hash(this.password,10)
    this.password = hash;
    next();
})
userSchema.methods.isPasswordValid = async function(password){
    user = this;
    console.log(password);
    bcrypt.compare(password, user.password,(err,result)=>{
            if(result){
                console.log("hlfkgkfkg");
                return result
            }
            else {
                return err;
            }
    });
}

module.exports = mongoose.model('user',userSchema);