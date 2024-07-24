

// function init() {
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();// Output mozilla


//   function f1(){
//     let name = "rajan";
//     function f2(){
//         console.log(name)
//     }
//     f2()
//   }
//   f1()
//   console.log("hello world");

  //this is work to outer acces and inner function acces variable
      //closure//
  function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName; // pur scope jayega name , 
  }
  
  const myFunc = makeFunc();
  myFunc();// output muzilla



