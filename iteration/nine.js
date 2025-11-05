// Define an array with three numbers
const mynums = [1,2,3]

// Use reduce method to sum up all numbers in the array
// reduce takes a callback function and an initial value (0 in this case)
const myTotal = mynums.reduce(function (acc, currval){
    // Log the current state of accumulator and current value in each iteration
    console.log(`acc: ${ acc} and currval: ${currval}`);
    
    // Return the sum of accumulator and current value for next iteration
    return acc + currval
}, 0)

// Print the final total
console.log(myTotal);
