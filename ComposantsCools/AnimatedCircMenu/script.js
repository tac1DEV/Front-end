let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
})