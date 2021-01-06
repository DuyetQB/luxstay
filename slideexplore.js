var containerEXPLORE = document.querySelector(".travelEXPLORE-wrap");
var slideEXPLORE = document.querySelectorAll(".travelEXPLORE-slide");
var prevEXPLORE = document.querySelector("#prevEXPLORE");
var nextEXPLORE = document.querySelector("#nextEXPLORE");

var counterEXPLORE = 0;
var sizeEXPLORE = slideEXPLORE[0].clientWidth;
prevEXPLORE.disabled = true;
prevEXPLORE.style.opacity = "0.4";

containerEXPLORE.style.transform = 'translateX(' + (-sizeEXPLORE * counterEXPLORE) + 'px)';

    nextEXPLORE.addEventListener("click" , () =>{
     
containerEXPLORE.style.transition = "transform 0.4s ease-in-out";
counterEXPLORE++;

containerEXPLORE.style.transform = 'translateX(' + (-sizeEXPLORE * counterEXPLORE) + 'px)';
if(slideEXPLORE[counterEXPLORE].id === "lastdivEXPLORE"){
    nextEXPLORE.disabled = true;
   

};
});





prevEXPLORE.addEventListener("click" , () =>{
    containerEXPLORE.style.transition = "transform 0.4s ease-in-out";
    counterEXPLORE--;
    containerEXPLORE.style.transform = 'translateX(' + (-sizeEXPLORE * counterEXPLORE) + 'px)';
    if(slideEXPLORE[counterEXPLORE].id === "firstdivEXPLORE"){
        prevEXPLORE.disabled = true;
    }
    });

containerEXPLORE.addEventListener("transitionend", ()=>{
if(slideEXPLORE[counterEXPLORE].id === "lastdivEXPLORE"){
    containerEXPLORE.style.transition = "none";
    nextEXPLORE.style.opacity = "0.4" ;
  nextEXPLORE.style.cursor = "default";
   
}
else{
    nextEXPLORE.style.opacity = "1";
    nextEXPLORE.style.cursor = "pointer";
    nextEXPLORE.disabled = false;
}

if(slideEXPLORE[counterEXPLORE].id === "firstdivEXPLORE"){
    containerEXPLORE.style.transition = "none";
    prevEXPLORE.style.opacity = "0.4";
    prevEXPLORE.style.cursor = "default";
}
else{
    prevEXPLORE.style.opacity = "1";
    prevEXPLORE.style.cursor = "pointer";
    prevEXPLORE.disabled = false;
}
});