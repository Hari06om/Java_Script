// Declare a variable 'a' with block scope using 'let' and assign it the value 10
// let a = 10 

// Declare a constant 'b' with block scope using 'const' and assign it the value 20
// const b = 20 

// Declare a variable 'c' with function scope using 'var' and assign it the value 30
// var c = 30 

// Start a block scope with an 'if' statement that always evaluates to true
if(true){
    // Declare a variable 'a' with block scope using 'let' and assign it the value 10
    let a = 10 
    
    // Declare a constant 'b' with block scope using 'const' and assign it the value 20
    const b = 20 
    
    // Declare a variable 'c' with function scope using 'var' and assign it the value 30
    var c = 30 
}

// Attempt to log the value of 'a' to the console, but it will be undefined outside the block scope
// console.log(a);

// Attempt to log the value of 'b' to the console, but it will throw a ReferenceError since 'b' is block scoped
// console.log(b);

// Log the value of 'c' to the console, which will output 30 since 'c' is function scoped and accessible here
console.log(c);


