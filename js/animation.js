//JavaScriptDocument

$(document).ready(function () {
  document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > document.querySelector(".banner").offsetHeight) {
      $("#nav").css(
        "cssText",
        "background-color: rgba(62, 51, 47, 0.8) !important"
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

  // gallery coursell animation
  var docWidth = $("body").width(),
    $wrap = $("#wrap"),
    $images = $("#wrap .hb"),
    slidesWidth = $wrap.width();

  $(window).on("resize", function () {
    docWidth = $("window").width();
    $wrap.css("transform", "translateX(0)");
  });

  $(document).mousemove(function (e) {
    var mouseX = e.pageX,
      offset = (mouseX / docWidth) * (slidesWidth - docWidth);
    $wrap.css({
      "-webkit-transform": "translateX(-" + offset + "px)",
      transform: "translateX(-" + offset + "px)",
    });
  });
});
