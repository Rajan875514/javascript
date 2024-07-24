// Function

// function myName(){
//     console.log("My name Rajan prasad");
// } // it not define 

// //use code
// myName();

// function CountingTable(){
//     for(let i =0; i<=10; i++)
//         console.log(i);
// }
// CountingTable();


// function printCounting(num){  // function it pass Argument
//     console.log(num);
// }
// printCounting(5); /// argument

// Find the avg number
// function avgNumber (num1 ,num2){
//     let avg = (num1+num2)/2;    
//     console.log("Average:",avg);
// }  
// avgNumber(4,5);
//output 
Average: 4.5
// Find the largestNumber
// function largestNumber(num1, num2) {
//     let largest = Math.max(num1, num2);
//     console.log("Largest number:", largest);
// }f

// largestNumber(4, 5);//Output Largest number: 5
function smallestNumber(num1, num2) {
    let smallest = Math.min(num1, num2);
    console.log("Smallest number:", smallest);
}

smallestNumber(4, 5);//Outpu Smallest number: 4

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

let name = fullName("rajan", "prasad");
console.log(name);


// const 09_arrowFunction = () => {
//   return (
//     <div>09_arrowFunction</div>
//   )
// }
// // 
// export default 09_arrowFunction
