const user = {
    username:"rajan",
    price:999,

    welcomeMessage: function ()  {
        console.log(`${this.username},welcome to website`);
       // console.log(this)
    }
}
// user.welcomeMessage() // rajan,welcome to website
// user.username = "ram";
// user.welcomeMessage()

console.log(this);// Output {}