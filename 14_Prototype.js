function multiply(num){
    return num*5
}


console.log(multiply(5)); // function call 25
console.log(multiply.prototype);//{}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
            //   jisaka increment karan h 
            this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = createUser("chai", 25)
const code = createUser("tea",250)