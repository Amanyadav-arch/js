const marvel_heroes = ["thor", "ironman", "hulk", "captain america"];
const dc_heroes = ["superman", "batman", "wonder woman", "flash"];

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[4][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)

const allHeroes = [...marvel_heroes, ...dc_heroes] // spread operator - it takes all the elements of the array and spreads them into a new array
console.log(allHeroes) 

const another_array = [1, 2, 3,[4, 5, 6], [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // flat method - it flattens the array to the specified depth, Infinity means it will flatten all the nested arrays
console.log(real_another_array)


console.log(Array.from("helloworld")) // creates an array from a string, each character becomes an element of the array

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3)) // creates an array from the specified arguments, each argument becomes an element of the array