// ****************************Comparison In Java Script*************************************


//  if we compare numbers in Java script we get something like this
console.log(0>1);  //False
console.log(0<1); //True
console.log(0>=1); //False
console.log(0==1); //False

// also if we  compare strings with numbers
console.log("2">1); //True
console.log("02"==1); //False


// But in the case of null value ********* we got unique results
// these type of values are confusing so we usually avoide these type of comparisions
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true???  the result is true in this case******
// the reason is that an equality check == and comarisions ><>=<= works differently....***Comparisions null to a "NUMBER TREATING IT AS 0"....
 

console.log(undefined==0); //fAlse
console.log(undefined>0); //fAlse
console.log(undefined<=0); //fAlse


// *****************Strict Check(===)**********************
console.log("2"===2); //in this strict check case it cannot change the string into number and ci=ompare it gives result on the basis of the given value datatypes

/* Comparision operators
 = = equal to
 ! = not equal to
 === eqqual value and type
 !== not equal to and not equal type
 > greater then 
 < less then 
 >= less thanequal to
 <= greater than equal to
 ? ternery operator */
