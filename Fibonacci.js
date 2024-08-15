// let n1 = 0;
// let n2 = 1;
// let n3;

// console.log(n1 + " " + n2);  // Print the first two numbers of the Fibonacci sequence

// for (let i = 2; i < 10; i++) {
//     n3 = n1 + n2;          // Calculate the next number in the sequence
//     console.log(" " + n3); // Print the current number
//     n1 = n2;               // Update n1 to the previous number
//     n2 = n3;               // Update n2 to the current number
// }
// Function to check if a number is a palindrome
function isPalindromeNumber(num) {
    // Convert the number to a string
    const str = num.toString();
    
    // Reverse the string and compare it with the original string
    const reversedStr = str.split('').reverse().join('');
    
    return str === reversedStr;
}

// Example usage
const number = 121; // You can change this to test other numbers
const result = isPalindromeNumber(number);

console.log(`The number ${number} is ${result ? 'a palindrome' : 'not a palindrome'}.`);
