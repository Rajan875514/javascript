//prints both the asterisks and the row and column indexes:
//let num = prompt("Enter the number");                                
// num = parseInt(num);  // Convert the input to an integer

// for (let i = 0; i < num; i++) {                                          * * * * *
//     let row = "";  // Initialize an empty string for each row             * * * * *
//     for (let j = 0; j < num; j++) {                                       * * * * *
//         row += "*";  // Append an asterisk to the row
//     }
//     console.log(`Row ${i + 1}: ${row}`);  // Print the row with its index
// }
      
// To print a left half triangle of asterisks,

// let num = prompt("Enter the number");
// num = parseInt(num);  // Convert the input to an integer             *
                                                   //                   *
// for (let i = 0; i < num; i++) {
//     let row = "";  // Initialize an empty string for each row
//     for (let j = 0; j <= i; j++) {
//         row += "*";  // Append an asterisk to the row
//     }
//     console.log(row);  // Print the row
// 
// To print a wrirte half triangle of asterisks,

// let num = prompt("Enter the number");
// num = parseInt(num);  // Convert the input to an integer

// for (let i = 0; i < num; i++) {
//     let row = "";  // Initialize an empty string for each row
    
//     // Add spaces before the asterisks
//     for (let j = 0; j < num - i - 1; j++) {
//         row += " ";
//     }
    
//     // Add the asterisks
//     for (let j = 0; j <= i; j++) {
//         row += "*";
//     }
    
//     console.log(row);  // Print the row
//}

// let num = prompt("Enter the number");
// num = parseInt(num);  // Convert the input to an integer
                                                            
// for (let i = num; i > 0; i--) {                         
//     let row = "";  // Initialize an empty string for each row
//     for (let j = 0; j < i; j++) {
//         row += "*";  // Append an asterisk to the row
//     }
//     console.log(row);  // Print the row
// }
let num = prompt("Enter the number");
num = parseInt(num);  // Convert the input to an integer

for (let i = num; i > 0; i--) {
    let row = "";  // Initialize an empty string for each row
    
    // Add leading spaces
    for (let j = 0; j < num - i; j++) {
        row += " ";
    }
    
    // Add the asterisks
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    
    console.log(row);  // Print the row
}
