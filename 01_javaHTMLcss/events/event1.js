// Events in javascripts
console.log("javascript is initializing");
let btn = document.getElementById("btn")

btn.addEventListener("click" ,()=>{
    //alert("i was clicked")
    document.querySelector(".box").innerHTML = "<b>hey!!!!! you were clicked enjoy your click</b> enjoy your click"
})

document.addEventListener("contextmenu" ,()=>{
    alert("dont hack us by right click please")
   // document.querySelector(".box").innerHTML = "<b>hey!!!!! you were clicked enjoy your click</b> enjoy your click"
})
document.addEventListener("keydown" ,(e)=>{
   // alert("i was clicked")
    document.querySelector(".box").innerHTML = "<b>hey!!!!! you were clicked enjoy your click</b> enjoy your click"
    console.log(e.key,e.keyCode);
})
// ALTERNATE FOR addEventListner
document.onclick = function() {
        alert()
}
