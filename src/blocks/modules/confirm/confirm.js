(function ($) {
  $(document).ready(function () {
    $('.confirm__item').mouseover(function () {
      $('.confirm__item').addClass("js-opacity-item");
      $(this).addClass("js-active-item");
    });
    $('.confirm__item').mouseout(function () {
      $('.confirm__item').removeClass("js-opacity-item");
      $(this).removeClass("js-active-item");
    });
  });
})(jQuery);