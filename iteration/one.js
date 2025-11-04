// for 

// for (let index = 0; index <= 10; index++) {
//     /**
//      * The current element from the array being iterated
//      * @type {*} The value at the current index position
//      */
//     const element = index;
//         if(element){
//             console.log("5 is the best element ");
//         }
//     console.log(element);
        

// }



for (let i = 0; i <=10; i++) {
    console.log(`outer loop value:${i}`);
    
    for (let j = 0; j<=10; j++) {
        console.log(`inner loop value:${j}and outer loop is ${i}`);
        
    }
}