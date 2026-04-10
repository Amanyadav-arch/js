const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
     // DB calls, cryptography, networkcall

     setTimeout(function() {
        console.log('Async task is complete')
        resolve()
     }, 1000);
})

promiseOne.then(function(){
    console.log("Promsied consumed")
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2')
        resolve()
    }, 1000);
}).then(function(){
    console.log('kam ho gaya')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
         resolve({username: "chai", email: "exampel@gmai.com"})
    }, 1000)
})

promiseThree.then(function(user){
      console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "aman", email: "ex12gmail.com"})
        }
        else{
            reject('ERROR something went wrong')
        }
    }, 1000)
   
})

 promiseFour.then((user) => {
      console.log(user);
      return user.username
}).then((username) => {
     console.log(username)
}).catch(function(error){
      console.log(error)
}).finally(()=> console.log("The promise is either resolved or rejected"))


const  Promisefive= new Promise(function(resolve, reject){
    let error = true;
    setTimeout(function(){
      if(!error){
        resolve({username: "javascript", password: "123"})
      }
      else{
        reject('ERROR: js went wrong')
      }
    }, 1000)
});


async function consumePromise(){
      try {
        const response = await Promisefive
        console.log(response)
      } catch (error) {
        console.log(error)
      }
}


consumePromise()