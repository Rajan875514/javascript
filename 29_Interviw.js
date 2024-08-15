// print fibonacci number
// let a1 = 0
// let a2 = 1
// let a3

// console.log( a1+" " +a2);
//  a3=a1+a2;
//  for(let i=2; i<10; i++){
//     a3 = a1+a2;
//     console.log( " "+a3)
//     a1=a2
//     a2=a3
    
//  }



//  // cheack palindrome number


//  function isPalindromeNumber (num){
//     const str = num.toString(); 
//     const reversedStr = str.split('').reverse().join('');
//      return str === reversedStr;
//  }

//  const number = 121;
//  if(isPalindromeNumber(number)){
//     console.log(`${number} it is palindrome number`)
//  }else{
//     console.log(`{number} it is not palindrome number`)
//  }

 //user gaive number

 const readline = require('readline');

const x = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isPalindromeNumber(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

x.question('Enter the number: ', (userInput) => {
    const number = parseInt(userInput, 10);

    if (isPalindromeNumber(number)) {
        console.log(`${number} is a palindrome number.`);
    } else {
        console.log(`${number} is not a palindrome number.`);
    }

    // Close the readline interface
    x.close();
})