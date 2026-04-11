// const promiseOne = new Promise()

function user(username, loginCount, isLoggedInd){
      this.username = username;
      this.loginCount = loginCount;
      this.isLoggedInd = isLoggedInd;

      this.greeting = function(){
        console.log(`welcome ${this.usernamename}`)
      }

      return this
}


const userOne = new user("histesh", 12, true)
const userOneGTwo = new user("histesh", 12, true)
console.log(userOne)