const clock = document.querySelector('#clock')


setInterval((e) => {
  let date = new Date()
  clock.innerHTML = date.toLocaleString()
}, 1000)



// const clock = document.getElementById("clock")

// setInterval(function(){
//   let date = new Date()
//   // console.log(date.toLocaleString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);