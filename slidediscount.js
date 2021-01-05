


var containerDis = document.querySelector(".discount-wrap");
var slideDis = document.querySelectorAll(".discount-images-img");
var prevDis = document.querySelector("#prevDis");
var nextDis = document.querySelector("#nextDis");

var counterDis = 0;
var sizeDis = slideDis[0].clientWidth;

prevDis.disabled = true;
containerDis.style.transform = 'translateX(' + (-sizeDis * counterDis) + 'px)';

    nextDis.addEventListener("click" , () =>{
     
containerDis.style.transition = "transform 0.4s ease-in-out";
counterDis++;

containerDis.style.transform = 'translateX(' + (-sizeDis * counterDis) + 'px)';
if(slideDis[counterDis].id === "lastdivDis"){
    nextDis.disabled = true;
   

};
});





prevDis.addEventListener("click" , () =>{
    containerDis.style.transition = "transform 0.4s ease-in-out";
    counterDis--;
    containerDis.style.transform = 'translateX(' + (-sizeDis* counterDis) + 'px)';
    if(slideDis[counterDis].id === "firstdivDis"){
        prevDis.disabled = true;
    }
    });

containerDis.addEventListener("transitionend", ()=>{
if(slideDis[counterDis].id === "lastdivDis"){
    containerDis.style.transition = "none";
    nextDis.style.opacity = "0.4" ;
  nextDis.style.cursor = "default";
   
}
else{
    nextDis.style.opacity = "1";
    nextDis.style.cursor = "pointer";
    nextDis.disabled = false;
}

if(slideDis[counterDis].id === "firstdivDis"){
    containerDis.style.transition = "none";
    prevDis.style.opacity = "0.4";
    prevDis.style.cursor = "default";
}
else{
    prevDis.style.opacity = "1";
    prevDis.style.cursor = "pointer";
    prevDis.disabled = false;
}
});

