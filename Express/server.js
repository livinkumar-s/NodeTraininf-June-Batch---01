const express = require("express")

let user = [
    {
        id: 1,
        name: "Ken"
    },
    {
        id: 2,
        name: "Kelly"
    }
]

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log("Req Received");
    next()
})

app.get("/user", (req, res) => {
    // console.log("Request Received....!");
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.body);
    // console.log(req.headers)
    // console.log(req.url);
    // console.log(req.method);

    // res.send("Hello Guys....!")
    res.status(201).json(
        user
    )
})

app.post("/addUser", (req, res) => {
    const newUser = req.body
    let lastPersonId = user[user.length - 1]?.id
    newUser.id = lastPersonId + 1
    user.push(newUser)
    res.status(200).json({
        success: true,
        message: "User is added...!"
    })
})


app.delete("/user", (req, res) => {
    const userId = Number(req.query.id)
    
    let userDeleted = false

    user = user.filter((val) => {

        if (val.id == userId) {
            userDeleted = true
        }

        return val.id !== userId

    })

    if (userDeleted) {
        res.status(200).json({
            success:true,
            mesage:"User deleted!"
        })
    } else {
        res.status(400).json({
            success:false,
            message:"User not found"
        })
    }
})

app.listen(3333, () => {
    console.log("API is running on 3333!");
})

// Request is received --> handle req