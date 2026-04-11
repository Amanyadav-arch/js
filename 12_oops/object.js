const user = {
    username: "Aman",
    logincound: 8,
    singnedIn: true,

    getUserDetail: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }
}
const user2 = {
    username: "Ravi",
    logincound: 10,
    singnedIn: true,

    getUserDetail1: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }
}


console.log(user.username);
console.log(user.getUserDetail());