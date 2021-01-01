var containerHN = document.querySelector(".travelHN-wrap");
var slideHN = document.querySelectorAll(".travelHN-slide");
var prevHN = document.querySelector("#prevHN");
var nextHN = document.querySelector("#nextHN");

var counterHN = 1;
var sizeHN = slideHN[0].clientWidth;


containerHN.style.transform = 'translateX(' + (-sizeHN * counterHN) + 'px)';

    nextHN.addEventListener("click" , () =>{
     
containerHN.style.transition = "transform 0.4s ease-in-out";
counterHN++;

containerHN.style.transform = 'translateX(' + (-sizeHN * counterHN) + 'px)';
if(slideHN[counterHN].id === "lastdivHN"){
    nextHN.disabled = true;
   

};
});





prevHN.addEventListener("click" , () =>{
    containerHN.style.transition = "transform 0.4s ease-in-out";
    counterHN--;
    containerHN.style.transform = 'translateX(' + (-sizeHN* counterHN) + 'px)';
    if(slideHN[counterHN].id === "firstdivHN"){
        prevHN.disabled = true;
    }
    });

containerHN.addEventListener("transitionend", ()=>{
if(slideHN[counterHN].id === "lastdivHN"){
    containerHN.style.transition = "none";
    nextHN.style.opacity = "0.4" ;
  nextHN.style.cursor = "default";
   
}
else{
    nextHN.style.opacity = "1";
    nextHN.style.cursor = "pointer";
    nextHN.disabled = false;
}

if(slideHN[counterHN].id === "firstdivHN"){
    containerHN.style.transition = "none";
    prevHN.style.opacity = "0.4";
    prevHN.style.cursor = "default";
}
else{
    prevHN.style.opacity = "1";
    prevHN.style.cursor = "pointer";
    prevHN.disabled = false;
}
});