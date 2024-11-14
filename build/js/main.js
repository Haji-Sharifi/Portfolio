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


document.querySelectorAll("#mobile-menu a").forEach(item => {
    item.addEventListener("click", () => {
        mobileMenu.classList.add("hidden"); // ensure the menu hides
        hamburgerOpen.classList.remove("hidden");
        hamburgerClose.classList.add("hidden");
    });
});



// const mobile = document.getElementById("mobile-menu");

// window.addEventListener("scroll", function () {

//     if (window.scrollY > 300) {
//         mobile.classList.add("active");
//     } else {
//         mobile.classList.remove("active");
//     }
// });




