// Declaring an empty object
let empty = {};

// Initializing object with default value
const person = {
    name:"John Doe",
    yearOfBirth: 1987
}
console.log("person", person);

// Retrieve the value of "yearOfBirth" property, using '.'
console.log("I am born in", person.yearOfBirth);

// Looping an object
for(let key in person){
    console.log("key is", key, "and value is", person[key]);
}

//Why cannot use person.key instead of person[key]?
//Because it will try to find a key called "key". come back as undefined


//mini excercise
//Create a new object called me that has the following properties:
//1. Full name:
//2. Previous Occupation:
//3. Year of birth:
//4. Hobbies:
//Print the second hobby.

const me = {
    fullName: "Joey Ng",
    previousOccupation: "MedTech",
    yearOfBirth: 1999,
    hobbies: ["Skateboarding","Painting","Photography"]

}

console.log(`My 2nd favourite hobby is ${me.hobbies[1]}`);