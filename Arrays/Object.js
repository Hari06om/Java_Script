// singletone

// Object literals 

// Object.create


const mySym = Symbol("Key1")


const jsUser = {
    name : "Hari om Verma",
    "Full name": "Nikhil Verma",
    [mySym] : "MyKey1",
    age: 18,
    location: "punjab",
    email : "google.com",
    isLoggedIn : false ,
    lastLoginDay:["Monday","Tuesday"]


}

console.log(jsUser.age);
console.log(jsUser["email"]);
console.log(jsUser["Full name"]);
console.log(jsUser[mySym]);




//object 

jsUser.email = "niki@gmail.com"
Object.freeze(jsUser)
jsUser.email =  "Globinx06@gmail.com"
console.log(jsUser);





