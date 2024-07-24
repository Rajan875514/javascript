// //print fibonachi number
// let num = prompt("Enter the number of terms for Fibonacci series:");
// num = parseInt(num);  // Convert the input to an integer

// let first = 0, second = 1, next;

// console.log("Fibonacci Series:");
// for (let i = 1; i <= num; i++) {
//     console.log(first);
//     next = first + second;
//     first = second;
//     second = next;
// }// output 0,1,2,3,5,8,13,21,32

// Function to check if a number is prime
// function isPrime(num) {
//     // If the number is less than 2, it's not prime
//     if (num < 2) {
//         return false;
//     }
//     // Check if the number is divisible by any number less than itself
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     // If the loop completes, the number is prime
//     return true;
// }

// // Function to print prime numbers up to a specified limit
// function printPrimes(limit) {
//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example: Print prime numbers up to 20
// printPrimes(20);
// //2,3,5,7,11,13,17,19...
 
// function isArmstrong(number) {
//     let numStr = number.toString();
//     let numDigits = numStr.length;
//     let sum = 0;
    
//     for (let digit of numStr) {
//         sum += Math.pow(parseInt(digit), numDigits);
//     }
    
//     return sum === number;
// }

// function printArmstrongNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (isArmstrong(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example: Print Armstrong numbers between 1 and 1000
// printArmstrongNumbers(1, 1000);
//palindrome number


function isPalindrome(number) {
    // Convert the number to a string
    let numStr = number.toString();
    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');
    // Check if the original string is equal to the reversed string
    return numStr === reversedStr;
}

// Test the function
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(1331)); // Output: true
console.log(isPalindrome(1221)); // Output: true
console.log(isPalindrome(123)); // Output: false
