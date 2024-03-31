

let random = Math.random()
console.log(random);
let a =prompt("enter 1st number:")
let c =prompt("enter operation:")
let b =prompt("enter 2nd number:")

let obj ={
    "+":"-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
 
//using if eles 
if (random > 0.1){
// perform correct calculation
alert(`the result is ${eval(`${a} ${c} ${b}`)}`) //eval() basically helps to calculate

}
else{
//perform wrong calculation
c= obj[c] //operation assigned in obj used as c 
alert(`the result is ${eval(`${a} ${c} ${b}}`)}`)

}