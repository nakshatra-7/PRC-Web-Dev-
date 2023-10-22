const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circlemousefollower(){
        window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform= `translate(${dets.clientX}px, ${dets.clientY}px)`;
        })
}

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
    y: '-10',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut
    })

    .to(".boundinglem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2,
        delay: -1
    })

    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
  
}

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate=0;
    var diffrot= 0;

    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        });
    });

    elem.addEventListener("mousemove", function(details){
     var diff=details.clientY- elem.getBoundingClientRect().top;
     diffrot= details.clientX-rotate;
     rotate=details.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrot*0.2),
        })
    });
});


circlemousefollower();
firstPageAnim();
