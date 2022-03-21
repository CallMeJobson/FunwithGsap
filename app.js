const egg = document.getElementById("egg")

const timeline = gsap.timeline({defaults: {duration:0.75, ease: "power1.out"} })

timeline.fromTo(".egg", { y: -50}, {y:0, yoyo:true, repeat: -1})

