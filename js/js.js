$(document).ready(function () {
    $(".colors span").click(function(){
        console.log("daclick");
        $(".colors span").removeClass("active");
        $(this).addClass("active");
        $(".product-pic").css("background-image",$(this).attr("data-pic"));
      }); 
 });
 