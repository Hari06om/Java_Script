// dates 
let myDate = new Date();
// console.log(typeof myDate);

// console.log("Today Date : " + myDate.toString());

// //toDateString

// // e.g. "Mon Oct 27 2025"  (human-readable date, no time)
// console.log(myDate.toDateString()); 

// // e.g. "2025-10-27T14:23:30.123Z"  (ISO 8601, UTC)
// console.log(myDate.toISOString());  

// // e.g. "2025-10-27T14:23:30.123Z"  (same as toISOString for Date)
// console.log(myDate.toJSON());        

// // e.g. "2:23:30 PM" or "14:23:30" (format depends on locale)
// console.log(myDate.toLocaleTimeString()); 

// // e.g. "10/27/2025" or "27/10/2025" (format depends on locale)
// console.log(myDate.toLocaleDateString()); 


// let myCreatedDate =  new Date(2025,0,1)
// let myCreatedDate =  new Date(2025,0,1,5,3)
// let myCreatedDate =  new Date("2025-01-14")
let myCreatedDate =  new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let NewDate = new Date();

console.log(NewDate); 
console.log(NewDate); 

NewDate.toLocaleString('default',{
    weekday:"long",
    dateStyle:"full"
})

