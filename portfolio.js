///////////// PORTFOLIO //////////////////

$(document).ready(function(){

    
    // clicking button with class "category-button"
    $(".btn").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        
        // show all items
        if(filterValue == "all")
        {
            $(".filter").show("slow");
        }
        else
        {   
            // hide all items
            $(".filter").not('.'+filterValue).hide("slow");
            
            // and then, show only items with selected data-filter value
            $(".filter").filter('.'+filterValue).show("slow");
        }
    });

});

//Add active class

$(".btn").click(function(){
     $(".btn").removeClass("active");
    $(this).addClass("active");
     
})
