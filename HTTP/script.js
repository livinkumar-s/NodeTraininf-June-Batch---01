const http = require("http")

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

// GET /user --> all users details
// POST /adduser --> add a new user
// DELETE /user --> delete a user 


const server = http.createServer(
    (req, res) => {

        // console.log(req.headers.host);


        if (req.method == "GET" && req.url == "/user") {
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify(user))
        }

        else if (req.method == "POST" && req.url == "/adduser") {
            let body = ""
            req.on("data", (part) => {
                body = body + part
            })
            req.on("end", () => {
                let newUser = JSON.parse(body)
                let lastPersonId = user[user.length-1]?.id
                newUser.id=lastPersonId+1
                user.push(newUser)
                res.end("User is added successfully...!")

            })
            res.end()
        }
        else if (req.method="DELETE" && req.url.startsWith("/user?")){
            let userId=Number(req.url.split("=")?.[1])
            
            let userDeleted=false 

            user=user.filter((val)=>{

                if(val.id==userId){
                    userDeleted=true
                }

                return val.id!==userId

            })

            if(userDeleted){
                res.write("User is deleted")
            }else{
                res.write("user not found...!")
            }

            res.end()
            
        }

        else {
            res.statusCode = 404
            res.write("wrong endpoint...!")
            res.end()
        }
    }
)



server.listen(3333, () => {
    console.log("Server is listening on 3333");
})

//localhost:3333


// let a = {
//     name:"Hendry",
//     favMovies:{
//         movies:["24","I"],
//         mostFavMovies:[]
//     }
// }

// console.log(a?.favMovie?.movies?.[0]);
