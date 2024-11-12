const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburgerOpen.classList.toggle("hidden");
    hamburgerClose.classList.toggle("hidden");

});


// const mobile = document.getElementById("mobile-menu");

// window.addEventListener("scroll", function () {

//     if (window.scrollY > 300) {
//         mobile.classList.add("active");
//     } else {
//         mobile.classList.remove("active");
//     }
// });




let close_one = document.querySelectorAll("#mobile-menu a")

close_one.forEach(function (item) {
    item.addEventListener("click", function (e) {
        mobileMenu.classList.toggle("hidden");
    })
})