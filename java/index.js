// const hamburgerToggler = document.querySelector(".hamburger");
// const navlinksContainer = document.querySelector(".navlinks-container");
// let center = document.querySelector(".center");


// const toggleNav = e =>{

//     hamburgerToggler.classList.toggle("open");
//     // navlinksContainer.classList.toggle("open");
//     center.classList.toggle("open");
   
// }

// hamburgerToggler.addEventListener("click",
// toggleNav);

// hamburger.addEventListener('click',()=>{
   
//     hamburger.classList.toggle("open")
// })
let contenu = document.querySelector(".contner");
contenu.children[0].style.color="blue";
contenu.children[0].style.marginTop="-6px";
contenu.children[0].style.fontSize="44px";
contenu.children[1].style.color="red";
contenu.children[2].style.color="rgb(248, 232, 3)";
contenu.children[3].style.color="blue";
contenu.children[4].style.color="rgb(5, 189, 5)";
contenu.children[5].style.color="red";

// let header = document.querySelector(".header");
// let pas = document.querySelector(".nav");
// header.addEventListener("scroll",()=>{
// if (pas = 0){
//   pas.style.position="fixed"
// }
// })

function scrollTomiddle(){
  window.scrollTo({top:
  window.innerHeight/2*9.3
  ,behavior:"smooth"})
};
const citation=[
  {
    quote:"Si vous planifier pour un ans,Semez du riz; Si vous planifiez pour une decènnie,plantez des arbres; Mais si vous planifiez pour toute la vie,éduquez les personnes",
    auteur:"- Proverbe Chinois"
  },
  {
    quote:"Accomplir un acte de gentillesse au hasard,sans attente de récompense, en sachant qu'un jour quelqu'un fera la même pour vous.",
    auteur:"- Diana Princess Of Wales"
  },
  {
    quote:"Un esprit bien éduquer auras toujours plus de questions que des réponses.",
    auteur:"- Helen Keller"
  },
  {
    quote:"La lecture fait un homme plein; La conférence un homme prêt ; et écrire un homme exact . ",
    auteur:`- Francis bacon`
  },
  {
    quote:"Celui qui demande est un imbecile pour Cinq(5) minute, mais celui qui ne demande pas reste un imbecile pour toujours.",
    auteur:"- Proverbe Chinois"
  },
  {
    quote:"Les chaines de l'habitude sont trop faibles pour être ressentis jusqu'a ce qu'elles soient trop fortes pour être brisees.",
    auteur:"- Samuel Johnson"
  },
  {
  quote:"Si vous lisez les livres que tout le monde lit, vous ne pouvez pensez que ce que tout le monde pense.",
  auteur:"- Haraku Murakamj"
  },
  {
    quote:"Mon rêve est d'apporter le changement dans mon pays et de faire dévèlopper ce pays ou chaque fils et filles de ce pays recoivent une éducation.",
    auteur:" - Mula Sharafakine"
  },
  {
    quote:"Une simple conversation avec un homme sage est plus mieux que 10 ans d'études.",
    auteur:" - Proverbe Chinois"
  },
  {
    quote:"Un enfant éduquer seulement a l'école est un enfant maléduquer.",
    auteur:"- George Santayana"
  },
  {
    quote:"Les écoles sont les prisons chanceux pour les enfants et les prisons sont malchanceux pour les enfants. ",
    auteur:"- Naval Ravikant"
  },
  {
    quote:"Essayer d'apprendre quelque chose à propos d'une chose et une chose à propos de quelque chose",
    auteur:"- Thomas Huxley"
  },
  {
    quote:"Une bonne décision[devrait être] basèe sur la connaissance pas sur des chiffres ",
    auteur:"- Platon"
  },

  {
    quote:`Dis moi et j'oubliérais;
     Montre moi et je peux réconnaitre;
      Invoque moi et je comprendrais`,
    auteur:"- Proverbe Chinois"
  },
  
  {
    quote:"L'éducation est le restant de tout ce qu'on a oublier de ce qu'on a appris à l'école",
    auteur:"- Albert Einstein"
  },
  {
    quote:"Quand on veut on peut, quand on peut on doit.",
    auteur:"- Napoleon Bonaparte"
  },
  {
    quote:"Quand un diplomate dit oui, cela veut dire peut-être; quand il dit peut-être, cela signifie non; et quand il dit non, ce n'est pas un diplomate.",
   
    auteur:"- Henry Menckfn"},
    
  {
    quote:"On ne meurt pas quand on veut, mais seulement quand on peut.",
    auteur:"- Gabriel Garcia Marquez "
  },
  {
    quote:"Quand on veut perdre un homme , il n'est pas nécessaire de lui mentir. Il suffit de lui opposer une vérité assez lumineuse pour l'aveugler, et assez forte pour qu'il se casse la tête contre elle.",
    auteur:"- Henry Gougaud "
  },
  {
    quote:"Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",
    auteur:"- Nelson Mandela "
  },
  {
    quote:"Celui qui accepte le mal sans lutter contre lui coopère avec lui.",
    auteur:"- Martin Luther King"
  },
  {
    quote:"J'parle pas aux cons, ça les instruit.",
    auteur:"- Michel Audiard "
  },
  {
    quote:"Fais de ta vie un rêve, et d'un rêve, une réalité.",
    auteur:"- Antoine De Saint Exupery "
  },
  {
    quote:"Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours",
    auteur:"- Gandji "
  },
  {
    quote:"C'est de l'enfer des pauvres qui fait le paradis des riches.",
    auteur:"- Victor Hugo "
  },
  {
    quote:"Si la liberté d'expression nous est enlevée alors, muets et silencieux, nous pourrons être conduits à l'abattoir comme des brebis.",
    auteur:"- George Washington "
  },
  {
    quote:"Le premier savoir est le savoir de mon ignorance : c'est le début de l'intelligence.",
    auteur:"- Socrate "
  },
  {
    quote:"Pas besoin de gril : l'enfer, c'est les Autres.",
    auteur:"- Jean Paul Sartre "
  },
  {
    quote:"Un problème sans solution est un problème mal posé.",
    auteur:"- Albert Einstein "
  },
  {
    quote:"Celui qui ne connaît pas l'histoire est condamné à la revivre.",
    auteur:"- Karl Marx "
  },
  {
    quote:"A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.",
    auteur:"- Martin Luther King "
  },
  {
    quote:"Je ne vais pas mal. Mais rassurez-vous, un jour, je ne manquerai pas de mourir.",
    auteur:"- Charles de Gaulle "
  },
  {
    quote:"Les promesses n'engagent que ceux qui les reçoivent.",
    auteur:"- Jacques Chirac "
  },
  {
    quote:"Qui veut la paix prépare la guerre.",
    auteur:"- Jules Cesar"
  },
  {
  quote:"La patience est amere,mais son fruit est doux. ",
auteur:"- Jean Jacques Rousseau"
  },
  {
    quote:"L'habit ne fait le moine",
    auteur:"Proverbe francais"
  },
  {
    quote:"Rien ne sert de courir,il faut partir a point.",
    auteur:"Jean de la Fontaine"

  },

  {
    quote:"Croire en toi et de tout ce que tu es. Sait que la il y a quelque chose en toi qui est plus qu'une obstacle",
    auteur:"- Christian D.Larson"
  },
  {
    quote:"Quand tu doutes, dis la vérite",
    auteur:"- Mark Twain"
  },
  {
    quote:"La bonne vie est inpirer par l'amour et guider par la connaissance",
    auteur:"- Bertrand Russel"
  }
  
];
var btn=document.querySelector(".btn");

