let wrapSlide = document.querySelector(".places-wrap-slider");
let slide = document.querySelectorAll(".places-slide");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let counter  = 1;
let size = slide[0].clientWidth;


wrapSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    next.addEventListener("click" , () =>{
     
wrapSlide.style.transition = "transform 0.4s ease-in-out";
counter++;
wrapSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
if(slide[counter].id === "lastdiv"){
    next.disabled = true;
   

};
});





prev.addEventListener("click" , () =>{
    wrapSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    wrapSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(slide[counter].id === "firstdiv"){
        prev.disabled = true;
    }
    });

wrapSlide.addEventListener("transitionend", ()=>{
if(slide[counter].id === "lastdiv"){
    wrapSlide.style.transition = "none";
    next.style.opacity = "0.4" ;
  next.style.cursor = "default";
   
}
else{
    next.style.opacity = "1";
    next.style.cursor = "pointer";
    next.disabled = false;
}

if(slide[counter].id === "firstdiv"){
    wrapSlide.style.transition = "none";
    prev.style.opacity = "0.4";
    prev.style.cursor = "default";
}
else{
    prev.style.opacity = "1";
    prev.style.cursor = "pointer";
    prev.disabled = false;
}
})