const express = require('express');
const router = express.Router();
const MenModel = require("../Models/MenModel")

//create product
router.post("/addproduct" , async(req,res)=>{
    try {
        const Product =await MenModel.create(req.body)
        res.json("sucess")
    } catch (error) {
        res.json(error)
    }
})
//get products
router.get("/getproducts" , async(req,res)=>{
    try {
        const Product = await MenModel.find({})
        res.json(Product)
    } catch (error) {
        res.json(error)
    }
})
module.exports = router;