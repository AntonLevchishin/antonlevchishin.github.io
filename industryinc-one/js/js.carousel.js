$(document).ready(function(){
  $("#carouselone").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
		animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
});


$('#carouseltwo').owlCarousel({
  nav: false,
  loop: true,
  margin:20,
  autoplay: true,
  responsive:{
    0:{
      items:2,
      margin: 0
    },
    600:{
      items:3
    },
    800:{
      items:4
    },
    992:{
      items:4
    },
    1200:{
      items:5
    },
  }
});

$('#carouselthree').owlCarousel({
  nav: true,
  dots: true,
  loop: false,
  autoplay: true,
  items: 1,
});

