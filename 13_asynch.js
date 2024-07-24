// this is async program
// console.log("one");  // execute
// console.log("two");  // execute
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 2000)  callback used
// console.log("three"); 
// // //out put
// one 1
// two 2
// three 4
// hello  3

//sync output one , two , three , hello
// setTimeout(() => {
//     console.log("Hello world");
// }, 5000);

// callback hell  / nesting
//   getData(1 , ( ) => {
//     console.log("grtting data2....")
//       getData(2 , ( ) => {
//         console.log("getting data3...")
//           getData(3 , ( ) => {
//             console.log("getting data4...")
//             getData(4);
//           })
//       })
//   })
// promises flipckart,amzon
let promise = new Promise((resolve, reject) => {
    console.log("I am promise");
   // resolve("Success");
   reject("some error occurred")
});

