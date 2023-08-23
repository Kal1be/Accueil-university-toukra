const hamburgerToggler = document.querySelector(".hamburger");
const contenu = document.querySelector(".contenu");


const toggleNav = e =>{

    hamburgerToggler.classList.toggle("open");
    contenu.classList.toggle("open");
   
}

hamburgerToggler.addEventListener("click",
toggleNav);
