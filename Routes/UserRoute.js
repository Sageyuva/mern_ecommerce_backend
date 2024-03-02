const express = require('express');
const router = express.Router();
const UserModel = require("../Models/UserModel");
const session = require("express-session");

//MiddleWare to create session
router.use(session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true
}));

//Login User
router.post("/logUser", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            if (password === user.password) {
                req.session.user = user //creating session for user
                res.status(201).json({ "message": "User login successful" ,"id":user._id});
            } else {
                res.status(400).json({ "message": "Wrong password" });
            }
        } else {
            res.status(404).json({ "message": "User doesn't exist" });
        }
    } catch (error) {
        res.status(500).json({ "message": "Server Error" });
    }
});


// Logout User
router.get("/logout", async (req, res) => {
    req.session.destroy(); // end user session
    res.status(200).json({ "message": "User logged out successfully" });
});

//Creating New User
router.post("/regUser" , async(req,res)=>{
    try {
        const  newUser = await UserModel.create(req.body)
        res.json(newUser)
    } catch (error) {
        res.json(error)
    }
})


//Get All Users
router.get("/getuser" ,async(req ,res)=>{
    try {
        const users = await UserModel.find({})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
} )

module.exports = router;