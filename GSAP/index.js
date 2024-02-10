var tl = gsap.timeline();

tl.to("#box",{
    x:1000,
    y:300,
    z:800,
    duration:2,
    delay: 1,
    backgroundColor: "pink",
    rotate: 360,
    scale: 2
})
tl.from("#box1",{
    y:500,
    duration:2,
    delay: 3,
    backgroundColor: "gold",
    rotate: 360,
    scale: 0
})
tl.to("#box3",{
    z:500,
    duration:2,
    delay: 5,
    backgroundColor: "rose",
    rotate: 360,
    scale: 0.4
})

tl.to("h1",{
    x: 600,
    duration:1,
    delay: 1,
    color: "black"
})
tl.to("h2",{
    x: 600,
    y: 300,
    z: 300,
    duration:1,
    delay: 1,
    color: "grey"
})
tl.to("h3",{
    x: 600,
    y: 100,
    z: 100,
    zIndex: 999,
    duration:1,
    delay: 1,
    color: "darkgreen",
    scale: 0.2,
    rotate: 300,
    repeat: -1,
    yoyo: true   
})

