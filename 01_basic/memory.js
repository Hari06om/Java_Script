// Stack  (primitives, function calls)
// Stack memory is used for static memory allocation and function call management.


let myYoutubeName = "hari"

let anotherName = myYoutubeName
anotherName = "codewithharry"
// console.log(myYoutubeName);
// console.log(anotherName);


// Heap   (objects, arrays)

// Heap memory is used for dynamic memory allocation where objects and arrays are stored.
let userOne = {
    name: "hari",
    age: 18,
    upi: "hari@oksbi"
    
}

let userTwo = userOne
userTwo.name = "codewithharry"
userTwo.age = 22
console.log(userOne.name);
console.log("**********");
console.log(userTwo.name);
// Both userOne and userTwo point to the same object in heap memory. Changes made through userTwo are reflected in userOne.
// This is because objects are reference types in JavaScript.


