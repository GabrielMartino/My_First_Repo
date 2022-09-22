/*
if ($(".theme_button").on("click", function(){
    $(this).hasClass("w3-button themeChange dark")
    $("#theme").attr("href", "css/dark.css")
  }));
  

  */

  $(".themeChange").on("click", function(){
   
 
    if ($(this).hasClass("dark")){
        $("#theme").attr("href", "css/dark.css")
      }

    else if ($(this).hasClass("blue")){
        $("#theme").attr("href", "css/blue.css")
      }

    else if ($(this).hasClass("regular")){
        $("#theme").attr("href", "css/regular.css")
      }

  });
 
