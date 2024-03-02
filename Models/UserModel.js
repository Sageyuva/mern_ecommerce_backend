const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
unique:true
    },
    number:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
   timestamps:true
})


const UserModel = mongoose.model("Users" , UserSchema);
module.exports = UserModel