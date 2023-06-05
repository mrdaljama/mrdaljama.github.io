var $goTop = $(".go-to-top");
$goTop.hide();

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 200) {
    $goTop.fadeIn(500);
  } else {
    $goTop.fadeOut(200);
  }
});

$goTop.on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    150
  );
});

// Check initial scroll position
$(document).ready(function () {
  if ($(window).scrollTop() === 0) {
    $goTop.fadeOut(200);
  }
});
