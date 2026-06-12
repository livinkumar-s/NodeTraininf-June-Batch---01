// console.log(1);

// API call - 5 sec

// console.log(2);
// console.log(3);

// function hello(){
//     console.log("Step1");
//     console.log("Step2");
//     console.log("Step3");

// }

// hello()

// const sayHello = ()=>{
// console.log(1);
// console.log(2);
// console.log(3);

// }

// sayHello()

// ()=>{
// console.log("Livin");
// }


// function add100(n){
//     console.log(n+100);
// }

// // const a=100

// add100(100)


// function getCB(a){ //sayHello
//     console.log("I am called..!");
//     a()
// }

// function sayHello(){
//     console.log("Hello");
// }

// getCB(()=>{console.log("Hello")})

//getCB --> Higher order
//sayHello --> CB function

// function sayHello(a,b){ //a=fn, b="Leo"
//     a(b) //arrowFn("Leo")
// }

// sayHello(
//     (name)=>{console.log("Hello"+name)},
//     "Leo"
// )

// file hadling 
// setTimeout
// api Call 

//reading content --> text (5s)
// console.log("file has been read");

// const fs=require("fs")

// fs.readFile("../Notes.txt","utf8",(err,data)=>{
//     if(err){
//         return console.log(err);
//     }

//     console.log(data);
//     console.log("I have read it...!");

// })

// console.log("Hello guys...!");
// console.log("I am reading a file....");



function getUserDetails(cb) {
    //API Call Simulation
    const success = true
    setTimeout(() => {
        if (success) {
            cb("User is Fetched", null)
        } else {
            cb(null, "Something went wrong while fetching user details")
        }
    }, 3000)
}


function getPost(cb) {
    //API Call Simulation
    const success = true
    setTimeout(() => {
        if (success) {
            cb("User Posts are Fetched", null)
        } else {
            cb(null, "Something went wrong while fetching user posts")
        }
    }, 2000)
}

function getPostDetails(cb) {
    //API Call Simulation
    const success = true
    setTimeout(() => {
        if (success) {
            cb("Post Details are Fetched", null)
        } else {
            cb(null, "Something went wrong while fetching post Details...")
        }
    }, 500)
}

getUserDetails((data, err) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    getPost((data, err) => {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        getPostDetails((data, err) => {
            if (err) {
                return console.log(err);
            }
            console.log(data);

        })

    })

})


console.log("Welcome to my code...!");



