function openNav() {
    //document.getElementById("menu-phone").style.display = "flex";
    document.getElementById("sideBar").style.width = "250px";
    

    
}

function closeNav() {
  //document.getElementById("menu-phone").style.display = "flex";
  document.getElementById("sideBar").style.width = "0px";

  
}

var dropdown = document.getElementsByClassName("drop-btn");
var shigjeta = document.getElementById("shigjeta");
var i;
var j;
var arrow = document.getElementsByClassName('fa-angle-down');
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    
    var dropdownContent = this.nextElementSibling;
      
      if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
        
         
      
    } else {
      dropdownContent.style.display = "block";
         


    }
  });
}

 
 


