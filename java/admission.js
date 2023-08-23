let contenu = document.querySelector(".contenu");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",()=>{
    contenu.classList.toggle("open");
    hamburger.classList.toggle("open")
})