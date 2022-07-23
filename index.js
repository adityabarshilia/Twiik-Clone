let head = document.querySelector(".header");
let logo = document.querySelector(".logo");
let loginbtn = document.getElementById("loginbtn");
let formoverlay = document.getElementById("formoverlay");
let form = document.getElementById("form");
let close = document.getElementById("close");


loginbtn.addEventListener("click", () => {
  form.style.setProperty("--height", ((50/100) * window.innerHeight + window.pageYOffset +"px"));
  formoverlay.style.backgroundColor = "rgb(170, 170, 170)";
  formoverlay.style.opacity = "0.7";
  formoverlay.style.zIndex = "11000";
  formoverlay.style.transition = "all .4s ease-in-out";
  formoverlay.style.height =  document.documentElement.scrollHeight+"px";
  form.style.display = "block";
})


close.addEventListener("click", () => {
  formoverlay.style.opacity = "0";
  formoverlay.style.zIndex = "-1";
  form.style.display = "none";
})

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 50){
    head.style.backgroundColor = "rgba(40,40,40,0.9)";
    head.style.height = "65px";
    logo.style.width = "84px";
    logo.style.height = "25px";
  }else{
    head.style.backgroundColor = "";
    head.style.height = "80px";
    logo.style.width = "135px";
    logo.style.height = "40px";
  } 
});