const hamburger = document.querySelector(".hamburger");
const mobileRectangle = document.querySelector(".mobile-content");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileRectangle.classList.toggle("is-active");
});