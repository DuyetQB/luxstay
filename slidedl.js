var containerDL = document.querySelector(".travelDL-wrap");
var slideDL = document.querySelectorAll(".travelDL-slide");
var prevDL = document.querySelector("#prevDL");
var nextDL = document.querySelector("#nextDL");

var counterDL = 0;
var sizeDL = slideDL[0].clientWidth;
prevDL.disabled = true;

containerDL.style.transform = 'translateX(' + (-sizeDL * counterDL) + 'px)';

    nextDL.addEventListener("click" , () =>{
     
containerDL.style.transition = "transform 0.4s ease-in-out";
counterDL++;

containerDL.style.transform = 'translateX(' + (-sizeDL * counterDL) + 'px)';
if(slideDL[counterDL].id === "lastdivDL"){
    nextDL.disabled = true;
   

};
});





prevDL.addEventListener("click" , () =>{
    containerDL.style.transition = "transform 0.4s ease-in-out";
    counterDL--;
    containerDL.style.transform = 'translateX(' + (-sizeDL* counterDL) + 'px)';
    if(slideDL[counterDL].id === "firstdivDL"){
        prevDL.disabled = true;
    }
    });

containerDL.addEventListener("transitionend", ()=>{
if(slideDL[counterDL].id === "lastdivDL"){
    containerDL.style.transition = "none";
    nextDL.style.opacity = "0.4" ;
  nextDL.style.cursor = "default";
   
}
else{
    nextDL.style.opacity = "1";
    nextDL.style.cursor = "pointer";
    nextDL.disabled = false;
}

if(slideDL[counterDL].id === "firstdivDL"){
    containerDL.style.transition = "none";
    prevDL.style.opacity = "0.4";
    prevDL.style.cursor = "default";
}
else{
    prevDL.style.opacity = "1";
    prevDL.style.cursor = "pointer";
    prevDL.disabled = false;
}
});