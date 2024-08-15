//prints both the asterisks and the row and column indexes:
// const readline = require('readline');

// const x = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// x.question('Enter the number of asterisks per row: ', (inputnumber) => {                          
//     const number = parseInt(inputnumber, 10);  // Convert the input to an integer

//     for (let i = 0; i < number; i++) {                                          
//         let row = ""; 
//         // Initialize an empty string for each row  
//         for (let j = 0; j < number; j++) {                                      
//             row += "*";  // Append an asterisk to the row
//         }
//         console.log(`Row ${i + 1}: ${row}`);  // Print the row with its index
//     }

//     x.close();  // Close the readline interface
// });







// off pumrid number 
// const readline = require('readline');

// const x = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// x.question('Enter the number of rows for the pyramid: ', (inputnumber) => {
//     const numberOfRows = parseInt(inputnumber, 10);  // Convert the input to an integer
//      // Generate the left-aligned triangle
//      let n = 5;
//      for (let i = 1; i <= n; i++) {
//          let str = '';
//          let count = 1;
//          for (let j = 1; j <= 2 * n; ++j) {
//              if (i + j >= n + 1 && (i >= j - n + 1)) {
//                  // Add a space after each number
//                  str += count.toString() + ' ';
//                  count++;
//              } else {
//                  // Add two spaces for the gap
//                  str += ' ';
//              }
//          }
     
//          console.log(str);
//      }
     
//         // Print the row
//         console.log(row);
//     }

//     x.close();  // Close the readline interface after the loop is done
// });
const readline = require('readline');

const x = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

x.question('Enter the number of rows for the pyramid: ', (inputnumber) => {
    const numberOfRows = parseInt(inputnumber, 10);  // Convert the input to an integer

    // Generate the left-aligned triangle
    for (let i = 1; i <= numberOfRows; i++) {
        let str = '';
        let count = 1;
        for (let j = 1; j <= 2 * numberOfRows; ++j) {
            if (i + j >= numberOfRows + 1 && (i >= j - numberOfRows + 1)) {
                // Add a space after each number
                str += count.toString() + ' ';
                count++;
            } else {
                // Add two spaces for the gap
                str += '  ';  // Two spaces to align with the numbers
            }
        }
        // Print the row
        console.log(str);
    }

    x.close();  // Close the readline interface after the loop is done
});
