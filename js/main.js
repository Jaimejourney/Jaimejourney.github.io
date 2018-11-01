$(document).ready(function() {
	$(".d").click(function() {
		$("html, body").animate({
			scrollTop: 660
		}, 1000);
	});
});

$(document).ready(function() {
	$(".da").click(function() {
		$(".side").toggle();
	});
});

$(document).ready(function() {
	$(".x").click(function() {
		$(".side").toggle();
	});
});	

$(document).ready(function() {
	$(".mail").click(function() {
		$(".contact-form").toggle();
	});
});

$(document).keyup(function(event) {
	if (event.which == '27') {
		$(".contact-form").toggle();
	}
});