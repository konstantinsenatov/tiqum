(function ($) {
  $('.form-wewillfind-footer__item input').focus(function () {
    $(this).parent().addClass("js-active-area")
  });
  $('.form-wewillfind-footer__item input').blur(function () {
    if ($('.form-wewillfind-footer__item input').val() === '') {
      $(this).parent().removeClass("js-active-area")
    }
  });

  $('.form-wewillfind-footer__item textarea').focus(function () {
    $(this).parent().addClass("js-active-area")
  });
  $('.form-wewillfind-footer__item textarea').blur(function () {
    if ($('.form-wewillfind-footer__item textarea').val() === '') {
      $(this).parent().removeClass("js-active-area")
    }
  });
})(jQuery);


