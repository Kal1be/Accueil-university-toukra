let center = document.querySelector(".center");
let hamburger=document.querySelector(".hamburger");
hamburger.addEventListener('click',()=>{
    center.classList.toggle("open");
    hamburger.classList.toggle("open")
});
let obet = document.querySelector(".obet");
let univers = document.querySelector(".univers");
obet.addEventListener("scroll",()=>{
    if(obet.style.top===0){
        univers.style.fontSize="12px"
    }
    else{
        univers.style.fontSize="32px"
    }
});


let animation = document.querySelector(".animation");

  window.addEventListener("load",()=>{
    setInterval(() => {
     animation.classList.add("ajoute");
    }, 8000);
  });

 
    
    