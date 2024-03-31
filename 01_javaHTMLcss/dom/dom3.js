console.log("aditya hellow");

// let hellojavascrpit = document.getElementsByClassName("box")
// console.log(hellojavascrpit);

// hellojavascrpit[3].style.backgroundColor ="red"  //change the color of third box to red



// // let javascrpit = document.getElementById("boxx")
// // console.log(javascrpit);
// // // document.getElementById("boxx").style.backgroundColor="cyan"
// javascrpit[2].style.backgroundColor= "yellow";   // change the color of second box to yellow
// // // document.getElementsByClassName("box").hellojavascrpit[3].style.backgroundColor="red"

// console.log("hellow");


// document.querySelector(".box").style.backgroundColor="green"; //selects first element with class name box and changes
console.log(document.querySelectorAll(".box")); //if will return the html collection 

document.querySelectorAll(".box").forEach(e =>{
    console.log(e);
    e.style.backgroundColor ="cyan"
});
