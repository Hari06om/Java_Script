/**
 * @file Checks whether a predefined user email is present and logs the result.
 *
 * @description
 * Declares a constant named `userEmail` that holds an email address, then verifies its presence
 * using a truthiness check. If `userEmail` evaluates to a truthy value, the script logs a message
 * indicating the email was received; if it evaluates to a falsy value, it logs that the email
 * was not received. This is a simple presence check and does not validate email format.
 *
 * @constant {string} userEmail
 *   The user's email address stored as a string. Intended to represent a previously obtained
 *   value (for example, from user input or a stored profile). Presence is determined by
 *   JavaScript truthiness rather than explicit emptiness or format checks.
 *
 * @remarks
 * - Side effects: writes to the console:
 *     - when present (truthy): logs a positive receipt message,
 *     - when absent (falsy): logs a negative receipt message.
 * - This presence check does not perform validation (e.g., regex or domain checks).
 *
 * @note
 * In JavaScript, the following values are considered falsy and will cause the "not received"
 * branch to execute if `userEmail` equals any of them:
 *   false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN
 *
 * @example
 * - If `userEmail` is a non-empty string (e.g., a typical email address), the script logs that
 *   the email was received.
 * - If `userEmail` is an empty string or one of the falsy values listed above, the script logs
 *   that the email was not received.
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
// Declare a constant variable userEmail and assign it an email address
const userEmail = "hariom@gmail.com"

// Check if userEmail has a truthy value (i.e., it is not null, undefined, or an empty string)
if(userEmail){
    // If userEmail is truthy, log a message indicating that the user email was received
    console.log("got the user email");
    
}else{
    // If userEmail is falsy, log a message indicating that the user email was not received
    console.log("dont have user email");
}





// falsy value

// false , 0 , -0 , BigInt 0n ,"",null,undefine , NaN ,


// truly

// "0" , 'false' , " " ,[],{},funciton(){},

