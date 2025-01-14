function loader_page(){


var h5timer=document.querySelector("#line1-part1 h5");
var grow=0;
setInterval(function(){
    if(grow<100) h5timer.innerHTML=grow++
    else h5timer.innerHTML=grow
},40)

var tl=gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.2
})
tl.from("#line1-part1,.line h2",{
    opacity:0,
})
tl.to("#loader",{
    opacity:0,
   duration:0.4,
    delay:4
})
tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:0
})
tl.from(".page1-content h1,.page1-content h2",{
    y:120,
    stagger:0.15
})
}
loader_page()

function cursor_anime(){

document.addEventListener("mousemove",function(e){
    gsap.to("#crsr",{
        left:e.x,
        top:e.y,
    })
})
    Shery.makeMagnet("#nav-part2 h4");  
}
cursor_anime()
