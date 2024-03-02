const express = require('express');
const router = express.Router();
const CartModel = require("../Models/CartModel");
const KidsModel = require("../Models/KidsModel");

const WomenModel = require("../Models/WomenModel")

const MenModel = require("../Models/MenModel")

//save cart details
router.post("/addcart", async (req,res)=>{
    try {
        const product = await CartModel.create(req.body)
        res.json("sucess")
    } catch (error) {
        res.json(error)
    }
})

// fetching cart details by using user id and product id

router.get("/getcart", async (req, res) => {
    try {
        const { user } = req.query; // Using query instead of body for GET request
        const existuser = await CartModel.findOne({ user });
        if (existuser) {
            const menproduct = await MenModel.findById(existuser.product);
            const womenproduct = await WomenModel.findById(existuser.product);
            const kidsproduct = await KidsModel.findById(existuser.product);
            // Returning an array of products instead of concatenating them
            res.json([menproduct, womenproduct, kidsproduct]);
        } else {
            res.json("Nothing is added to cart");
        }
    } catch (error) {
        res.json(error);
    }
});


module.exports = router;