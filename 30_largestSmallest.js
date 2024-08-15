// function findLargestNumber(numbers) {
//     let largest = numbers[0]; // Start with the first element

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }

//     return largest;
// }

// const numbersArray = [5, 23, 89, 12, 55];
// const largest = findLargestNumber(numbersArray);
// console.log("The largest number is:", largest);
//The largest number is: 89

// function findSmallestNumber(numbers) {
//     let smallest = numbers[0]; // Start with the first element

//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }
//     }

//     return smallest;
// }

// const numbersArray = [5, 23, 89, 12, 55];
// const smallest = findSmallestNumber(numbersArray);
// console.log("The smallest number is:", smallest);
// const { constants } = require('buffer');
// //The smallest number is: 5

const readline = require('readline');
const x = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findSmallestNumber(numbers) {
    let smallest = numbers[0]; // Start with the first element

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;
}

x.question("Enter the numbers separated by commas: ", function(input) {
    // Split the input string by commas and convert to an array of numbers
    const numbersArray = input.split(',').map(Number);

    // Find the smallest number
    const smallest = findSmallestNumber(numbersArray);
    console.log("The smallest number is:", smallest);

    // Close the readline interface
    x.close();
});
