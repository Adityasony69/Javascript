var welcome = prompt("enter your name-:")
if(welcome == null && welcome == ""){
    alert("sorry wrong input")
} else{
    alert(`hello,${welcome}`);

}
let num1=prompt('Enter the first number');
let num2=prompt('Enter the second number');
num1=Number(num1)
num2=Number(num2)
let sum=num1+num2;
alert(`The sum of ${num1} and ${num2} is ${sum}`);
let user = prompt ("enter your name")
let number =parseFloat(user);
if(isNaN(Number)){
    alert("invalid output");
}else{
    alert(`welcome  to our website ${user}`); 
}
