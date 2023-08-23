let center =document.querySelector(".center");
let hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click",()=>{
    center.classList.toggle("open");
    hamburger.classList.toggle("open")
})
