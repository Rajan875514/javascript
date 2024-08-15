function outerfuntion() {
    let name = "rajan"; // name is a local variable created by init
    function innerfunction() {
     
      console.log(name); 
    }
    innerfunction();
  }
  outerfuntion();
  