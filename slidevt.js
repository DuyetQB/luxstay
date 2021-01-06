var containerVT = document.querySelector(".travelVT-wrap");
var slideVT = document.querySelectorAll(".travelVT-slide");
var prevVT = document.querySelector("#prevVT");
var nextVT = document.querySelector("#nextVT");

var counterVT = 0;
var sizeVT = slideVT[0].clientWidth;
prevVT.disabled = true;
prevVT.style.opacity = "0.4";

containerVT.style.transform = 'translateX(' + (-sizeVT * counterVT) + 'px)';

    nextVT.addEventListener("click" , () =>{
     
containerVT.style.transition = "transform 0.4s ease-in-out";
counterVT++;

containerVT.style.transform = 'translateX(' + (-sizeVT * counterVT) + 'px)';
if(slideVT[counterVT].id === "lastdivVT"){
    nextVT.disabled = true;
   

};
});





prevVT.addEventListener("click" , () =>{
    containerVT.style.transition = "transform 0.4s ease-in-out";
    counterVT--;
    containerVT.style.transform = 'translateX(' + (-sizeVT * counterVT) + 'px)';
    if(slideVT[counterVT].id === "firstdivVT"){
        prevVT.disabled = true;
    }
    });

containerVT.addEventListener("transitionend", ()=>{
if(slideVT[counterVT].id === "lastdivVT"){
    containerVT.style.transition = "none";
    nextVT.style.opacity = "0.4" ;
  nextVT.style.cursor = "default";
   
}
else{
    nextVT.style.opacity = "1";
    nextVT.style.cursor = "pointer";
    nextVT.disabled = false;
}

if(slideVT[counterVT].id === "firstdivVT"){
    containerVT.style.transition = "none";
    prevVT.style.opacity = "0.4";
    prevVT.style.cursor = "default";
}
else{
    prevVT.style.opacity = "1";
    prevVT.style.cursor = "pointer";
    prevVT.disabled = false;
}
});