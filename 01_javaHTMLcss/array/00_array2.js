let a =[1,3,4,56]

// for loops for array
for (let index =0;index<a.length;index++){
    const element=a[index];
     console.log(element)
}

a.forEach((value,index,array)=>{
    console.log(value,index,array);
})

// square of elements

let arr =[1,3,5,7,11,13]
// let newArr= []

// for(let index = 0;index < arr.length; index++ ){
//     const element = arr[index]
//     newArr.push(element**2)//square of element
// }
// console.log(arr);
// console.log("*************************************************************");
// console.log(newArr);

//easy way to genesrate squre root of values****************

let newArr =arr.map((e)=>{return e**2}); //using map function to create new array with squared values
console.log(newArr);
const greaterseven =((e)=>{
    if (e>15) {
        return true
    }else{
        return false
    }
})
newArr.filter(greaterseven)
console.log(newArr.filter(greaterseven));
console.log(arr.filter(greaterseven));


// use like this also
const n =(newArr.filter((e)=>{
    if (e>15) {
        return true
    }else{
        return false
    }
}))
console.log(n);

// helps to do operations on arrays with the hel of reduce function
let arr2 =[1,3,4,5,6]

const red =(a,b)=>{ //this fi=unction means it will multiply the 1st 2 digit and give ans and with that ans we multiply the other digit

    //eg=>  1x3=3x4=12x5=60x6=360
    return a*b;
}


console.log(arr2.reduce(red));