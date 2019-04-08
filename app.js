









///////////// TOP BUTTON //////////////////


$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 20) {
        $('#topBtn').fadeIn(300);
    } else {
        $('#topBtn').fadeOut(300);
    }
});
$(document).ready(function() {
    $("#topBtn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/



/*function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
} */