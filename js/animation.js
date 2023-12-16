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

  var docWidth = $("body").width(),
    $wrap = $("#wrap"),
    $images = $("#wrap .hb"),
    slidesWidth = $wrap.width();

  $(window).on("resize", function () {
    docWidth = $("body").width();
    slidesWidth = $wrap.width();
  });

  $(document).mousemove(function (e) {
    var mouseX = e.pageX,
      offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;

    $images.css({
      "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
      transform: "translate3d(" + -offset + "px,0,0)",
    });
  });
});
