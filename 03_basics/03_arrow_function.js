const user = {
    username : "aman",
    price : 100,
    
    welcomeMessage : function(){
        console.log(`welcome ${this.username} to our website`) // it will log "welcome aman to our website" - the username property of the user object  
        console.log(this) // it will log the user object itself because this refers to the object that is calling the method
    }
}

//  user.welcomeMessage() // calling the welcomeMessage method of the user object to execute the code inside the method body
// user.username = "john" // updating the username property of the user object to "john"
// user.welcomeMessage() // calling the welcomeMessage method of the user object again to see the updated username in the message
//  user.welcomeMessage(this) // it will log the user object itself because this refers to the object that is calling the method, in this case, it's the user object




// function aman(){
//     console.log(this) // it will log the global object (window in browsers) because this refers to the global object when the function is called in the global scope
// }

// aman() // calling the aman function to see the global object logged


// const aman = function(){
//     let username = "yadav"
//     console.log(this) // it will log the global object (window in browsers) because this refers to the global object when the function is called in the global scope
// }

// aman()




// const aman = () => {
//     let username = "yadav"
//     console.log(this) // it will log the global object (window in browsers) because this refers to the global object when the function is called in the global scope, arrow functions do not have their own this, they inherit this from the surrounding scope
// }

// aman()




// const addTwo = (a, b) => {
//     return a + b // it will return the sum of a and b
// }


// implict function

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username : "aman"})
const result =addTwo(3, 5)
console.log(result)