// two type of cojnstructs used in java script are

//1. variable ....
// Variable declaration and initialization
var age = 25;
let name = "John";
const PI = 3.14;

console.log(age,name,"\n",PI);

// Data types
var num = 10; // Number
var str = "Hello"; // String
var bool = true; // Boolean
var arr = [1, 2, 3]; // Array
var obj = { key: "value" }; // Object
console.log(num,str,bool,arr,obj);


//functions...
// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function call
greet("Alice");


// Anonymous function
var greet = function(name) {
    console.log("Hello, " + name );
}

greet("aditya")
// Arrow function
var greet = (name) => {
    console.log("Hello, " + name + "!");
}
