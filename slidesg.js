let containerSG = document.querySelector(".travelSG-wrap");
let slideSG = document.querySelectorAll(".travelSG-slide");
let prevSG = document.querySelector("#prevSG");
let nextSG = document.querySelector("#nextSG");

let counterSG  = 0;
let sizeSG = slideSG[0].clientWidth;
prevSG.disabled = true;

containerSG.style.transform = 'translateX(' + (-sizeSG * counterSG) + 'px)';

    nextSG.addEventListener("click" , () =>{
     
containerSG.style.transition = "transform 0.4s ease-in-out";
counterSG++;
containerSG.style.transform = 'translateX(' + (-sizeSG * counterSG) + 'px)';
if(slideSG[counterSG].id === "lastdivSG"){
    nextSG.disabled = true;
   

};
});





prevSG.addEventListener("click" , () =>{
    containerSG.style.transition = "transform 0.4s ease-in-out";
    counterSG--;
    containerSG.style.transform = 'translateX(' + (-sizeSG * counterSG) + 'px)';
    if(slideSG[counterSG].id === "firstdivSG"){
        prevSG.disabled = true;
    }
    });

containerSG.addEventListener("transitionend", ()=>{
if(slideSG[counterSG].id === "lastdivSG"){
    containerSG.style.transition = "none";
    nextSG.style.opacity = "0.4" ;
  nextSG.style.cursor = "default";
   
}
else{
    nextSG.style.opacity = "1";
    nextSG.style.cursor = "pointer";
    nextSG.disabled = false;
}

if(slideSG[counterSG].id === "firstdivSG"){
    containerSG.style.transition = "none";
    prevSG.style.opacity = "0.4";
    prevSG.style.cursor = "default";
}
else{
    prevSG.style.opacity = "1";
    prevSG.style.cursor = "pointer";
    prevSG.disabled = false;
}
})