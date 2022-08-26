
document.addEventListener("DOMContentLoaded", function(event) {
// SMOOTH SCROLL

    var html = document.documentElement;
    var body = document.body;

    var scroller = {
    target: document.querySelector("#scroll-container"),
    ease: 0.03, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {    
    updateScroller();  
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll); 
    }

    function updateScroller() {
    
    var resized = scroller.resizeRequest > 0;
        
    if (resized) {    
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
    }
        
    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }
    
    TweenLite.set(scroller.target, { 
        y: -scroller.y 
    });
    
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    }

    function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
    }

    function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    };
  
    // IMAGE ANIMATION
  
    let revealCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
  
        if (entry.isIntersecting) {
          console.log(container);
          container.classList.add("animating");
          return;
        }
      });
    };
  
    let revealObserver = new IntersectionObserver(revealCallback, options);
  
    document.querySelectorAll(".reveal").forEach((reveal) => {
      revealObserver.observe(reveal);
    });

    var rellax = new Rellax('.rellax', {
      center: true,
      vertical: true,
      horizontal: false
    });
})

