// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}


const greeting = 'Hello';

for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
}


// Maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set('city', 'New York');

// console.log(map);


for (const [key, value] of map) {
    // console.log(`${key}: ${value}`);
}


const myObj = {
    game1 : 'Chess',
    game2 : 'Football',
    game3 : 'Basketball'
}

for (const [key, value] of myObj) {
    console.log(`${key}: ${value}`); // TypeError: myObj is not iterable
}