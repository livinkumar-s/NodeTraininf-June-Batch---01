const express=require("express")
const {addUser, getAllUser, getUserByID,updateUserById}=require("../controller/userController.js")

const Router =express.Router()

//post host/api/user/adduser

Router.get("/alluser",getAllUser)
Router.get("/user/:id",getUserByID)
Router.post("/adduser",addUser)
Router.put("/user/:id",updateUserById)

module.exports=Router;

