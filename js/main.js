
document.addEventListener("DOMContentLoaded", function(event) {
// SMOOTH SCROLL

    // var html = document.documentElement;
    // var body = document.body;

    // var scroller = {
    // target: document.querySelector("#scroll-container"),
    // ease: 0.03, // <= scroll speed
    // endY: 0,
    // y: 0,
    // resizeRequest: 1,
    // scrollRequest: 0,
    // };

    // var requestId = null;

    // TweenLite.set(scroller.target, {
    // rotation: 0.01,
    // force3D: true
    // });

    // window.addEventListener("load", onLoad);

    // function onLoad() {    
    // updateScroller();  
    // window.focus();
    // window.addEventListener("resize", onResize);
    // document.addEventListener("scroll", onScroll); 
    // }

    // function updateScroller() {
    
    // var resized = scroller.resizeRequest > 0;
        
    // if (resized) {    
    //     var height = scroller.target.clientHeight;
    //     body.style.height = height + "px";
    //     scroller.resizeRequest = 0;
    // }
        
    // var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    // scroller.endY = scrollY;
    // scroller.y += (scrollY - scroller.y) * scroller.ease;

    // if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    //     scroller.y = scrollY;
    //     scroller.scrollRequest = 0;
    // }
    
    // TweenLite.set(scroller.target, { 
    //     y: -scroller.y 
    // });
    
    // requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    // }

    // function onScroll() {
    // scroller.scrollRequest++;
    // if (!requestId) {
    //     requestId = requestAnimationFrame(updateScroller);
    // }
    // }

    // function onResize() {
    // scroller.resizeRequest++;
    // if (!requestId) {
    //     requestId = requestAnimationFrame(updateScroller);
    // }
    // }





    // IMAGE ANIMATION
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.1
    // };
  
    // let revealCallback = (entries) => {
    //   entries.forEach((entry) => {
    //     let container = entry.target;
  
    //     if (entry.isIntersecting) {
    //       container.classList.add("animating");
    //       return;
    //     }
    //   });
    // };
  
    // let revealObserver = new IntersectionObserver(revealCallback, options);
  
    // document.querySelectorAll(".reveal").forEach((reveal) => {
    //   revealObserver.observe(reveal);
    // });

    // //TEXT ANIMATION
    // let fadeupCallback = (entries) => {
    //   entries.forEach((entry) => {
    //     let container = entry.target;
    //     container.classList.add("not-fading-up");
  
    //     if (entry.isIntersecting) {
    //       container.classList.add("fading-up");
    //       return;
    //     }
    //   });
    // };
  
    // let fadeupObserver = new IntersectionObserver(fadeupCallback, options);
  
    // document.querySelectorAll(".text-reveal").forEach((fadeup) => {
    //   fadeupObserver.observe(fadeup);
    // });

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


    let ctrl3 = new ScrollMagic.Controller();

    // each image
    [].forEach.call(document.querySelectorAll('.reveal'), function(e) {

      // gsap timeline
      let tl3 = new TimelineMax();
      tl3.from(e, 2, { yPercent: -100, ease: Expo.easeInOut, duration: 3 }, .5);
      tl3.from(e.querySelector('.img'), 2, {  yPercent: 100, ease: Expo.easeInOut }, .5);

      // scrollmagic scene
      let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .1, reverse:false })
      .setTween(tl3)
      .addTo(ctrl3);

    });






    
    var rellax = new Rellax('.rellax', {
      center: true,
      vertical: true,
      horizontal: false
    });


    // gsap.registerPlugin(ScrollTrigger);
    // gsap.set('.cases__title', {autoAlpha: 1})

    // gsap.utils.toArray(".cases").forEach((section, i) => {
    //   gsap.from(section.querySelectorAll(".cases__title"), {
    //     scrollTrigger: {
    //       trigger: section,
    //       // markers: true,
    //       start: "top 95%"
    //     },
    //     yPercent: 200,
    //     duration: 0.8,
    //     ease: "easeInOut"
    //   });
		// });

})

