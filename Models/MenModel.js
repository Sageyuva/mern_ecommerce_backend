const mongoose = require("mongoose")

const MenSchema = new mongoose.Schema({
    url:{
        type:String,
    },
    name:{
        type:String,
    },
    price:{
        type:Number,
    }
},{
    timestamps:true
})

const MenModel = mongoose.model("Men" , MenSchema)
module.exports= MenModel