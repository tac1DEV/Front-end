let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
let mountains_front = document.getElementById("mountains_front");
let sec = document.getElementById("sec");
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.5 + "px";
    moon.style.top = value * 0.65 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = "0px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 1.35 + "px";
    btn.style.marginTop = value * 1.5 + "px";
    header.style.top = value * 0.5 + "px";

})