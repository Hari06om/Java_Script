const name = "hari "
const repoCount = 50



//console.log(name + repoCount + " value");


console.log(`Hello ${name} you have ${repoCount} repo`); //template string

const gameName = new String("chess") // creating string object
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__); // to see all the methods in string
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
console.log(gameName.includes('s'));
console.log(gameName.startsWith('c'));
console.log(gameName.endsWith('s'));
console.log(gameName.trim());
console.log(gameName.split('e'));
console.log(gameName.replace('ch', 'p'));
console.log(gameName.valueOf());
console.log(gameName.concat(' is a fun game'));
console.log(gameName.repeat(3));
console.log(gameName.slice(0,3));
console.log(gameName.substring(0,3));
console.log(gameName.substr(0,3));
console.log(gameName.lastIndexOf('s'));
