var containerUSE = document.querySelector(".travelUSE-wrap");
var slideUSE = document.querySelectorAll(".travelUSE-slide");
var prevUSE = document.querySelector("#prevUSE");
var nextUSE = document.querySelector("#nextUSE");

var counterUSE = 0;
var sizeUSE = slideUSE[0].clientWidth;
prevUSE.disabled = true;
prevUSE.style.opacity = "0.4";

containerUSE.style.transform = 'translateX(' + (-sizeUSE * counterUSE) + 'px)';

    nextUSE.addEventListener("click" , () =>{
     
containerUSE.style.transition = "transform 0.4s ease-in-out";
counterUSE++;

containerUSE.style.transform = 'translateX(' + (-sizeUSE * counterUSE) + 'px)';
if(slideUSE[counterUSE].id === "lastdivUSE"){
    nextUSE.disabled = true;
   

};
});





prevUSE.addEventListener("click" , () =>{
    containerUSE.style.transition = "transform 0.4s ease-in-out";
    counterUSE--;
    containerUSE.style.transform = 'translateX(' + (-sizeUSE* counterUSE) + 'px)';
    if(slideUSE[counterUSE].id === "firstdivUSE"){
        prevUSE.disabled = true;
    }
    });

containerUSE.addEventListener("transitionend", ()=>{
if(slideUSE[counterUSE].id === "lastdivUSE"){
    containerUSE.style.transition = "none";
    nextUSE.style.opacity = "0.4" ;
  nextUSE.style.cursor = "default";
   
}
else{
    nextUSE.style.opacity = "1";
    nextUSE.style.cursor = "pointer";
    nextUSE.disabled = false;
}

if(slideUSE[counterUSE].id === "firstdivUSE"){
    containerUSE.style.transition = "none";
    prevUSE.style.opacity = "0.4";
    prevUSE.style.cursor = "default";
}
else{
    prevUSE.style.opacity = "1";
    prevUSE.style.cursor = "pointer";
    prevUSE.disabled = false;
}
});