// two arrays of heroes
const marvel = ["thor ", "Ironman", "spiderman"];
const dchero = ["superman", "flash", "batman"];

// 1) push(array)
// push adds its argument as a single element to the end of the array (it mutates the array).
// Example below uses a copy so the original `marvel` stays unchanged for demonstration.
const copyOfMarvel = [...marvel];
copyOfMarvel.push(dchero);
console.log("After push:", copyOfMarvel);
// Output: ["thor ", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// Note: dchero is added as one array element (nested array).

// 2) concat(array)
// concat returns a new array that joins elements. It does NOT mutate the originals.
const allHeroConcat = marvel.concat(dchero);
console.log("After concat:", allHeroConcat);
// Output: ["thor ", "Ironman", "spiderman", "superman", "flash", "batman"]

// 3) spread operator
// The spread syntax also creates a new, flattened array of elements.
const allHeroSpread = [...marvel, ...dchero];
console.log("After spread:", allHeroSpread);
// Output: ["thor ", "Ironman", "spiderman", "superman", "flash", "batman"]

// Note: In your original file there was an incomplete line "con" — remove it.st allNewHero = [...marvel,...dc]


/**
 * anotherArr — a top-level array that mixes primitive numbers and nested arrays of numbers.
 *
 * Structure and explanation:
 *  - The array contains seven top-level entries.
 *  - Most entries are numbers (e.g. 1, 2, 3, 7).
 *  - Two entries are nested arrays of numbers:
 *      - at index 3: an array of numbers [4, 5, 6]
 *      - at index 5: an array of numbers [8, 9, 0]
 *  - Use array indexing to access values. For nested arrays, index twice:
 *      - anotherArr[0]   -> top-level number
 *      - anotherArr[3][1] -> second element of the nested array at index 3
 *
 * Type:
 *  - @constant {(number|number[])[]} anotherArr
 *
 * Notes:
 *  - The type annotation indicates each top-level element is either a number or an array of numbers.
 *  - If you prefer a stricter description, you can define a custom typedef for the exact shape.
 *
 * @example
 * // Get top-level number:
 * // const first = anotherArr[0]; // 1
 *
 * // Get a value from the nested array at index 3:
 * // const nestedValue = anotherArr[3][2]; // 6
 */
const anotherArr  =[1,2,3,[4,5,6],7,[8,9,0]]


const realArr = anotherArr.flat(Infinity)
console.log(realArr);
// Is the value an Array?
// Array.isArray returns true only for actual arrays.
console.log(Array.isArray("Hari ")); // false — a string is not an array

// Create an array from an iterable (a string is iterable).
// Each character becomes an element.
console.log(Array.from("Hari ")); // ["H", "a", "r", "i", " "]

// Create an array from an "array-like" or iterable object.
// A plain object { name: "Hari " } is neither iterable nor has a length property,
// so Array.from treats it as length 0 and returns an empty array.
console.log(Array.from({ name: "Hari " })); // []let score = 100


let score = 100 
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));
