let head = document.querySelector(".header");
let logo = document.querySelector(".logo");
let loginbtn = document.getElementById("loginbtn");
let formoverlay = document.getElementById("formoverlay");
let form = document.getElementById("form");
let close = document.getElementById("close");

loginbtn.addEventListener("click", () => {
  formoverlay.style.backgroundColor = "rgb(170, 170, 170)";
  formoverlay.style.opacity = "0.7";
  formoverlay.style.display = "block";
  formoverlay.style.height = "3864px";
  form.style.display = "block";
})

close.addEventListener("click", () => {
  formoverlay.style.backgroundColor = "";
  formoverlay.style.opacity = "";
  form.style.display = "none";
  formoverlay.style.display = "none";
  formoverlay.style.height = "";
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

// let head = document.querySelector(".header");
// let logo = document.querySelector(".logo");

// window.addEventListener("scroll", () => {
//   if(window.pageYOffset > 50){
//     head.style.backgroundColor = "rgba(40,40,40,0.9)";
//     head.style.height = "65px";
//     logo.style.width = "84px";
//     logo.style.height = "25px";
//   }else{
//     head.style.backgroundColor = "";
//     head.style.height = "80px";
//     logo.style.width = "135px";
//     logo.style.height = "40px";
//   } 
// });