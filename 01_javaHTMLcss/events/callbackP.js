// console.log("javascrpit is initializing");

// // Javascrpit callbacks and promises
// const callback = (arg)=>{
//     console.log(arg);
//     alert(arg)
// }
//     const fn= () => {
//   console.log("NOTHING");
// }
// const loadScript = (src,callback) => {
//  let sc= document.createElement("script");
//  sc.src =src;
//  sc.onload =callback("aditya",fn);  // calling the callback function when script loads
//  Document.head.append(sc)

// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)

//PROMISES
console.log('this is promises');



let prom1 = new Promise((resolve,reject)=>{
    let a=Math.random()
if(a<0.5){
    reject("no, random number was not supported")
}else{
    setTimeout(() => {
        console.log('yes im done 1');
        resolve("harry")
    }, 3000)
}
})


let prom2 = new Promise((resolve,reject)=>{
    let a=Math.random()
if(a<0.5){
    reject("no, random number was not supported")
}else{
    setTimeout(() => {
        console.log('yes im done2');
        resolve("ADITYA")
    }, 3000)
}
})

// prom1.then((a)=>{           //
//     console.log(a);
    
// }).catch((err)=>{           // use to print error in console
    
//     console.log(err);
    
// })

// promis API
let p3=Promise.all([prom1,prom2])      // returns an array of results after all the promises are resolved or any one promise got rejected

p3.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);  
})

let p4=Promise.allSettled([prom1,prom2])      // returns an array of results after all the promises are resolved or any one promise got rejected

p4.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);  
})
let p5=Promise.race([prom1,prom2])      // returns an array of results after all the promises are resolved or any one promise got rejected

p5.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);  
})

let p6=Promise.all([prom1,prom2])      // returns an array of results after all the promises are resolved or any one promise got rejected

p6.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);  
})

let p7=Promise.resolve([prom1,prom2])      // returns an array of results after all the promises are resolved or any one promise got rejected

p7.then((a)=>{
    console.log(a);   
}).catch((err)=>{
    console.log(err);  
})