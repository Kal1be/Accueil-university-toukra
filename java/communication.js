const contenu =document.querySelector(".contenu");
const hamburger =document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("open")
    contenu.classList.toggle("open")
})