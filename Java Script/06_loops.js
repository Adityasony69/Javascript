console.log("This is the tutrial on loops in java scripts");

/* ************LOOPS*******************
We use loops to perform repeted actions
************Types of loops*************
for loop
for in loop
for of loop
while loop
do while loop

*/
// for loop
let a=1
for (let i = 0; i < 4; i++) {
   console.log(a+i)
    
}
// for in loop
let obj={
    name :"aditya",
    role:"programmer",
    company:"ai"
    
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key);
    }
}

// for out loop
for (const c of "adi|tya") {
    console.log(c)
}

// while loop
let i=0
while(i<6)
{
    console.log(i);
    i++;

}

// do while loop
let j=10;
do {
console.log(j);
j++;
} while (j<6);

