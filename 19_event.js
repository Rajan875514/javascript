var btn = document.querySelector("#btn");

let currMode="light"
 

// btn.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);  // mostly used type and target
//     console.log(evt.target);
//     console.log(evt.clickX, evt.click);
//     let a= 25;
//     a++;
//     console.log(a);


// mouseover
btn.addEventListener("click", () => {
   if(currMode === 'light'){
        currMode = 'dark';
       document.querySelector("body").style.backgroundColor = "black";
       
     
       
    }else{
        currMode = 'light';

        document.querySelector("body").style.backgroundColor = "light"

    }
    console.log(currMode);
});