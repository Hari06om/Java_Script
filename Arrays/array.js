// array 

// Initialize an array with numbers 0 to 5
const myArr = [0, 1, 2, 3, 4, 5]

// Uncomment the following line to create an array of superhero names
// const myHero = ["Iron man", "Captain America", "Spiderman"]

// Uncomment the following line to create an array using the Array constructor
// const myArr1 = new Array(1, 2, 3, 4, 5)

// Log the element at index 4 of myArr (which is 4)
// console.log(myArr[4]);

// Uncomment the following line to log myArr1
// console.log(myArr1);

// Add elements 6 and 7 to the end of myArr
// myArr.push(6)
// myArr.push(7)

// Remove the last element from myArr
// myArr.pop()

// Check if the number 9 is included in myArr and log the result (false)
// console.log(myArr.includes(9));

// console.log(myArr.indexOf(9));


// Uncomment the following line to add 9 to the beginning of myArr
// myArr.unshift(9)

// Remove the first element from myArr
myArr.shift()

// Log the modified myArr
// console.log(myArr);

/**
 * The string result of calling Array.prototype.join() on the array `myArr`.
 *
 * Elements of `myArr` are converted to strings and concatenated. Because no separator argument is provided,
 * the default separator (",") is used. Note that `undefined` and `null` elements become empty strings,
 * and sparse array holes are treated as empty slots.
 *
 * @type {string} 
 * @example
 * // If myArr = [1, 'a', true], the resulting value will be "1,a,true"
 */
const newArr = myArr.join()

// console.log( newArr);



//slice ,splice 

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn1);
console.log(myn2);


