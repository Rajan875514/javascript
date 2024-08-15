let a = prompt("enter first numnber ");
let b = prompt("enter  scend number"); // chack error function
if(isNaN(a) || isNaN(b) ){
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);
//console.log(" sum two number  ",sum)// only pass integer  not pass string nahi output nan not a number
// create error

// 
// try{
//     console.log("sum is two number " ,sum*s);

// }catch(error){ // error ko handle kiya 
//     console.log("Error a geya bhai");
// }

function main(){
    let s = 1;
try{
    console.log("sum is two number " ,sum * s);
    return true

}catch(error){ // error ko handle kiya 
    console.log("Error a geya bhai");
    return false
}
finally{
    console.log("hello")// reun finally write na write (main finally used funtion)

}
}
let