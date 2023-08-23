const contenu =document.querySelector(".contenu");
const hamburger =document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
    contenu.classList.toggle("open");
    hamburger.classList.toggle("open");
})