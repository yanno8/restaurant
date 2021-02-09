var socket = io();

/*---------------------------------------*\
	ScrollMagic scroll interactions library
\*---------------------------------------*/

var controller = new ScrollMagic.Controller();

// anchor link scrolling
controller.scrollTo(function (pos) {
	TweenMax.to(window, 1, {scrollTo: { y: pos }, ease: Power2.easeOut});
});

$(document).on("click", "a[href^='#']", function (e) {
	var id = $(this).attr("href");

	if ($(id).length > 0) {
		e.preventDefault();
		controller.scrollTo(id);
	}
});



/*-------------------------------------*\
	ScrollReveal scroll animations plugin
\*-------------------------------------*/

window.sr = ScrollReveal();
sr.reveal("[data-scroll-reveal]", {
	distance: "20vh",
	opacity: 1,
	scale: 1,
	easing: "ease-out",
	reset: true,
	viewOffset: { top: -1000, right: 0, bottom: 0, left: 0 },
});



/*------------------------------------*\
	Subscribe Form
\*------------------------------------*/

$(document).ready(function() {
	$(".js-clear-input").each(function(){
		var input = $(this);
		var defaultValue = input.val();

		// reset input box on focus
		input.focus(function() {
			if(input.val() == defaultValue) {
				input.val("");
			}
		// restore default input value
		}).blur(function(){
			if(input.val().length == 0) {
					input.val(defaultValue);
				}
		});
	});
});

function validateSubscribeEmail() {
	var email = $("input[name='email']").val();
	var re = /\S+@\S+\.\S+/;

	if (!re.test(email)) {
		alert("Invalid email address");
	}

	return false;
}

$(".js-validate-email").bind("click", validateSubscribeEmail);