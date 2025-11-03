// This code checks if a user is logged in and logs a message to the console if true.

// Declare a constant variable to indicate if the user is logged in
// const isuserLoggedin = true;

// // Check if the user is logged in
// if (isuserLoggedin) {
//     // If the condition is true, log the message to the console
//     console.log("user logg in ");
// }

// The following are comparison operators in JavaScript:
// <  : Less than
// >  : Greater than
// <= : Less than or equal to
// >= : Greater than or equal to
// == : Equal to (value only)
// != : Not equal to (value only)
// ===: Strict equal to (value and type)
// !==: Strict not equal to (value and type)

// const temp = 50; // declare a constant named temp and assign the numeric value 50
// if (temp === 50) { // check strictly (value and type) if temp equals 50
//     console.log("Less then 50 ");   // log a message to the console when the condition is true (note: message text says "Less then 50" though temp === 50)
// } else { // else branch runs when the if condition is false
//     console.log("Temperature is greater than 50 "); // log a message when temp is not strictly 50
// } // end of the if/else block
// console.log("Excute"); // log an independent message that always runs after the if/else (note: "Excute" is likely a typo for "Execute")

// const score = 200; // declare a constant named score and assign the numeric value 200
// if (score > 100) { // check if score is greater than 100
//     let power = "Fly"; // declare a block-scoped constant power with the string value "Fly"
//     console.log(`user power:  ${power}`); // use a template literal to log the user's power including the power variable
// } // end of the if block for score


// console.log(`user power: ${power}`);


// const balance = 1000 
// if(balance < 500){
//     console.log("less than ");
    
// }else if (balance<750){
//     console.log(" LEss than 750");
    
// }
// else{
//     console.log("less than 1200 ");
    
// }

// Declare a constant named `month` and assign a numeric value representing the month.
// Typical convention: 1 = January, 2 = February, ..., 12 = December.
// Using `const` because we don't plan to reassign the variable.
const month = 3;

// The `switch` statement evaluates the expression in parentheses (here, `month`)
// and compares it to each `case` label using strict equality (===).
// When a matching case is found, execution starts at that case.
// The `break` statement prevents execution from "falling through" to subsequent cases.
switch (month) {
    // If month is strictly equal to 1, run this block:
    case 1:
        // Log the month name for case 1
        console.log("january");
        // `break` stops further case checks and exits the switch
        break;

    // If month is strictly equal to 2, run this block:
    case 2:
        console.log("Feb");
        break;

    // If month is strictly equal to 3, run this block:
    case 3:
        console.log("march");
        break;

    // If month is strictly equal to 4, run this block:
    case 4:
        console.log("April");
        break;

    // `default` runs when no `case` matches the evaluated expression.
    // It acts like the `else` branch of an if/else chain.
    default: {
        // Inform the user that the provided number does not match handled cases.
        console.log("Enter the number ");
        // No `break` needed after `default` if it's the last block, but it's allowed.
    }
}

// Notes:
// - `switch` comparisons are strict (no type coercion): the type and value must match.
// - Omitting `break` causes fall-through: the next case's code will execute too.
// - For month ranges or many values, consider using an object lookup or an array for clarity:
//     const names = [null, "January","February","March","April", ...];
//     console.log(names[month] || "Enter the number");

// Nullish coalecing Operator (??):null undefined

let val ;
val = 5 ?? 10

console.log((val));
