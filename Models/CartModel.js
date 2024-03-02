const mongoose =require("mongoose")

const CartSchema = new mongoose.Schema({
    user:{
        type:String,
    },
    product:{
        type:String,
    }
},{
    timestamps:true
    })

    const CartModel = mongoose.model("cart", CartSchema)
    module.exports = CartModel