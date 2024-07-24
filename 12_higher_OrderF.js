function add(a , b , ab){ // It is higher oreder function]
    // jo function ass argument accpt to than higher function
    let result = a+b;
    ab(result);  // call back  
}
// add(2 , 5 , function(val){  // hi
//     console.log(val);
// });  // Output 7
// // ab is the call back

add(3 , 6 , (val) => console.log(val));  // Output 9
      