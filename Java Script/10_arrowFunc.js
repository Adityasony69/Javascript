//THIS keyword
const user ={
    username : "aditya",
    price : 999,

    welcomeMessege: function(){
        console.log(` hi, ${this.username}, welcome to website`)//to reffer current context in a function we use this keyword
        console.log(this)
    }

}
user.welcomeMessege()    //current context           //it is a fumction so we use () this to run 
user.username="sam"     //context 
user.welcomeMessege()   //context changed


console.log(this) ///this will give output as empty i.e{}


// ARROW fUnction

/* function hey(){
    let username="aditya"
    console.log(this.username); //it will show undefined
}

hey() */

// by using arrow function
const hey = () => {     //arrow function 
    let username="aditya"
    console.log(this.username);
}
hey()
// pure arrow functions

const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(67,76))

// implicit return arrow function
const adddTwo = (num1,num2) => num1+num2
const addddTwo = (num1,num2) =>({username:"aditya"}) //to return object we use curly brackets 

console.log(adddTwo(67,76))
console.log(addddTwo(67,76))


// array with arrow
const myarray = [2,3,4,5,6]
myarray.forEach( () => {});