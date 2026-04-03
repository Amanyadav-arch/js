const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Types of datatype => Primitives and Non-Primitives
// primitives => number, string, boolean, numll. undefined, symbol, bigint
// non-primitives => object, array, function

// Primitives are immutable and non-primitives are mutable

const heros = ['ironman', 'spiderman', 'thor']
console.log(heros)

let my_obj = {
    name: "aman",
    age: 22,
    isStudent: true,
}
console.log(my_obj)

function myFunc() {
    console.log("This is my function")
}

myFunc()
console.log(typeof myFunc)
