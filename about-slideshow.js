

var y=1;
function aboutSlide(){
  
    var aSlider = document.getElementById("a-slider");
    var txt =document.getElementsByClassName("client-slideshow");
    var dot = document.getElementsByClassName("a-dot");
        if(y>txt.length-1){y=0;}
    var str = "translateX(-"+y*100+"%)";
    aSlider.style.transform = str;
    if(y===0){
        dot[0].classList.add("active-a-dot");
        dot[1].classList.remove("active-a-dot");
    }else if(y===1){
        dot[1].classList.add("active-a-dot");
        dot[0].classList.remove("active-a-dot");
    }
    y++;
  
    setTimeout(aboutSlide,5000);
}


setTimeout(aboutSlide,5000);