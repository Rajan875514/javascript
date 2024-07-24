
// var removeFriend = document.querySelector("#remove")

// addFriend.addEventListener("click",function(){
//     stutas.innerHTML = "Friend"
//     stutas.style.color = "green"
// })

// removeFriend.addEventListener("click",function(){
//     stutas.innerHTML = "stranger"
//     stutas.style.color = "red"
// })

var isstatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");
var check = 0;

addFriend.addEventListener("click", function(){
    if(check == 0){
        isstatus.innerHTML = "Friend";
        isstatus.style.color = "green";
        check = 1;
    } else {
        isstatus.innerHTML = "Stranger";
        isstatus.style.color = "red";
        check = 0;
    }
});

removeFriend.addEventListener("click", function(){
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "red";
    check = 0;
});
