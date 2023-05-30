//control flow or control structures determine the flow of the program based on the condition

//Comparison operators =  > , <, ==, ===, >=, <=
//Logical operators = &&,  ||, !


//if else statements
/*
if (condition) {
    statement to do if condition is TRUE
} else {
    statement to do if the condition is FALSE
}
*/

let budget = 100;
let weather = "sunny";
if(budget > 50 && weather == "rainy") {
    console.log("Treat myself to MACKY");
} else {
    console.log("STARVE, MY FRIEND");
}

//loops
//1. for loop
let sum = 0
for(let num3 = 0; num3 < 5; num3++) {
    sum+= num3;
}
console.log(`The sum is ${sum}`);

//2. while loop : execute while the statement is true
let num = 0;
while(num <= 10){
    console.log(`Current count ${num}`);
    num++;
}

//3. do while loop : execute while the statement is true
let num2 = 10;
do {
    console.log("Happy Birthday");
    num2--;
} while (num2 >= 5);

//the difference between while loop and do while loop is that: in the while loop the condition is checked prior to excecuting any statments whereas in the case of do while loop, statements are run at least once, and then the condition is verified
//do while loop is used when you have a file and read through at least once even through it is empty.