// ************************************************Operations***************************************

let value =3
let negvalue =-value //assigns a negetive value 
console.log(negvalue);

console.log(2+2) //addition
console.log(2-2) //minus
console.log(2*2) //multiplication 
console.log(2**2) //power on the valiable number
console.log(2/2) //division
console.log(2%2) //remainder

//  ***********************Adding Strings************************

let str1 ="Hello"
let str2= " "
let str3 ="Aditya"

let str4 = str1+str2+str3
console.log(str4)

// but if we add strings with number then we got something like this:->
    console.log("1"+2) //it'll add as a string i.e 12
    console.log(1+"2") //it'll also add as string i.e 12
    console.log("1"+2+2) //it'll also add as a string stile 2+2 is present but it is after string so addition is not done here
    console.log(1+2+"2") // in this case the numbers are before string so it will add 1 and 2 the add string adds after he addition so thw output will be 32


    console.log(+true) //it'll convert it to original vale of bool i.e 1

    // **************Prefix And Postfix counter****************

// prefix = If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
    let GameCounter1 =100
    ++GameCounter1;
    console.log(GameCounter1);

// Postfix = If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
 
    let GameCounter2 =100
    GameCounter2++;
    console.log(GameCounter2);


