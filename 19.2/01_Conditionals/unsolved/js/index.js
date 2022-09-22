$('.tab').on("click", function(){
  if($(this).hasClass("tab1")){
    $(".tab1").addClass("active");
    $(".tab3").removeClass("active");
    $(".tab2").removeClass("active");
    $("#tabContent1").css("display", "block");
    $("#tabContent3").css("display", "none");
    $("#tabContent2").css("display", "none");
  }
  else if($(this).hasClass("tab2")){
    $(".tab2").addClass("active");
    $(".tab3").removeClass("active");
    $(".tab1").removeClass("active");
    $("#tabContent2").css("display", "block");
    $("#tabContent3").css("display", "none");
    $("#tabContent1").css("display", "none");
  }
  else {
    $(".tab3").addClass("active");
    $(".tab2").removeClass("active");
    $(".tab1").removeClass("active");
    $("#tabContent3").css("display", "block");
    $("#tabContent2").css("display", "none");
    $("#tabContent1").css("display", "none");
  }
});
