// ***************** Primitive Data Types *******************

// JavaScript has 7 primitive data types: String, Number, Boolean, Null, Undefined, Symbol, and BigInt

// Number type - stores integer values
const score = 100 

// Number type - stores floating point numbers
const scorevalue = 100.03

// Boolean type - can only be true or false
const isLoogin = false

// Null type - represents intentional absence of any object value
const outside = null

// Undefined type - variable declared but not initialized
let userName; // undefined

// Symbol type - creates unique identifiers for objects
const id = Symbol("123")
const anotherId = Symbol("123")
// Even with same value, Symbols are always unique (id !== anotherId)

// BigInt type - for numbers larger than 2^53
const bigNumber = 123456789012345623456789n


// ***************** Non-Primitive (Reference) Types *******************

// There are 3 main reference types:
// 1. Arrays - ordered collection of values
// 2. Objects - collection of key-value pairs
// 3. Functions - reusable blocks of code

// Array example - stores multiple values in ordered list
const heros = ['shaktiman' , 'naagraj' , 'doga']

// Object example - stores data in key-value pairs
let myObj = {
    name: "hari",     // String value
    age: 22,         // Number value
    isLoggedIn: false // Boolean value
}

// Function example - block of reusable code
const myFunction = function(){
    console.log("hello world")
}

// typeof operator shows the type of a variable
console.log(typeof scorevalue) // will output "number"
