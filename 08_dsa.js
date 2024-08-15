// 1. Using splice() Method
// The splice() method allows you to insert one or more elements into an array at a specific index.

// javascript
// // Copy code
//      let numbers = [1, 2, 4, 5];
//      let index = 2; // The position where you want to insert the new number
//      let newNumber = 3;

// numbers.splice(index, 0, newNumber);

// console.log(numbers); // Output: [1, 2, 3, 4, 5]
// 2. Using Array slice() and Spread Operator
// You can also use the slice() method along with the spread operator to insert a number.

// javascript
// Copy code
// let numbers = [1, 2, 4, 5];
// let index = 2; // The position where you want to insert the new number
// let newNumber = 3;

// let newArray = [...numbers.slice(0, index), newNumber, ...numbers.slice(index)];

// console.log(newArray); // Output: [1, 2, 3, 4, 5]
// 3. Using push(), unshift(), or concat() Methods
// These methods are useful for adding elements at the beginning or end of the array but can also be combined for insertion at a specific index.

// Inserting at the Beginning:
// javascript
// Copy code
// let numbers = [2, 3, 4];
// let newNumber = 1;

// numbers.unshift(newNumber);

// console.log(numbers); // Output: [1, 2, 3, 4]
// Inserting at the End:
// javascript
// Copy code
// let numbers = [1, 2, 3];
// let newNumber = 4;

// numbers.push(newNumber);

// console.log(numbers); // Output: [1, 2, 3, 4]
// 4. Manually Inserting Using a Loop
// If you want to manually shift elements and insert a new one, you can use a loop:

// javascript
// Copy code
// let numbers = [1, 2, 4, 5];
// let index = 2; // The position where you want to insert the new number
// let newNumber = 3;

// // Shift elements to the right
// for (let i = numbers.length; i > index; i--) {
//     numbers[i] = numbers[i - 1];
// }

// // Insert the new number
// numbers[index] = newNumber;

// console.log(numbers); // Output: [1, 2, 3, 4, 5]
// Summary
// splice() is the most common and versatile method.
// slice() and spread operator are useful for immutable operations.
// push() and unshift() are handy for adding to the beginning or end of an array.
//Manual insertion gives you full control over the process, though it's more complex.



// bubbal short


// function bubbleSort(arr) {
//     let n = arr.length;

//     // Loop through the entire array
//     for (let i = 0; i < n - 1; i++) {
//         // Flag to detect if a swap was made
//         let swapped = false;

//         // Inner loop for each pass
//         for (let j = 0; j < n - 1 - i; j++) {
//             // Compare adjacent elements
//             if (arr[j] > arr[j + 1]) {
//                 // Swap if the current element is greater than the next
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

//                 swapped = true; // Set the flag to true indicating a swap was made
//             }
//         }

//         // If no swaps were made during the pass, the array is already sorted
//         if (!swapped) {
//             break;
//         }
//     }

//     return arr;
// }

// // Example usage:
// let array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Sorted array:", bubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]
// Iteration 1:

// Compare 64 and 34, swap → [34, 64, 25, 12, 22, 11, 90]
// Compare 64 and 25, swap → [34, 25, 64, 12, 22, 11, 90]
// Compare 64 and 12, swap → [34, 25, 12, 64, 22, 11, 90]
// Compare 64 and 22, swap → [34, 25, 12, 22, 64, 11, 90]
// Compare 64 and 11, swap → [34, 25, 12, 22, 11, 64, 90]
// Compare 64 and 90, no swap → [34, 25, 12, 22, 11, 64, 90]
// After 1st iteration, array: [34, 25, 12, 22, 11, 64, 90]


//Binary Serach

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Target found at index `mid`
        }

        if (arr[mid] < target) {
            low = mid + 1; // Search the right half
        } else {
            high = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 7;
let index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log(`Element ${target} found at index ${index}`);
} else {
    console.log(`Element ${target} not found in the array`);
}
