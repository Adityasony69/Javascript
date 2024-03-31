let arr =[1,3,4,6]
console.log(arr)
console.log(arr)
console.log(arr.length)
document.write(arr.length)
console.log([2]);
arr[2]=5;
console.log(arr,typeof arr); // type of array is object in java script
//**********Array methods*********************** */
console.log(arr.toString);
console.log(arr.join("-"));  //it will join all the elements with
console.log(arr.pop());   // it will remove last element from an array and return that element
console.log(arr);        // after
console.log(arr.push(7)); // it will add new element at end of array and returns new length
console.log(arr);
arr.push("adi")
console.log(arr);
arr.shift();    // it will remove first element from array and return that element
console.log(arr);
arr.unshift(0);     // it will add a new element at beginning of array
console.log(arr);
//unshift is push and shift is pop
delete arr[2]
console.log(arr);

//concatination
let a=[7,9,8]
let b=[4,5,6]
let c=[67,45,7,6,654,"aditya"]
let d= a.concat(b,c)
console.log(d);

console.log(a.sort())      // it will sort the array in ascending
console.log(c.splice(2,4,666,785)); //add  four element at index 2 and replace by sixsixsix and seveneightfive
console.log(c.slice(2,4));  // it will give subarray between index 2 to 4 i.e [6, "aditya"]
console.log(c.indexOf('aditya')); // it will search for 'aditya' and return its position if found otherwise return -1  
