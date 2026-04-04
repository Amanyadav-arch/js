// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

// Types of datatype => Primitives and Non-Primitives
// primitives => number, string, boolean, numll. undefined, symbol, bigint
// non-primitives => object, array, function

// Primitives are immutable and non-primitives are mutable

// const heros = ['ironman', 'spiderman', 'thor']
// console.log(heros)

// let my_obj = {
//     name: "aman",
//     age: 22,
//     isStudent: true,
// }
// console.log(my_obj)

// function myFunc() {
//     console.log("This is my function")
// }

// myFunc()
// console.log(typeof myFunc)


// *************************************************************Type of memory*********************************************************************************************

// 1. Stack memory => it stores primitive data types , copy of primitive data types is stored in stack memory
// 2. Heap memory => it stores non-primitive data types, copy of non-primitive data types is stored in stack memory but the actual value is stored in heap memory and both the copies point to the same location in heap memory

let my_name = "aman"
let another_name = my_name
another_name = "aman kumar"

console.log(my_name)
console.log(another_name)