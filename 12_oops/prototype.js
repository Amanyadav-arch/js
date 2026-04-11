// let myName = "aman"

// console.log(myName.trim().len)


let myHeroes = ["thor", 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        //    console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all object`)
}

heroPower.hitesh()


let anotherUsername = "chaiaurcode    "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.truelength()