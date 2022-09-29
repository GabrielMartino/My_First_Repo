/*
$("button").click(function() {
    $(this).toggleClass('buttonClicked');
  });
*/
  $(function() {
    $("button")
      .on("click", function(){
      $(this).addClass('buttonClicked');
    })
      .on("animationend", function(){
      $(this).removeClass('buttonClicked');
    });
	});



 
  $("button").hover( function(){
    if ($(this).children("span").hasClass("iconHidden")) {
      $("span").removeClass("iconHidden").addClass("iconShow");
      $("span").animate({ top: "5" }, "fast");
      $("span").animate({ opacity: "1" }, "fast");
    }
    else {
    $("span").removeClass("iconShow").addClass("iconHidden");
    $("span").animate({ top: "-5" }, "fast");
    }

  });


