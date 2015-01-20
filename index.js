$(function(){
  $(".main-work").addClass("hidden")
  $(".main-contact").addClass("hidden")

  $(".work").on("click", function(){
    $(".active").removeClass("active").fadeOut(400, function(){
      $(".main-work").addClass("active").fadeIn(400);
    })
  })

  $(".about").on("click", function(){
    $(".active").removeClass("active").fadeOut(400, function(){
      $(".main-about").addClass("active").fadeIn(400);
    })
  })

  $(".contact").on("click", function(){
    $(".active").removeClass("active").fadeOut(400, function(){
      $(".main-contact").addClass("active").fadeIn(400);
    })
  })



})
