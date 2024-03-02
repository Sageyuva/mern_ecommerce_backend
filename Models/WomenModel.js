const mongoose = require("mongoose")

const WomenSchema = new mongoose.Schema({
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

const WomenModel = mongoose.model("Women" , WomenSchema)
module.exports= WomenModel