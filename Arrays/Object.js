// Symbol declaration - Creates a unique identifier
const mySym = Symbol("Key1")

// Object literal declaration
// This demonstrates different ways to define properties in an object
const jsUser = {
    // Regular property notation
    name: "Hari om Verma",
    // Property with space using string notation
    "Full name": "Nikhil Verma",
    // Using computed property name with Symbol
    [mySym]: "MyKey1",
    age: 18,
    location: "punjab",
    email: "google.com",
    isLoggedIn: false,
    // Array as a property value
    lastLoginDay: ["Monday", "Tuesday"]
}

// Different ways to access object properties
// console.log(jsUser.age);           // Dot notation
// console.log(jsUser["email"]);      // Bracket notation
// console.log(jsUser["Full name"]);  // Bracket notation (required for properties with spaces)
// console.log(jsUser[mySym]);        // Accessing Symbol property

// Modifying object properties
jsUser.email = "niki@gmail.com"

// Uncomment to prevent modifications to the object
// Object.freeze(jsUser)

jsUser.email = "Globinx06@gmail.com"

// Adding a method to the object
jsUser.greeting = function() {
    console.log("Hello JS User");
    return "Greeting message"; // Added return statement
}

// Correct way to call the method
jsUser.greeting(); // Call the greeting method

// Alternative way to define methods
const userMethods = {
    getInfo() {
        return `User ${this.name} from ${this.location}`;
    },
    
    isActive() {
        return this.isLoggedIn;
    }
}

// Add additional methods to jsUser
Object.assign(jsUser, userMethods);

// Export the object if needed
// module.exports = jsUser;
