
// const isUserLoggenIn = true
// const temperature = 30 

// if (temperature < 50) {
//     console.log("less than 50")
// }
// console.log("executed")


// const score = 200

// if (score > 100) {
//     let power =  "fly"
//     console.log(`user power : ${power}`)
// }


// const balance = 1000

// if (balance > 500) console.log("test1"),
// console.log("test2")


const userLoggedIn= true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("you can buy")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}