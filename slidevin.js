var containerVIN = document.querySelector(".travelVIN-wrap");
var slideVIN = document.querySelectorAll(".travelVIN-slide");
var prevVIN = document.querySelector("#prevVIN");
var nextVIN = document.querySelector("#nextVIN");

var counterVIN = 0;
var sizeVIN = slideVIN[0].clientWidth;
prevVIN.disabled = true;

containerVIN.style.transform = 'translateX(' + (-sizeVIN * counterVIN) + 'px)';

    nextVIN.addEventListener("click" , () =>{
     
containerVIN.style.transition = "transform 0.4s ease-in-out";
counterVIN++;

containerVIN.style.transform = 'translateX(' + (-sizeVIN * counterVIN) + 'px)';
if(slideVIN[counterVIN].id === "lastdivVIN"){
    nextVIN.disabled = true;
   

};
});





prevVIN.addEventListener("click" , () =>{
    containerVIN.style.transition = "transform 0.4s ease-in-out";
    counterVIN--;
    containerVIN.style.transform = 'translateX(' + (-sizeVIN* counterVIN) + 'px)';
    if(slideVIN[counterVIN].id === "firstdivVIN"){
        prevVIN.disabled = true;
    }
    });

containerVIN.addEventListener("transitionend", ()=>{
if(slideVIN[counterVIN].id === "lastdivVIN"){
    containerVIN.style.transition = "none";
    nextVIN.style.opacity = "0.4" ;
  nextVIN.style.cursor = "default";
   
}
else{
    nextVIN.style.opacity = "1";
    nextVIN.style.cursor = "pointer";
    nextVIN.disabled = false;
}

if(slideVIN[counterVIN].id === "firstdivVIN"){
    containerVIN.style.transition = "none";
    prevVIN.style.opacity = "0.4";
    prevVIN.style.cursor = "default";
}
else{
    prevVIN.style.opacity = "1";
    prevVIN.style.cursor = "pointer";
    prevVIN.disabled = false;
}
});