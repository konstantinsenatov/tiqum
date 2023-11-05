(function ($) {

	//projects
	$(document).ready(function(){
		$('.archive-projects__item').mouseover(function(){
			$('.archive-projects__item').addClass("js-opacity-item");
			$(this).addClass("js-active-item");
		});
		$('.archive-projects__item').mouseout(function(){
			$('.archive-projects__item').removeClass("js-opacity-item");
			$(this).removeClass("js-active-item");
		});
	});

	gsap.registerPlugin(ScrollTrigger);
	gsap.utils.toArray(".projects__header").forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			start: 'top top',
			pin: true,
			pinSpacing: false
		});
	});
	gsap.registerPlugin(ScrollTrigger);
	gsap.utils.toArray(".page-header-big").forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			start: 'top top',
			pin: true,
			pinSpacing: false
		});
	});

	$(document).ready(function(){
		var h2_id = 1;
		$('.content h2').each(function(){
			$(this).attr("id", "b" + h2_id);

			h2_cont = $(".content h2#b" + h2_id).text();

			$('<li><a href="#b'+ h2_id +'" class="click link link'+ h2_id +'">'+ h2_cont +'</a></a></li>').appendTo('.content ul');
			h2_id++;
		})

		$('.click').on('click', function() {
			let href = $(this).attr('href');
			var header = $('header').outerHeight();

			$('html, body').animate({
				scrollTop: $(href).offset().top - header
			}, {
				duration: 700,
				easing: "linear"
			});

			return false;
		});
		$(document).on('scroll', function() {
			var num = 1;
			$('.link').each(function(){
				var wh = $(window).height();
				var wt = $(window).scrollTop();
				var wb = (wh + wt);

				var eh = $('#b'+num+'').outerHeight();
				var et = $('#b'+num+'').offset().top;
				var eb = (eh + et);
				if ((eb >= wt) && (et <= wb)){
					$('.link'+num+'').addClass("link-active");
				} else {
					$('.link'+num+'').removeClass("link-active");
				}
				num++;
			})
		});

	/* 	var $animation_elements = $('.link1');
		var $window = $(window);

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			$.each($animation_elements, function() {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('is-visible');
				} else {
					$element.removeClass('is-visible');
				}
			});
		}

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll'); */

	});

    const page__image = gsap.timeline({
        scrollTrigger: {
            trigger: ".new-page__image img",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.utils.toArray(".new-page__image").forEach(layer => {
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth)
        page__image.to(layer, {y: movement, ease: "none"}, 0)
    });



})(jQuery);

