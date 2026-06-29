const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const userRouter=require("./routes/userRoute.js")

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
    console.log("Connection is successfull..!");
}).catch((err) => {
    console.log(err);
})

const app = express()


// app.post("/user",(req,res)=>{

// })

app.use(express.json())

app.use("/api/user",userRouter)


app.listen(3333, () => {
    console.log("Server is running on 3333!");

})
