// ! Typed - JS
let typed = new Typed(".typing", {
	strings: [
		"I'm a: <span>Senior SDET Engineer in Test</span>",
		"I'm a: <span>YouTuber</span>",
		"I'm a: <span>Sportswoman</span>",
		"My skills: <strong>HTML, CSS, SCSS</strong>",
		"My skills: <strong>JavaScript, React</strong>",
		"My Tool: <b>Visual Studio Code</b>",
		"My Tool: <b>IntelliJ IDEA</b>",
	],
	typeSpeed: 30,
	backSpeed: 5,
	loop: true,
});

// ! JQuery
$(function () {
	// ! Smooth scroll
	$(document).ready(function () {
			$('.header__nav ul a[data-scroll^="#"]').click(function () {
					let target = $(this).attr("data-scroll");
					$("html, body").animate(
							{
									scrollTop: $(target).offset().top - 130,
							},
							500
					);
					$('.header__nav ul a[data-scroll^="#"]').removeClass("active");
					$(this).addClass("active");
					return false;
			});
	});

	// ! scroll top
	$(function () {
			$("#scroll_top").click(function () {
					$("html, body").animate({ scrollTop: 0 }, 200);
					return false;
			});
	});

	// ! Menu nav toggle
	$("#nav_toggle").on("click", function (event) {
			event.preventDefault();

			$(this).toggleClass("active");
			$("#nav").toggleClass("active");
	});
});
