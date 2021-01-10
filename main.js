
// window.onscroll = function(){ myscroll()};
// function myscroll(){
// let header = document.querySelector(".header");
// let sticky = header.offsetTop;

// if(window.pageYOffset >= 10 ){
//     header.classList.add("sticky");
// }
//     else{
//     header.classList.remove("sticky");
// }
// }




document.addEventListener("DOMContentLoaded", function(){

 
    let nav = document.querySelector(".section");

    let icon = document.querySelector("#icon-language");
   
    let current = "click1";


    icon.onclick = function(){
        if(current == "click1"){
            nav.style.visibility="visible";
           
        nav.classList.add("animation-tooltip");
    //    nav.style.opacity="1";
          
            current = "click2";
        }
        else if(current =="click2"){
            nav.classList.remove("animation-tooltip");
         
           
            // nav.style.opacity="0"

            current = "click1";
        }

        
    }
},false);
// hide and show the flag

//hiden and show fake navigation when click

document.addEventListener("DOMContentLoaded", function(){
    let hamburgor = document.querySelector(".small-hamburgor");
    let closeNavigation = document.querySelector(".close");
    let fakeNavigation  = document.querySelector(".fake-nav");
    let number = "pick1"; //chỗ này mình tái sử dụng lại code luôn thay vì code 2 cái chức năng ẩn hiện 
    //2 chỗ .Mình bỏ cái icon hamburgor khi responsive vào đây 
    
       
        
    hamburgor.onclick = function(){
       
            fakeNavigation.style.display = "block";
           
        }
        closeNavigation.onclick = function(){
            fakeNavigation.style.display = "none";
        }

          window.onclick = function(e){
            
            if(e.target == fakeNavigation){
            fakeNavigation.style.display = "none";
            }
        }
    
    }
,false);


//function hide and show small navigation when we resize the screen smaller
document.addEventListener("DOMContentLoaded", function(){


    let fakeSection = document.querySelector(".fake-nav-section");

    let  fakeicon = document.querySelector("#fake-icon-language");

    let numSection = "like1";


    fakeicon.onclick = function(){
        if( numSection == "like1"){

            fakeSection.style.display = "block";
        
            numSection = "like2";
        }
        else if( numSection == "like2"){
          
            fakeSection.style.display = "none";
           
            numSection = "like1";
        }
    }
},false);


function myFocus(){
let wrap = document.querySelector(".wrap-search");

let search = document.querySelector(" .search");
let inputOverlay = document.querySelector(".input-overlay");

search.onclick= function(){
    wrap.style.boxShadow = " 0 0 3px #333";
    wrap.style.borderRadius = "5px 5px 5px 5px";
    inputOverlay.style.display = "block";
}
;
inputOverlay.onclick = function(){
    wrap.style.boxShadow = " 0 0 0px #ccc";
    inputOverlay.style.display = "none";
    wrap.style.borderRadius = "5px 0px 0px 5px";
}
}
//input checked





