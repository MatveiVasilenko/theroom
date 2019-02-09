new WOW().init();

$(document).ready(function(){
  $('.testimonial').slick({
  	// autoplay: true,
  	// autoplaySpeed: 5000,
  	// dots: true,
  	// infinite: true,
  	speed: 600,
 	slidesToShow: 1,
 	prevArrow: '<svg class="slick-prev" width="32px" height="32px"><use xlink:href="#arrowLeft"></use></svg>',
 	nextArrow: '<svg class="slick-next" width="32px" height="32px"><use xlink:href="#arrowRight"></use></svg>',
  	// adaptiveHeight: true
  	responsive: [
	    {
	      breakpoint: 768,
	      settings: {        
		  infinite: true,
		  dots: true,
		  arrows: false
	      }
    }]
  });

 $('.testimonial-group').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    // dots: true,
    // infinite: true,
    speed: 600,
  slidesToShow: 1,
  prevArrow: '<svg class="slick-prev slick-prev--group" width="32px" height="32px"><use xlink:href="#arrowLeft"></use></svg>',
  nextArrow: '<svg class="slick-next slick-next--group" width="32px" height="32px"><use xlink:href="#arrowRight"></use></svg>',
    // adaptiveHeight: true
    responsive: [
      {
        breakpoint: 768,
        settings: {        
      infinite: true,
      dots: true,
      arrows: false
        }
    }]
  });

$('.portfolios').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: '<svg class="slick-prev slick-prev--portfolio" width="48px" height="48px"><use xlink:href="#arrowLeft"></use></svg>',
 	nextArrow: '<svg class="slick-next slick-next--portfolio" width="48px" height="48px"><use xlink:href="#arrowRight"></use></svg>',
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // infinite: true,
  // dots: true,
  // arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {        
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
      }
    }]
  // prevArrow: '<img class="slick-prev" src="img/arrowLeft.png" alt="">',


});


// $('.carousel').carousel({
//   interval: 10000
// });
});