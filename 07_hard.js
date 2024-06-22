let num = prompt("Enter the number of terms for Fibonacci series:");
num = parseInt(num);  // Convert the input to an integer

let first = 0, second = 1, next;

console.log("Fibonacci Series:");

for (let i = 1; i <= num; i++) {
    console.log(first);
    next = first + second;
    first = second;
    second = next;
}
