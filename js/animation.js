//JavaScriptDocument

$(document).ready(function () {
  document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > document.querySelector(".banner").offsetHeight) {
      $("#nav").css(
        "cssText",
        "background-color: rgba(2, 2, 0, 0.8) !important"
      );
      $(".navbar-brand").css("cssText", "color: #fffefb");
    } else {
      $("#nav").css("cssText", "background-color: transparent !important");
      $(".navbar-brand").css("cssText", "color: transparent");
    }
  });

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    $(".overlay").css({
      opacity: function () {
        var elementHeight = $(this).height(),
          opacity = (1 - (elementHeight - scrollTop) / elementHeight) * 0.9;

        return opacity;
      },
    });
  });
});