var appart =document.querySelector(".quote");

var author=document.querySelector(".auteur");
let papi = document.querySelector(".papi")

const mesquotes = e =>{
// setInterval(() => {
//   papi.classList.add("deuxieme")
// }, 1000);
  let random = Math.floor(Math.random()*citation.length);

  appart.innerText =citation[random].quote;
  appart.style.transition="all 5s ease-in-out"
  
  author.innerText=citation[random].auteur;

};
btn.addEventListener("click",mesquotes);
setInterval(()=>{
  let random = Math.floor(Math.random()*citation.length);

  appart.innerText =citation[random].quote;
  appart.style.transition="all 5s ease-in-out"
  
  author.innerText=citation[random].auteur;
  author.style.transition="all .55s ease-in-out"
},8000);


let rest = document.getElementById("res");
let gis = document.querySelector(".gis")
let back = document.querySelector("#back");
let gisi=document.querySelector(".gisi");
back.addEventListener("click",()=>{
  if(gis.style.display==="block"){
    gis.style.display="none"
  }
  else{
    gis.style.display="block"
  }
  
});
rest.addEventListener("click",()=>{
  if(gis.style.display==="flex"){
    gis.style.display="none"
  }
  else{
    gis.style.display="flex"
  }
})




let reset = document.querySelector(".reset");
let backa = document.getElementById("backa")
let repeat= document.querySelector(".repeat")


