// Immediately Invoked function Expression (IIFE)

(function chai() {
    //named iife
    console.log("Db connection established") // it will log "Db connection established" - this code will run immediately after the function is defined
})();

(() => {
    //simple iife
    console.log("Db connection established") // it will log "Db connection established" - this code will run immediately after the function is defined
})();

((name) => {
    //simple iife
    console.log("Db connection established") // it will log "Db connection established" - this code will run immediately after the function is defined
})("aman")


// iife is used to solve the problem of global scope pollution, it allows us to create a new scope for our variables and functions, so that they do not interfere with other variables and functions in the global scope. It is also used to execute code immediately after it is defined, without having to call the function separately.