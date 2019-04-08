///////////// SLIDESHOW //////////////////

var x=0;
function showSlides(){
    
   var slider = document.getElementById("slider");

    var img =document.getElementsByClassName("imgSlides");
    var dots = document.getElementsByClassName("dot");
    var i;
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
 
   
    
     next.addEventListener('click',function(){
       
        if(x===img.length-2){
            next.classList.add("hide")
          };
          
          
        x++;
         var str1 = "translateX(-"+x*100+"%)";
         slider.style.transform = str1;
         prev.classList.remove("hide")
         dots[x].classList.add("active-dot");
           dots[x-1].classList.remove("active-dot");
        
         
     })

     
     prev.addEventListener('click',function(){
        x--;
     
        if(x===0){prev.classList.add("hide");};
          
         var str1 = "translateX(-"+x*100+"%)";
         slider.style.transform = str1;
          next.classList.remove("hide");
           dots[x].classList.add("active-dot");
            dots[x+1].classList.remove("active-dot");
      
     })

   
  
}
showSlides();

