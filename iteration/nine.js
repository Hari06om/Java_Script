// Define an array with three numbers
const mynums = [1,2,3]

// Use reduce method to sum up all numbers in the array
// reduce takes a callback function and an initial value (0 in this case)
// const myTotal = mynums.reduce(function (acc, currval){
//     // Log the current state of accumulator and current value in each iteration
//     console.log(`acc: ${ acc} and currval: ${currval}`);
    
//     // Return the sum of accumulator and current value for next iteration
//     return acc + currval
// }, 0)

// const myTotal = mynums.reduce((acc,curr) => acc+curr,0)

// // Print the final total
// console.log(myTotal);



const shoppingCart = [ 
    {
    itemName: "js course",
    price: 2999
    },
    {
    itemName: "html course",
    price: 5999
    },
    {
    itemName: "moblie dev course",
    price: 19999
    },
    {
    itemName: "data science course",
    price: 12999
    },
    {
    itemName: "dev course",
    price: 12399
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(priceToPay)