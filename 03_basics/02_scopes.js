
// var c  = 30
// let a = 10
// if (true) {
//     let a = 40 // this variable is only accessible within this block
//     const b = 50 // this variable is only accessible within this block
//     var c = 60 // this variable is accessible outside the block as well, it will overwrite the previous value of c
//     console.log("inner a:", a)
// }


// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const username = "aman" // this variable is only accessible within the one function

    function two(){
        const website = "youtube" // this variable is only accessible within the two function
        // console.log(username) // it will log "aman" - the username variable from the one function
    }
   // console.log(website) // it will throw an error because website is not defined in the one function
    two() // calling the two function to execute the code inside the two function body
}

one()


if (true) {
    const username = "aman" // this variable is only accessible within this block
    if (username === "aman") {
        const website = " youtube" // this variable is only accessible within this block
       // console.log(username + website)
    }
   // console.log(website) // it will throw an error because website is not defined in this block
}


//console.log(username) // it will throw an error because username is not defined in this block



//***********************************************intersting ***************************************** */

function addone(num) {
    return num + 1
}

 const result = addone(5) // it will return 6, and we are storing the result in the result variable
 console.log(result)


  const addTwo = function(num) {
    return num + 2
 }

 const result2 = addTwo(5) // it will return 7, and we are storing the result in the result2 variable
 console.log(result2)   