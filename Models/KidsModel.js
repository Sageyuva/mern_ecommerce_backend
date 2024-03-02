const mongoose = require("mongoose")

const kidsSchema = new mongoose.Schema({
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

const KidsModel = mongoose.model("Kids" , kidsSchema)
module.exports= KidsModel