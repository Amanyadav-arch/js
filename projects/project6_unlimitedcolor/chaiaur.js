// // generate random color


const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    
    for(let i = 0; i < 6; i++){
       color += hex[Math.floor(Math.random() * 16)]
    }
   return color; 
}

let intervalId;
const startChangingColor = function(){
    
    const changeBg = function(){
        document.body.style.backgroundColor = randomColor()
    }
    
    if(!intervalId){
        intervalId = setInterval(changeBg,1000)
    }
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}


document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)

















// //Generate a randonm color
// const randomColor = function(){
//   const hex = "0123456789ABCDEF"
//   let color = '#'
//   for(let i = 0; i < 6; i++){
//      color += hex[Math.floor(Math.random() * 16 )];
//   }
//   return color;
// }

// let intervalId;
// const startChangingColor = function(){
  
//   if(!intervalId){
//     intervalId = setInterval(changeBgColor, 1000)
//   }

//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor()
//   } 
// };
// const stopChangingColor = function(){
//     clearInterval(intervalId)
//     intervalId = null; // to free the memory
// };

// document.getElementById('start').addEventListener('click', startChangingColor)


// document.getElementById('stop').addEventListener('click', stopChangingColor)