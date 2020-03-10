$(document).ready(function () {
  $(".colors span").click(function () {
    console.log("daclick");
    $(".colors span").removeClass("active");
    $(this).addClass("active");
    $(".product-pic").css("background-image", $(this).attr("data-pic"));
  });
    $('.backhome').click(function () {
      console.log('da click');
      $('html,body').animate({ scrollTop: 0 }, 500);
    });
    $(window).scroll(function(e){
      var vt1= $('html,body').scrollTop();
      console.log(vt1);
      if(vt1>300){
        $('.backhome').addClass('show');
      }
      else{
        $('.backhome').removeClass('show');
      }
    });
   /***************************wow */
   new WOW().init();
   /******************************* */
});

