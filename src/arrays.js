//Arrays are used to store related data.

// Declaring an empty array
let empty = [];

// Initializing array with default values
//let defaults = [1,2,"3"];  some programming languages do not allow mixed type.
let defaults = [1,2,3];
console.log("defaults", defaults);

// Retrieve the first element in array.
console.log("first element value is", defaults[0]);

// Looping an array
for(let i=0 ;i<defaults.length; i++){
    console.log("value of i is", i, "and the value is", defaults[i]);
}



//mini excercise:
//1. Create an array called grades with values of 100, 75, 68, 95, 43
let grades = [100, 75, 68, 95, 43]

//2. Using loop and an if-else statement, print the following:
/*
    if grade >75 = pass
    if grade <= 75 = fail
    format: "Your grade of ___ is a Pass / Fail"
*/

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 75) {
    console.log(`Your grade of ${grades[i]} is a PASS`);
} else {console.log(`Your grade of ${grades[i]} is a FAIL`)} 
}