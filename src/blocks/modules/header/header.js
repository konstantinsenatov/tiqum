(function ($) {

  $(document).ready(function () {
    if ($(".wrapper").hasClass("main-page")) {
      $('.header').addClass("js-header-white");
    }
    if ($(".blog__header").hasClass("header-blog")) {
      $('.header').addClass("js-header-white");
    }
  });

  $(document).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $('.header').addClass("js-header-fixed");
    } else if ($(document).scrollTop() < 10) {
      $('.header').removeClass("js-header-fixed");
    }
  });

  var block_show = null;

  function is_fully_shown(target) {
    const scroll = $(document).scrollTop();
    const dark_pos = $(target).offset().top;
    const dark_height = $(target).outerHeight();

    if (scroll > dark_pos && scroll < dark_pos + dark_height) {
      return true;
    } else {
      return false;
    }
  }

  $(window).scroll(function () {
    var test = false;
    $(".white-block").each(function () {
      if (!test) {
        if (is_fully_shown($(this))) {
          $(".header.js-header-white").addClass("js-header-white-dark");
          test = true;
        } else {
          $(".header.js-header-white").removeClass("js-header-white-dark")
        }
      }
    });
  });

  $(document).ready(function () {
    $('.header__burger').click(function () {
      $('body').toggleClass('body-overflow');
      $('.menu-mobile').toggleClass("menu-mobile_active");
      $('.header').toggleClass('header-mobile_active');
      $('.header__burger').toggleClass('header__burger-active')
    });
    if ($('.blog__header').hasClass('header-blog')) {
      $(".menu-mobile__link-blog").addClass("menu-mobile__link-active")
    }
    if ($(".blog__hero").hasClass("hero-blog")) {
      $('.menu-mobile__link-blog').addClass("menu-mobile__link-active-white");
    }
  });

})(jQuery);
