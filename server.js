const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRoute = require("./Routes/UserRoute")
const MenRoute = require("./Routes/MenRoute")
const WomenRoute = require("./Routes/WomenRoute")
const KidsRoute = require("./Routes/KidsRoute")
const CartRoute = require("./Routes/CartRoute")

const app = express();
app.use(express.json())
app.use(cors())


//Connecting To MongoDB
mongoose.connect("mongodb+srv://yadavyuva9632:yuvaecom@cluster0.gbwbqcm.mongodb.net/mernecom")

//implementing User Routes
app.use("/api/user", UserRoute)

//implementing men route
app.use("/api/men" , MenRoute)

//implementing women Route
app.use("/api/women" , WomenRoute)

//implmenting kids Route
app.use("/api/kids", KidsRoute)

//implementing cart route
app.use("/api/cart" , CartRoute)

app.listen(4000 , ()=>{
    console.log("server running on port 4000")
})