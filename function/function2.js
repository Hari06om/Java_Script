// Define a function that takes multiple parameters (var1, var2, and rest using spread operator)
function calculateCartPrice(var1, var2, ...num1){
    // Returns only the rest parameters (num1), excluding var1 and var2
    return num1 
}

// Calls function with 5 arguments: 200,300,400,600,500
// First two (200,300) go to var1 and var2
// Remaining three (400,600,500) are collected in num1 array
console.log(calculateCartPrice(200, 300, 400, 600, 500));


const user ={
    username : "Hari om" ,
 
    price :400
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)

handleObject({
    username :"sam ",
    price : 300
})


const myNewArray =[200,400,100,600]

function returnsecondValue(getarray){
    return getarray[1]
}

// console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200,300,400,600]));


