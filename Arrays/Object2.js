// Define an object named `course` with three properties
const course = {
    coursename: "js in hindi", // name/title of the course
    price: "999",             // price stored as a string
    courseInst: "hetish"      // instructor name
}

// Object destructuring with renaming:
// The property `courseInst` from `course` is extracted and assigned
// to a new constant named `inst`.
const { courseInst: inst } = course

// Note: `courseInst` as a standalone variable is NOT created by the line above.
// If you try to do `console.log(courseInst)` it will throw ReferenceError or be undefined.
// The variable that exists here is `inst`, so this logs the instructor name:
console.log(inst) ;// output: "hetish"



// Define an array of objects representing multiple courses
const courses = [
    {
        name: "hari",
        coursename: "js in hindi",
        price: "Free"
    },
    {
        name: "john",
        coursename: "advanced js",
        price: "1999"
    },
    {
        name: "doe",
        coursename: "react basics",
        price: "1499"
    }
];

// Log the courses array to see the details of each course
console.log(courses);