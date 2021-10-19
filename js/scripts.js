$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Woof!</li>");
    $("ul").before("")
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Hissssssssssssssss!</li>");
    $("ul#webpage").prepend("<li>Bark, Bark!</li>");
    $("ul").before("#img").first().click(function() {
      $(this).remove();
    });
  });

});