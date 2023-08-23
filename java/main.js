const tableau = [
   
       {
        para:`<strong>"</strong>Recherche de Visibilite guider<br>
       <strong> Maintenant Disponible </strong><strong>"</strong>`,
        ton:" Lire plus"},
        {
            para:` <strong style:"display:none;">"</strong>
                     
            <strong> Mahamat Saleh Daoussa Haggar</strong> <br>
              Prèsident de l'universitè de Ndjamena
              
              <strong>"</strong>`,
              ton:"download here"
        },
        {
        para:'<strong>"</strong>La plus large Universite de l\'Afrique Centrale <br><strong> UNIVERSITE de TOUKRA </strong><strong>"</strong>',
        ton:" Voir Plus"   
    },
        {
       para: `<strong>"</strong>Dr en Sociologie<strong> Vincent de Paul Allabamdemel</strong><br>
        vous souhaite la bienvenue<strong>"</strong> `,
        ton:"Suivez Nous"},
    
]
let dot =document.querySelector(".dot");
let tonton =document.querySelector(".button");

setInterval(()=>{
    let random=Math.floor(Math.random()*tableau.length)
dot.innerHTML=tableau[random].para;
tonton.innerHTML=tableau[random].ton;
},3000);


