// let tinder = new Object() // singleton object

let tinderUser = {} // object literal - it is a way to create an object using curly braces and key-value pairs

tinderUser.name = "Tinder"
tinderUser.users = 1000000
tinderUser.isPopular = true
// console.log(tinderUser) // { name: "Tinder", users: 1000000, isPopular: true }


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userName: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}

// console.log(regularUser.fullname.userName.firstName) // "John" - accessing nested properties of the object)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj4 = {5: "e", 6: "f"}

// const newObj = {...obj1, ...obj2, ...obj4}
// console.log(newObj)

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)


//array of objects

const users = [
    {
        id : 1,
        name: "John",
        age: 30
    },
    {
        id : 2,
        name: "Jane",
        age: 25
    },
    {
        id : 3,
        name: "Bob",
        age: 35
    }
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // returns an array of the keys of the object
console.log(Object.values(tinderUser)) // returns an array of the values of the object
console.log(Object.entries(tinderUser)) // returns an array of the key-value pairs of the object, each key-value pair is an array of two elements, the first element is the key and the second element is the value

console.log(tinderUser.hasOwnProperty("isPopula")) // returns true if the object has the specified property, false otherwise   

