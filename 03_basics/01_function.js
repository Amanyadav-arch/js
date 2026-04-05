

function sayMyName() {
    console.log("H")
    console.log("e")
    console.log("l")
    console.log("l")
    console.log("o")
}

// sayMyName() // calling the function to execute the code inside the function body

// function addTwoNumbers(num1, num2) {
//     return num1 + num2 // returning the sum of num1 and num2
// }

// const result = addTwoNumbers(3, 5) // calling the function with arguments 3 and 5, it will return 8
// console.log(result)


function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username")
        return // it will exit the function and return undefined
    }
    return `${username} just logged in` // it will return the message with the username
}

// console.log(loginUserMessage("aman"))// "Please enter a username" and returns undefined


function calculateCartTotal(...num1) {
    return num1
}

// console.log(calculateCartTotal(5, 10)) // it will return an array containing the arguments passed to the function

let user = {
    username : "aman",
    score : 100,
}

function handleOject(anyObject) {
    console.log(`username is ${anyObject.username} and score is ${anyObject.score}`) // it will log the username and score properties of the object passed as an argument
}

// handleOject(user) // it will log "aman" - the username property of the user object

handleOject({
    username : "john", 
    score : 200
})