let a = prompt("enter a number")

let b = prompt("enter 2nd number")

//throwing error

if (isNaN(a) | isNaN(b)) {
    throw SyntaxError("sorry this is not allowed") //to throw error 12in webpage
}
let sum = parseInt(a) + parseInt(b);   //parseInt is use to convert string into integer

//handling error
function main(){
    let x =1;
try {

    console.log("the sum is", sum * x); //if x is not defined we use another type of error
    return true;
} catch (error) {
    console.log('error aa gya bhai');
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    return false;

}
finally { // if the code is returned then finally helps to test the next statemeent 
    console.log('files are being closed and db is being closed');

}
}

let c=main()
