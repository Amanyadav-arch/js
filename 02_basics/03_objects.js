// singleton
// object leteral

const mySym = Symbol("key1")

const jsUser = {
    name: "John",
    [mySym]: "value1",
    "full name": "John Doe",
    age: 30,
    email: "john@example.com"
    
}

// console.log(jsUser[mySym]) // "value1" because mySym is a symbol and it is accessed using square brackets

// jsUser.email = "aman@example.com" // updating the value of email property
// jsUser.isLoggedIn = true // adding a new property to the object
// Object.freeze(jsUser) // freezing the object - it prevents any changes to the object, including adding new properties, updating existing properties, and deleting properties
// console.log(jsUser.email)
console.log(jsUser)


jsUser.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`) // this keyword refers to the current object
}

console.log(jsUser.greeting()) // calling the greeting method of the jsUser object