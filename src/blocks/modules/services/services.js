(function ($) {
  const windowInnerWidth = window.innerWidth
  console.log(windowInnerWidth);
  if (windowInnerWidth > 1022) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".services__items").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false
      });
    });
  }
})(jQuery);