backa.addEventListener("click",()=>{
  if(repeat.style.display==="block"){
    repeat.style.display="none"
  }
  else{
    repeat.style.display="block"
  }

})
reset.addEventListener("click",()=>{
  if(repeat.style.display==="flex"){
   repeat.style.display="none"
  }
  else{
    repeat.style.display="flex"
  }
})

let about = document.querySelector(".about");
let backar = document.querySelector("#backar");
let gi = document.querySelector(".gi");
backar.addEventListener("click",()=>{
  if(gi.style.display==="block"){
    gi.style.display="none"
  }
  else{
    gi.style.display="block"
  }
})
about.addEventListener('click',()=>{
  if(gi.style.display==="block"){
    gi.style.display="none"
  }
  else{
    gi.style.display="block"
  }
});


let news=document.querySelector(".new");
let backara=document.querySelector("#backara");
let life = document.querySelector(".life")
backara.addEventListener("click",()=>{
  if(life.style.display==="block"){
    life.style.display="none"
  }
  else{
    life.style.display="block"
  }
})
news.addEventListener("click",()=>{
  if(life.style.display==="block"){
    life.style.display="none"
  }
  else{
    life.style.display="block"
  }
})

let cent=document.querySelector(".cent");
let remont=document.querySelector("#remont");
let hard = document.querySelector(".hard")
remont.addEventListener("click",()=>{
  if(hard.style.display==="block"){
    hard.style.display="none"
  }
  else{
    hard.style.display="block"
  }
})
cent.addEventListener("click",()=>{
  if(hard.style.display==="block"){
    hard.style.display="none"
  }
  else{
    hard.style.display="block"
  }
})
let biblio=document.querySelector(".biblio");
let remonte=document.querySelector("#remonte");
let theque = document.querySelector(".theque")
remonte.addEventListener("click",()=>{
  if(theque.style.display==="block"){
   theque.style.display="none"
  }
  else{
    theque.style.display="block"
  }
})
biblio.addEventListener("click",()=>{
  if(theque.style.display==="block"){
    theque.style.display="none"
  }
  else{
   theque.style.display="block"
  }
});


let contain = document.querySelector('.obet');
window.addEventListener("scroll",()=>{
  if(window.pageYOffset===0){
    contain.classList.add("remove")
  }
  else{
    contain.classList.remove("remove")
  }
})












function acceptercookies() {
  setCookie("cookie_consent",'accept',365);
  hideBanner();

}
function refusercookies() {
  setCookie('cookie_consent','refuse',365);
  hideBanner();
}
function setCookie(name,value,days) {
  var expires ="";
  if(days){
    var date=new Date();
    date.setTime(date.getTime()+(days* 24 * 60 * 1000));
    expires=";expires=" +date.toUTCString();}
    document.cookie=name + "=" +(value||"") + expires +";path=/";
  }
  function hideBanner() {
    document.getElementById("cookie_banner").style.display="none"
    
  }
  window.onload=function(){
    var consent=getCookie("cookie-consent");
    if(consent==="accept" || consent==="refuse"){
      hideBanner()
    }

  }
  function getCookie(name) {
    var nameEQ=name+ " = ";
    var ca=document.cookie.split(";");
    for(var i=0;i<ca.length;i++){
      var c = ca[i];
      while(c.charAt(0)===' ')c=c.substring(1,c.length);
      if(c.indexOf(nameEQ)===0)return c.substring(nameEQ.length,c.length);
    }
    return null;
  };
  let dons = document.getElementById("cookie_banner");
setTimeout(() => {
  dons.style.display="block"
}, 27000);

 




