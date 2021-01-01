
document.addEventListener("DOMContentLoaded", function(){

    let nav = document.querySelector(".section");

    let icon = document.querySelector("#icon-language");

    let current = "click1";

    icon.onclick = function(){
        if(current == "click1"){
            nav.style.visibility = "visible";
        
            current = "click2";
        }
        else if(current =="click2"){
          
            nav.style.visibility = "hidden";
           
            current = "click1";
        }
    }
},false)


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


