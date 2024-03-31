console.log("java script is initializing");
document.querySelector(".child").addEventListener('click', (e) => {
    e.stopPropagation(); // stops the event from bubbling up    
    alert("child was touched")

})
document.querySelector(".childContainer").addEventListener('contextmenu', () => {
    alert("childContainer was clicked")
})
document.querySelector(".container").addEventListener('dblclick', () => {
    alert("childContainer was clicked")
})
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);;
    let val3 = Math.ceil(0 + Math.random() * 255);;
    return `rgb(${val1}, ${val2}, ${val3})`;
}

setInterval(()=>{
    document.querySelector(".childContainer").style.backgroundColor =getRandomColor();
},100)

setInterval(()=>{
    document.querySelector(".container").style.backgroundColor =getRandomColor();
},100)

setInterval(()=>{
    document.querySelector(".child").style.backgroundColor =getRandomColor();
},100)
let a = setInterval(()=>{
    document.querySelector(".childContainer").style.backgroundColor =getRandomColor();
},1000)
console.log(a);

// let a = settimeou(()=>{
//     document.querySelector(".childContainer").style.backgroundColor =getRandomColor();
// },1000)
// console.log(a);

