
// let username = document.getElementById("username");
// let email= document.getElementById("email");
// let telephone=document.getElementById("telephone");
// let password =document.getElementById("password");
// let password2 =document.getElementById("password2");
// let nin =document.getElementById("nin");
// let form =document.querySelector(".form");
// let submit =document.querySelector(".submit")

// form.addEventListener("submit", e => {
//   e.preventDefault()

//     form_verify();
// });

// function form_verify(){
//     let uservalue = username.value.trim();
//     let emailvalue =email.value.trim();
//     let telephonevalue=telephone.value.trim();
//     let passwordvalue =password.value.trim();
//     let pwd2value =password2.value.trim();
//     let ninvalue =nin.value.trim();
//     // username verify
//     if(uservalue ===""){
//         let message ="username ne peut pas etre vide";

//        set_error(username,message);
//     }
//     else if (!uservalue.match(/^[a-zA-Z]/)){
//         let message = "username doit commencer par une lettre"
//         set_error(username,message)
//     }
//     else{
//         let letter = uservalue.length;
//         if(letter<3){
//             let message = "username doit avoir au moins 3 caractere"
//         set_error(username,message)
//         }
       
//         else{
//             set_success(username);
//         }
//     };


//     // email verify
//     if(emailvalue ===""){
//         let message ="Email ne peut pas etre vide";

//        set_error(email,message);
//     }

//     else if (!email_verify(emailvalue )){
//         let message ="Email ne correspond pas"
// set_error(email,message);
//     }
    
//     else{
//         set_success(email)
//     }
//     // telephone verify
//     if(telephonevalue ===""){
//         let message ="telephone ne peut pas etre vide";

//        set_error(telephone,message);
//     }
//     else if (!telephonevalue.match(/^[0-9]+[0-9]$/)){
//         let message = "cette case contiendra que des chiffres"
//         set_error(telephone,message)
//     }
//     else{
//         let letter = telephonevalue.length;
//         if(letter<=7){
//             let message = "cette case doit avoir au moins 8 caractere"
//         set_error(telephone,message)
//         }
       
//         else{
//             set_success(telephone);
//         }
//     };
//     // nin verify

// if(ninvalue ===""){
//         let message ="NIN ne peut pas etre vide";

//        set_error(nin,message);
//     }
//     else if (!ninvalue.match(/^[0-9]+[0-9]$/)){
//         let message = "NIN sera contenu que des chiffres"
//         set_error(nin,message)
//     }
//     else{
//         let letter = ninvalue.length;
//         if(letter<=9){
//             let message = "cette case doit avoir au moins 10 caractere"
//         set_error(nin,message)
//         }
       
//         else{
//             set_success(nin);
//         }
//     };
//     // password verify
//     if(passwordvalue ===""){
//         let message ="password ne peut pas etre vide";

//        set_error(password,message);
//     }
//     else if (!passwordvalue.match(/^[0-9a-zA-Z]+[0-9;"@#$%_-]$/)){
//         let message = "mot de passe trop faible"
//         set_error(password,message)
//     }
//     else{
//         let letter = passwordvalue.length;
//         if(letter<=4){
//             let message = "le mot de passe doit avoir au moins 10 caractere"
//         set_error(password,message)
//         }
       
//         else{
//             set_success(password);
//         }
//     };
//     // password confirm verify
//     if(pwd2value ===""){
//         let message ="le password confirm ne peut pas etre vide";

//        set_error(password2,message);
//     }
//     else if(passwordvalue !==pwd2value){
//         let message ="les mots de passe ne correspondent pas"
//         set_error(password2,message)
//     }
    
//     else{
//     set_success(password2)
//     };
// }

// function set_error(username,message){

// const container = username.parentElement;
// let small = container.querySelector("small");

// // ajout de l'erreur
// small.innerText = message;
// // ajout de class
// container.className = "contenu error";

// };

// function set_success(username){
//     const container = username.parentElement;
//     container.className = "contenu success";
// }

// function email_verify(email){
//     /*
//     *yahoulbo-fe_lix@gmail.com
//     |  /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ 
//     */ 
//    return  /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email)
// }

