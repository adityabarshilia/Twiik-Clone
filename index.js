let head = document.querySelector(".header");
let logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 50){
    head.style.backgroundColor = "rgba(48, 48, 47, .95)";
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