// const readline = require('readline');

// const x = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let mode = 'dark';

// x.question('Enter color: ', (color) => {
//     if (mode === 'dark') {
//         color = 'black';
//     } else if (mode === 'black') {
//         color = 'blue';
//     } else if (mode === 'pink') {
//         color = 'gray';
//     }

//     console.log(`Color is set to: ${color}`);
//     x.close();
// });
// let age = 25;
// let name = "Alice";
// let isAdult = true;
// //let user = { name: "Alice", age: 25 };
// let colors = ["red", "green", "blue"];
// let nothing = null;
// let notDefined;
// // Creating a BigInt by appending 'n' to the end of an integer
// let bigNumber = 1234567890123456789012345678901234567890;
// console.log(typeof bigNumber);  // "bigint"

// let uniqueId = Symbol('id');
// console.log(typeof uniqueId);  // "symbol"




// console.log(typeof age);       // "number"
// console.log(typeof name);      // "string"
// console.log(typeof isAdult);   // "boolean"
// console.log(typeof user);      // "object"
// console.log(typeof colors);    // "object"
// console.log(typeof nothing);   // "object" (this is a known quirk in JavaScript)
// console.log(typeof notDefined);// "undefined"

const readline = require('readline');

const x = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let grade;

x.question('Enter marks: ', (marks) => {
    marks = parseInt(marks); // Convert input to an integer
    
    if (marks >= 90 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 80 && marks < 90) {
        grade = 'B';
    } else if (marks >= 70 && marks < 80) {
        grade = 'C';
    } else if (marks >= 60 && marks < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log(`According to the marks (${marks}), the grade is: ${grade}`);
    x.close(); // Close the readline interface
});
