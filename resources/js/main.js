$(document).ready(function(){

	 //STICKY NAVIGATION
	 $(".js--sticky-nav").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky-nav-bg");
		} else {
			$("nav").removeClass("sticky-nav-bg");
		}
	});
	//STICKY MENU
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('nav').addClass('sticky-nav-bg');
		} else {
			$('nav').removeClass('sticky-nav-bg');
		}
	});
    //FLEXSLIDER
    $('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});
	// Fancybox
	$('.work-box').fancybox();
	

  	//  START HAMBURGER MENU ICON
		 $('.circle').click(function(){
		$(this).toggleClass('close');
	});
	//  END HAMBURGER MENU ICON

	// TOGGLE NAV SHOWING
	$('.circle').click(function(){
		$('#header ul').toggleClass('open_nav');
	});

	$('#header nav img').click(function(){
		$('#header ul li a').removeClass('active-first');
	});

	// MOBILE NAV CLOSE WITH LOGO
	$('#header nav img').click(function(){
		$('#hamburger_menu .circle').removeClass('close');
		$('#header ul').removeClass('open_nav')
	});
	$('#header ul li a').click(function(){
		$('#header ul').removeClass('open_nav');
		$('#hamburger_menu .circle').removeClass('close');
	});



});

// HEIGHLIGHT NAVIGATION ON SCROLL
const section = document.querySelectorAll('section');
const navlia = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', ()=> {
	let current = '';
	section.forEach( section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if(pageYOffset >= (sectionTop - sectionHeight / 3)){
			current = section.getAttribute('id');
		}
	})
	navlia.forEach(a => {
		a.classList.remove('active-first');
		if(a.classList.contains(current)){
			a.classList.add('active-first')
		}
	})
})
