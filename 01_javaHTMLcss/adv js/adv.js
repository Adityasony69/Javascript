async function sleep() {
    return new properties((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 10);

    })
}

// immidiatly invoke function
(async function main() {
    let a = await sleep()
    console.log(a);


    let b = await sleep()
    console.log(b);


    
})

let obj ={
    a:1,
    b:3,
    c:4
}
console.log(obj);


let [x, y,...rest] = [1, 5,8,5,2,7]
console.log(x, y);