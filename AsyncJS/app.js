// console.log(1);
// setTimeout(() => { console.log("Time Over...!") }, 5000)
// setTimeout(() => { console.log("Time is on..!") }, 2000)
// console.log(2);
// console.log(3);


// function getUser(cb) {
//     // trying to fetch user details from API
//     const success = false

//     setTimeout(() => {
//         if (!success) {
//             cb("Something went wrong...!", null)
//         } else {
//             cb(null, "User Fetched Successfully")
//         }
//     }, 2000)
// }

// function saySuccess(){
//     console.log("We Got it...!");
// }

// getUser((err, message) => {

// })
// saySuccess()


let userDetails = [
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Hendry"
    },
]

let post = [
    {
        postId: 1,
        userId: 2
    },
    {
        postId: 2,
        userId: 2
    },
    {
        postId: 3,
        userId: 1
    }
]

let postDetails = [
    {
        postId: 1,
        name: "Wonder",
        Description: "****************************************"
    },
    {
        postId: 2,
        name: "Beauty",
        Description: "****************************************"
    },
    {
        postId: 3,
        name: "India",
        Description: "****************************************"
    },
]

function getUsers(uname) {
    return new Promise((resolve, reject) => {
        let user = userDetails.find((val) => {
            return val.name == uname
        })
        setTimeout(() => {
            if (user) {
                resolve(user)
            } else {
                reject("User not found...!")
            }
        }, 1000)
    })

}

function getPosts(id) {
    return new Promise((resolve, reject) => {
        const posts = post.filter((val) => {
            return val.userId == id
        })
        setTimeout(() => {
            if (post.length > 0) {
                resolve(posts)
            } else {
                reject("No post found")
            }
        }, 1000)
    })
}


function getPostDetails(id) {
    return new Promise((resolve, reject) => {
        let postDetail = postDetails.find((val) => {
            return val.postId == id
        })
        setTimeout(() => {
            if (postDetail) {
                resolve(postDetail)
            } else {
                reject("Not found")
            }
        }, 1000)
    })


}



// getUsers("John").then((data) => {
//     console.log(data)
//     return getPosts(data.id)
// }).then((data)=>{
//     console.log(data);
//     return getPostDetails(data[0].postId)
// }).then((data)=>{
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// async function gettingPostDetail() {
//     try {
//         const data=await getUsers("John Depp")
//         console.log(data);

//         const posts=await getPosts(data.id)
//         console.log(posts);

//         const postDetail = await getPostDetails(posts[0].postId)
//         console.log(postDetail);

//     } catch (error) {
//         console.log(error);
//     }
// }

// gettingPostDetail()

// getPostDetails(2).then((data)=>{
//     console.log(data)

// }).catch((err)=>{
//     console.log(err);

// })


const fs = require("fs").promises

// fs.readFile("../Notes.txt","utf-8",(data,err)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(data);
// })

// fs.readFile("../Notes.txt","utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// async function getText() {
//     try {
//         let data = await fs.readFile("../Notes.txt", "utf-8")
//         console.log(data);

//     } catch (error) {
//         console.log(error);

//     }
// }

// getText()