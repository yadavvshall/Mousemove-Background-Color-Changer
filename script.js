var rec = document.querySelector(".center");

rec.addEventListener("mousemove", function (dets) {
    var location = rec.getBoundingClientRect();
    var x = dets.clientX - location.left;

    if (x < location.width / 2) {
        var red = gsap.utils.mapRange(0, location.width / 2, 255, 0, x);
        gsap.to(rec, {
            backgroundColor: `rgb(${red}, 0, 0)`,
            ease: "power4", // Use a string for the easing function name
        });
    } else {
        var blue = gsap.utils.mapRange(location.width / 2, location.width, 0, 255, x);
        gsap.to(rec, {
            backgroundColor: `rgb(0, 0, ${blue})`,
            ease: "power4", // Use a string for the easing function name
        });
    }
});

rec.addEventListener("mouseleave",function(){
    gsap.to(rec, {
        backgroundColor : "white",
    });
});