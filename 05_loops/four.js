const myObject = {
    js : "javascript",
    cp : "c++",
    py : "python",
    rb : "ruby"
}

for (const key in myObject) {
    // console.log(`${key}: ${myObject[key]}`);
}


const programming = ["js", "cp", "py", "rb"];

for (const index in programming) {
     console.log(`${index}: ${programming[index]}`);
}