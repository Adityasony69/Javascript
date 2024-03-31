/* Functions in java script
A function is a block of code that performs a specific task.  
 It can be given a name, which makes it easier to refer to later on  
In JavaScript functions are defined using the "function" keyword followed by 
 the function's name and parentheses containing any input parameters (if needed).*/

function hello(name) {   //creating function
    console.log("hello" + name + ", how are you?");
    console.log("hello" + name + ", where are you from");
    console.log("hello" + name + ", wsupppp");
}
hello(" aditya")  //calling function
hello(" aasrtik")



// 2nd function
function sum(a,b) {  // creating function
    console.log(a+b);
    return a+b; //to access value
}

result =sum(3,5)
result1 =sum(36,59)
result2 =sum(32,51)

sum(4,6)  //calling function


console.log("the sum of these numbers is",result,result1,result2);


// Arrow Function
const func1 = (x)=>{
    console.log("i am an arrow function",x);
}

func1(34)
func1(66)
func1(98)