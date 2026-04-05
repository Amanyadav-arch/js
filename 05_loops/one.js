// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element === 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }


let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}


for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        // break; // it will stop the loop when i is 5
        continue; // it will skip the rest of the code in the loop when i is 5 and continue with the next iteration of the loop
    }
    console.log(`the value of i is ${i}`);
    
}