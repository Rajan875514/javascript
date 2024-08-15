//number

let num = 123;
let strNum = num.toString();
console.log(strNum); // Output: "123"
console.log(typeof strNum); // Output: "string"

//boolan

let bool = true;
let strBool = bool.toString();
console.log(strBool); // Output: "true"

//String

let text = "Hello";
let strText = text.toString();
console.log(strText); // Output: "Hello"

//Array
let arr = [1, 2, 3, 4];
let strArr = arr.toString();
console.log(strArr); // Output: "1,2,3,4"


//object

let obj = { name: "Alice", age: 25 };
let strObj = obj.toString();
console.log(strObj); // Output: "[object Object]"

obj.toString = function() {
  return `Name: ${this.name}, Age: ${this.age}`;
};

console.log(obj.toString()); // Output: "Name: Alice, Age: 25"

// custom tostring
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.toString = function() {
    return `${this.name}, ${this.age} years old`;
  };
  
  let person = new Person("John", 30);
  console.log(person.toString()); // Output: "John, 30 years old"
  
