
/**
 * Logs the letters of the word "HARIOM" to the console, one letter at a time.
 *
 * This function does not take any parameters and does not return any value.
 * It is primarily used for demonstration or educational purposes to show
 * how to log multiple lines to the console.
 */
function say(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("O");
    console.log("M");

}
// say()


// function  addtwonumber(a,b){
//    console.log(a+b);
   
// }

/**
 * Adds two values using the JavaScript + operator and returns the result.
 *
 * This function is intended for numeric addition and will return the arithmetic
 * sum when both arguments are numbers. Because it uses the built-in + operator,
 * passing non-number values can change the behavior:
 *  - If either operand is a string, values are concatenated (e.g. '2' + 3 === '23').
 *  - If values cannot be meaningfully coerced to numbers, the result may be NaN.
 *
 * The function is pure and has no side effects — it only computes and returns a value.
 *
 * @param {number} a - First addend. Expected to be a finite number.
 * @param {number} b - Second addend. Expected to be a finite number.
 * @returns {(number|string)} The numeric sum of a and b when both are numbers; otherwise the direct result of the + operation (may be a string or NaN).
 *
 * @example
 * // numeric addition
 * addtwonumber(2, 3); // => 5
 *
 * @example
 * // mixed types: string concatenation
 * addtwonumber('2', 3); // => '23'
 */
function  addtwonumber(a,b){
    let result = a + b ;
    return result    
    // return a+b
}
const result = addtwonumber(5,6)

// console.log("Result: " , result);



function loginuser(username){
    if(username === undefined){
        console.log("Please enter the user name ");
        return
    }
    return `${username} just loged in `
}

console.log(loginuser("Hari om "));
console.log(loginuser());