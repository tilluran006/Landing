(function($) {
	$(document).ready(function() {
		$.fn.customMove = function(movement) {
			return $(this).each(function() {
				// console.log(topOffset);
				var direction="500px";
				if(movement=="right") {
					direction = "-500px"
				}
					var topOffset = $(this).offset().top + $(this).height();
					if(!$(this).hasClass("complete")) {
						var wtop = $(window).scrollTop() + $(window).height();
						if(topOffset <= wtop) {
							$(this).addClass("complete").animate({position:"relative" , left:"0px", opacity: 1}, 1200, "linear");
						}else {
							$(this).parent().css("overflow", "hidden");
							$(this).css({position: "relative", left: direction, opacity: 0});
						}
					}
			});
		};

		$(window).scroll(function() {
			var t = $(this).scrollTop();

			$('.row:even .sponsors:nth-child(1)').customMove("right");
			$('.row:even .sponsors:nth-child(6)').customMove("left");
			$('.row:even .sponsors:nth-child(2)').delay(70).customMove("right");
			$('.row:even .sponsors:nth-child(5)').delay(70).customMove("left");
			$('.row:even .sponsors:nth-child(3)').delay(140).customMove("right");
			$('.row:even .sponsors:nth-child(4)').delay(140).customMove("left");

			$('.row:odd .sponsors:nth-child(1)').customMove("left");
			$('.row:odd .sponsors:nth-child(6)').customMove("right");
			$('.row:odd .sponsors:nth-child(2)').delay(70).customMove("left");
			$('.row:odd .sponsors:nth-child(5)').delay(70).customMove("right");
			$('.row:odd .sponsors:nth-child(3)').delay(140).customMove("left");
			$('.row:odd .sponsors:nth-child(4)').delay(140).customMove("right");
			// $('.row:odd').customMove("left");
			// $('.row:odd .sponsors:nth-child(2)').customMove("left");
			// $('.row:odd .sponsors:nth-child(3)').customMove("right");
			// $('.row:odd .sponsors:nth-child(4)').customMove("right");
			// $('.row:odd .sponsors').customMove("right");
			// $('.row .sponsors').customMove("up");
			$('.slider').text(t);
		});

		// $(".backgrounds img").eq(1).setBackground(100).delay(2000).removeBackground(1500);
		// $(".backgrounds img").eq(1).delay(2000).removeBackground(1500);
		// $(".backgrounds img").eq(2).delay(3500).setBackground(2000);

		$(".sponsors img").each(function() {
			var years = $(this).attr("data-sponsor");
			if(years) {
				years = years.split(' ');
			}
			var i = 0;
			var setFunc;
			function transition() {
					var ind = i % years.length;
					$("#inci-logo-" + years[ind]).css("display", "block").animate({opacity: 1}, 1500);
					if(years.length > 1)
						$("#inci-logo-" + years[ind]).delay(500).animate({opacity: 0}, 1500);
					i++;
			}
			$(this).hover(function() {
				transition();
				setFunc = setInterval(transition, 3000);
			}, function() {
				if(setFunc)
					clearInterval(setFunc);
			});
		});


	});
})(jQuery)