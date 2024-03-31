// Dark mode in javascript

var body = document.querySelector("body")
var btn = document.querySelector("#btn")

let light = true;
btn.addEventListener("click",()=>{
  if(light=true){
      body.style.backgroundColor ="black"
      btn.style.backgroundColor ="white"
      btn.style.color ="black"
      light = false;
  }else{
      body.style.backgroundColor="white";
      btn.style.backgroundColor="green";
      btn.style.color="white";

  }
})
let dark = true
btn.addEventListener("dblclick", () => {
if(dark = true){
  body.style.backgroundColor="white";
  btn.style.backgroundColor="green";
  btn.style.color="white";
  dark = false;
}else{
  body.style.backgroundColor ="black"
  btn.style.backgroundColor ="white"
  btn.style.color ="black"

}
})