const name = "aman"
const repoCount = 50 

console.log(`my name is ${name} and i have ${repoCount} repositories`)


// *****************************string methods*******************************

const gameName = String('amanyadav')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))


// const newgameName = gameName.slice(0, 4)
// const newgameName = gameName.split('')
// const newgameName = gameName.substring(0, 4)
// console.log(newgameName)


const newStingone = "   aman   "
console.log(newStingone)
console.log(newStingone.trim())


const url = "https://aman.com/aman%20yadav"
console.log(url.replace("%20", "-"))
console.log(url.includes("-"))
console.log(url.bold())