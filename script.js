/*******************************************IMAGE GALLERY*******************************************/

/*******Filtering*******/

// init Isotope
  var $grid = $('.img-grid').isotope({
    itemSelector: '.img-container',
    //layoutMode: 'fitRows',
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {

    },
  };

  // bind filter button click
  $('#filter-btn').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


/**wow**/
new WOW().init();
/*******************************************SCROLL MAGIC*******************************************/

/*******Scroll for the links*******/
var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: "#home", duration: $("#home").height()}).setClassToggle("#home-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: $("#about").height() + 100}).setClassToggle("#about-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#work", duration: $("#work").height()}).setClassToggle("#work-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#projects", duration: $("#projects").height()}).setClassToggle("#projects-link", "active").addTo(controller);
new ScrollMagic.Scene({triggerElement: "#contact", duration: $("#contact").height()}).setClassToggle("#contact-link", "active").addTo(controller);

/*******Other Scroll Magic Elements*******/

$(document).ready(function(){

  var controller2 = new ScrollMagic.Controller();

  //Progress bars
  var progress_bar_scene = new ScrollMagic.Scene({

    triggerElement: '.about-resume',
    triggerHook: .7,

  })
  .setClassToggle('.inner-percent', 'inner-percent-animate')
  .reverse(false)
  .addTo(controller);
    
  //Icons in Services
  var about_scene = new ScrollMagic.Scene({
    triggerElement: '.trigger',
    triggerHook: .7
  })
  .setClassToggle('.icon', 'work-icon-animate')
  .reverse(false)
  .addTo(controller2);
    
});

/*******************************************MOBILE NAV*******************************************/
$('.mobile-menu').click(function(){
  if($('#main-header').hasClass('open-nav')){
     $('#main-header').removeClass('open-nav');
  }else{
    $('#main-header').addClass('open-nav');
  }
});

/*******************************************NAV SCROLL*******************************************/
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/*******************************************PRELOAD*******************************************/
var overlay = document.getElementById("preload-overlay");

window.addEventListener('load', function(){
  overlay.style.display = "none";
})

/***********************Particles*************/
jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },4000);
  });
});
/***********************Particles*************/
particlesJS("particles-js", 
{"particles":{
  "number":{
    "value":120,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#E52E2D"},
    "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
    "polygon":{"nb_sides":5},
    "image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{
      "value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
      "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
      "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
      "move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
      "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
      "onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
      "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},
      "push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
      var count_particles, stats, update; 
      stats = new Stats; 
      stats.setMode(0); 
      stats.domElement.style.position = 'absolute'; 
      stats.domElement.style.left = '0px'; 
      stats.domElement.style.top = '0px'; 
      document.body.appendChild(stats.domElement); 
      count_particles = document.querySelector('.js-count-particles'); 
      update = function() { stats.begin();stats.end(); 
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
      { 
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
      } 
      requestAnimationFrame(update); }; requestAnimationFrame(update);;

  /***********************END Particles*************/

/*********************************** Back-to-Top functionality ****************************************/

//hide it so it won't show on load
$('a.back-to-top').hide()
//scroll
$(document).ready($(window).scroll(function(){
  if($(window).scrollTop()<500){
    $('a.back-to-top').fadeOut('slow');
  }
  else{
    $('a.back-to-top').fadeIn('slow');
  }
}))
//click
$(document).ready($('a.back-to-top, #home').click(function(){
  $('html, body').animate({
    scrollTop:0
  },'slow');
  return false;
}))
//mouse hovering effects
$(document).ready($('a.back-to-top').mouseleave(function(){
  $('a.back-to-top').animate({opacity:'0.5'},'fast');}))
$(document).ready($('a.back-to-top').mouseenter(function(){
  $('a.back-to-top').animate({opacity:'0.9'},'fast');}))


/*********************************** Go Down ****************************************/