const User = require("../model/User.js")

const addUser = async (req, res) => {
    try {

        const { name, age } = req.body

        if(!name || !age){
            return res.status(401).json({success:false,message:"Missing required field...!"})
        }
        
        // await User.create({
        //     name,
        //     age
        // })

        const newUser=new User({
            name,
            age
        })

        await newUser.save()
        res.status(200).json({ success: true, message: "User is created...!" })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const getAllUser = async (req,res)=>{
    try {
        const allUsers=await User.find();
        res.status(201).json({
            success:true,
            data:allUsers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const getUserByID = async (req,res)=>{
    try {
        const id=req.params.id
        const user=await User.findById(id);
        res.status(201).json({
            success:true,
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

const updateUserById = async (req,res)=>{
    try {
        const id=req.params.id
        const {name,age}=req.body
        await User.findByIdAndUpdate(id,{
            name, age
        })


        res.status(201).json({
            success:true,
            message: "Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}


module.exports = { addUser, getAllUser, getUserByID, updateUserById}