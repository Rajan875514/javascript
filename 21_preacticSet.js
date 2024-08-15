//   let age = 25;
//   let name = "Alice";
//   let isAdult = true;
//   let user = { name: "Alice", age: 25 };
//   let colors = ["red", "green", "blue"];
//   let nothing = null;
//   let notDefined;
//  // Creating a BigInt by appending 'n' to the end of an integer 
//   //let bigNumber = 1234567890123456789012345678901234567890;
//  // console.log(typeof bigNumber);  // "bigint"

//  l//et uniqueId = Symbol('id');
// // console.log(typeof uniqueId);  // "symbol"




 //console.log(typeof age);       // "number"
// console.log(typeof name);      // "string"
// console.log(typeof isAdult);   // "boolean"
// console.log(typeof user);      // "object"
// console.log(typeof colors);    // "object"
// console.log(typeof nothing);   // "object" (this is a known quirk in JavaScript)
// console.log(typeof notDefined);// "undefined"



// for in loop 

let obj = {
    rajan: 90,
    age: 25,
    raju: 245,
    rajnbjb: 27
};

for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a]);
}

// for of loop 

const fruits = ['apple' , 'banana', 'grapesh']

for(const fruit of fruits){
    console.log(fruits);
}
let numberSet = newSet ([1,2,3,4,5,]);

for(let number of numbers){
    console.log(number);
}
