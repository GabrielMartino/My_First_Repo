// Add Event Listener Below
$("#toggle").on("click", function(){
$("ul").slideToggle();
$("img").toggleClass( "rotate");
$(this).swapText();
});

$("#box").on("click", function(){
   
    $(this).toggleClass( "rotate");
    });

function swapText() {
        var x = document.getElementById("toggle");
        if (x.innerHTML === "More") {
          x.innerHTML = "Less";
        } else {
          x.innerHTML = "More";
        }
      }

