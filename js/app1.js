



let header = document.querySelectorAll('header a');
let img_logo =document.querySelector('header .logo img');
let nav = document.querySelector('header');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    }, 
    autoplay: {
      delay: 3500,
    }
    

  });
    





  window.onscroll=_=>{

      
        sonsscroll();
       
    }

    function sonsscroll(){
  if(scrollY >= 40){
           
           AddColor()
            
        }else {
              clearColor()
        }
    }


// window.onscroll=_=>{

//     if(scrollY >= 40){
//         nav.style.cssText=`background-color: #fff ;
//         border-bottom: 1px solid #a8a8a859; `
//         header.forEach(element => {
//             element.setAttribute('style' , 'color: inherit !important')
//         });
        
//     }else {
//         nav.style.backgroundColor='transparent'
//         nav.style.border='none'
//         header.forEach(element => {
//             element.setAttribute('style' , 'color: white !important')
//         });
//     }
    
   
// }



let imgAll = document.querySelectorAll(".slidre .huv ");



function clear(){

    for (let i = 0; i < imgAll.length; i++) {

        if (imgAll[i].classList.contains("col-6")){

            imgAll[i].classList.replace('col-6' , 'col')
        }
    }

}




for (let i = 0; i < imgAll.length; i++) {

    imgAll[i].onclick = _=> {

        clear()
        imgAll[i].classList.replace('col' , 'col-6')

    }

}

let btn_cartt = document.querySelector('.btn-cartt')
let cart_cont = document.querySelector('.cart-cont')





function clearColor(){

    nav.classList.remove('colors_soech')
    img_logo.classList.remove('imgDark')
    

}

function AddColor(){
    nav.classList.add('colors_soech')
    img_logo.classList.add('imgDark')
  


}



// btncart
btn_cartt.onclick=_=>{

    cart_cont.classList.toggle('show2');
    if (cart_cont.classList.contains('show2')){

        AddColor();

    }else{
        
        clearColor();

    }

  }
  


let manEle = document.getElementById("man");

// console.log(manEle);

manEle.onclick = _=> {
    
           
           
            
        
    manEle.classList.toggle('activeclick');

    let showEle = document.querySelector(".contantbox");
    showEle.classList.toggle('hide_ele');
    if (showEle.classList.contains('hide_ele')){
        
        AddColor()
        

    }else{
        
        clearColor()

    }

}























let btnSend = document.querySelector("button");
let UsernameEle = document.querySelector("#email");
let passwordEle = document.querySelector("#pass_word");
let sgin_in = document.querySelector('.sgin_in');
let ICON_Ele_signin = document.querySelector('#Icon-user');
ICON_Ele_signin.onclick=_=>{
        
    sgin_in.classList.toggle('show');
    UsernameEle.focus()


}


document.forms[0].onsubmit = function(e){

    let userValid = false ; 
    let passValid = false ;
    

    if (UsernameEle.value !== "" && UsernameEle.value.length <= 100){

        userValid = true;

    }


    if (passwordEle.value !== "" && passwordEle.value.length  <= 10){

        passValid = true;
        console.log(passwordEle.value)


    }else {

        passwordEle.setAttribute('style' , `color: red`)

    }

    if (userValid === false || passValid === false){

        e.preventDefault();
    }


   
}










let BtnRegister = document.querySelector(".register-link")
let signup_show = document.querySelector(".signup")
let alredyAccount = document.querySelector(".link-footer")

BtnRegister.onclick=e=>{

    sgin_in.classList.remove('show')
    signup_show.removeAttribute('style')
    e.preventDefault();

}


alredyAccount.onclick =_=>{

    sgin_in.classList.add('show')
    signup_show.setAttribute("style" , "opacity: 0")
    
     x.preventDefault();


}











let aa = document.querySelectorAll('.fa-x')[0];
let aaa = document.querySelectorAll('.fa-x')[1];


aa.addEventListener("click",function(){   sgin_in.classList.remove('show')});
    

aaa.addEventListener("click",function(){ signup_show.setAttribute('style' , `display:none !important;`)});

    



//nav show and rmove 

let bargat_menu =document.getElementById('bargat_menu');
let navbar =document.getElementById('navbar');


bargat_menu.onclick=_=>{
navbar.classList.toggle('ethar')
}


