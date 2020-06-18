// BURGER Меню
var menu = document.querySelector(".nav__menu");
var burger = document.querySelector(".burger");

	burger.addEventListener("click", function() {
		menu.classList.toggle("menu__show");
	});


// Слайдкр шапка
$('.intro').slick({
	dots: true,
 	autoplaySpeed: 2000,
 	autoplay: true,
 	arrows: false,
});

// Слайдер FEATURE
$('.feature').slick({

	nextArrow: '<button type="button" class=" slick__btn slick__next"></button>',
	prevArrow: '<button type="button" class=" slick__btn slick__prev"></button>',


	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 4,
	slidesToScroll: 1,
	 responsive: [
    {
      breakpoint: 930,
      settings: {
      slidesToShow: 3,
		  slidesToScroll: 1,
      }
    },
    {
    breakpoint: 550,
      settings: {
    	slidesToShow: 2,
		  slidesToScroll: 1,
		  arrows: false,
      }
  	},
  	 {
      breakpoint: 430,
      settings: {
    	slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
      }
  	}
  ]
});

// Спойлер ABOUT
$(document).ready(function() {
  $(".about__accordion--title").click(function(event) {
    if($(".about__content").hasClass("one")) {
      $(".about__accordion--title").not($(this)).removeClass("active");
      $(".about__accordion--text").not($(this).next()).slideUp(500);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

// Слайдер STUFF
$('.stuff').slick({
  nextArrow: '<button type="button" class="stuff__btn stuff__btn--next slick__btn slick__next"></button>',
  prevArrow: '<button type="button" class="stuff__btn stuff__btn--prev slick__btn slick__prev"></button>',

  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,

   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
    breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});

// FEEDBACK слайдер
$('.feedback').slick({
   nextArrow: '<button type="button" class="stuff__btn stuff__btn--next slick__btn slick__next"></button>',
   prevArrow: '<button type="button" class="stuff__btn stuff__btn--prev slick__btn slick__prev"></button>',

   responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        dots: true,
      }
    },
    ] 
});

// BLOG Слайдер
$('.blog').slick({

   nextArrow: '<button type="button" class="stuff__btn stuff__btn--next slick__btn slick__next"></button>',
   prevArrow: '<button type="button" class="stuff__btn stuff__btn--prev slick__btn slick__prev"></button>',

   slidesToShow: 3,
   slidesToScroll: 1,
   infinite: true, 

  responsive: [
    {
      breakpoint: 1260,
      settings: {
        arrows: false,
        dots: true,
      }
    },
     {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
     {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      }
    },
  ] 
});
