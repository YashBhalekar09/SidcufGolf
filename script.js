var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove" , function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-250 +"px"
    blur.style.top=dets.y-250 +"px"
})


var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale= 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale= 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })

})

gsap.to("#nav",{
    backgroundColor:"black", //change background
    duration:"1", //kiti duration ne hoil
    height:"110px", //height kiti hoil
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,//for show trigger lagla ki ny 
        start:"top -10%",
        end:"top -11%",
        scrub:3 //repeat karaych asel tr true false pn deu shkto
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:3
    }
})

// gsap.from("#about-us img, #about-us-in",{
//     y:90, //y manj element ahet te ubhe move hotil
//     opacity : 0, //initial stage la 0 asel
//     duration : 1,
//     stagger: 0.4 ,// ha ky krto tr ek ek element la load krto halu halu jasa duration deu tasa
//     scrollTrigger:{
//         trigger:"#about-us",
//         scroller:"body",
//         // markers:true,//for show trigger lagla ki ny 
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1 //repeat karaych asel tr true false pn deu shkto
//     },
// });

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
    //   markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

gsap.from(".card ", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
});

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
     
      start: "top 55%",
      end: "top 45%",
      scrub: 4
    }
})

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
     
      start: "top 55%",
      end: "top 45%",
      scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
    //   markers:true,
      start: "top 85%",
      end: "top 70%",
      scrub: 3,
    },
});

