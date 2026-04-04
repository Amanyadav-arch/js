const array = [1, 2, 3, 4, 5]
const myHeros = ['Batman', 'Superman', 'Spiderman']
// array = [1, 2, 3, 4, 5, 6] // error because array is a constant variable    
console.log(array[0])
console.log(myHeros[0])



// ************************************array methods************************************
// array.push(6) // adds an element to the end of the array
// array.push(7) // adds an element to the end of the array
// array.pop() // removes the last element of the array
// array.unshift(0) // adds an element to the beginning of the array
// array.shift() // removes the first element of the array


// console.log(array)
// console.log(array.length) // returns the length of the array
// console.log(array.includes(9)) // returns true if the array contains the element, false otherwise


// const newArr = array.join(",") // joins the elements of the array into a string, separated by the specified separator
// console.log(array) // [1, 2, 3, 4, 5] - original array is not modified
// console.log(newArr) // "1,2,3,4,5"



// slice and splice
const newArr = array.slice(0, 3) // returns a new array containing the elements from index 0 to index 2 (not including index 3)
console.log(array) // [1, 2, 3, 4, 5] - original array is not modified
console.log(newArr) // [1, 2, 3]