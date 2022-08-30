
document.addEventListener("DOMContentLoaded", function(event) {

  // OPEN MENU
  $(document).on('click', '.hamburger', function() {
    $('.navbar').toggleClass('active');
    $('.hamburger').toggleClass('active');
  })

  // TEXT REVEAL
  var $revealY = $('.text-reveal-inner');

  $($revealY).each(function(i) {
    gsap.from($revealY[i], {
      scrollTrigger: {
        trigger: $revealY[i],
      },
      y: 140,
      opacity: 0,
      duration: 1.5,
      ease: Power4.easeOut
    })
  })

  // IMAGES REVEAL
  let ctrl3 = new ScrollMagic.Controller();
  [].forEach.call(document.querySelectorAll('.reveal'), function(e) {
    let tl3 = new TimelineMax();
    tl3.from(e, 2, { yPercent: -100, ease: Expo.easeInOut, duration: 3 }, .3);
    tl3.from(e.querySelector('.img'), 2, {  yPercent: 100, ease: Expo.easeInOut }, .3);
    let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .1, reverse:false })
    .setTween(tl3)
    .addTo(ctrl3);
  });

  // PARALLAX 

  if(window.matchMedia('(min-width: 776px)').matches){
    var rellax = new Rellax('.rellax', {
      center: true,
      vertical: true,
      horizontal: false
    });
    SmoothScroll({
      animationTime : 700,
      stepSize : 70,
      accelerationDelta : 100,
      accelerationMax : 2,

      keyboardSupport : true,
      arrowScroll : 50,
      pulseAlgorithm : true,
      pulseScale : 4,
      pulseNormalize : 1,
      touchpadSupport : true,
  })
  }

  $(".title-item-1").click(function() {
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#mobile-applications").offset().top - 170}, 1500);
    });
  $(".title-item-2").click(function() {
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#web-applications").offset().top - 170}, 1500);
    });
  $(".title-item-3").click(function() {
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#landing-pages").offset().top - 170}, 1500);
    });
  $(".title-item-4").click(function() {
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#websites").offset().top - 170}, 1500);
    });
})

