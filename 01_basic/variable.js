const accountId  = 144552;
let accountEmail = "globinx06@gamil.com";
var accountPassword = "12345king";
accountCity = "Basti ";
let accountState;

//  accountId =2; not allowed to change 
accountEmail = "this is hari om ";
accountPassword = "king12345";
accountCity = "New York";
console.log(accountId);

/*

var - global scope or function scope
let - block scope
const - block scope

prefer not to use var
because it is not block scope and it creates confusion 

what is block scope ?
block scope is something which is defined in between {  }
for example if you define a variable in if block or for loop or while loop
then that variable is only accessible in that block
for example
if(true){
    let city = "basti";
    console.log(city); // basti
}
console.log(city); // error city is not defined



*/

console.table([accountEmail, accountPassword, accountCity,accountState]);




