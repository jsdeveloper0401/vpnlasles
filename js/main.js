//loading start//
const loading = document.getElementById("loading");

const loadingDuration = 500; // 1s
setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);

//start light-dark//
let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "light") {
        this.firstElementChild.src = "../assets/images/light.svg";
    } else {
        this.firstElementChild.src = "../assets/images/dark.svg";
    }
    document.body.classList.toggle("light");
});

//navbar-shrink//
window.addEventListener("scroll", function () {
    shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
    if (scrollY > 100) {
        navbar.classList.add("navbar-shrink");
    } else {
        navbar.classList.remove("navbar-shrink");
    }
}

//owl-carousel//
$(".owl-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
        '<img src="../assets/images/arrow-left.svg"/>',
        '<img src="../assets/images/arrow-right.svg"/>',
    ],
    //  autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        800: {
            items: 3,
        },
    },
});
//navbar responsive//
let burger = document.querySelector(".navbar-open");
let showBurgerMenu = document.querySelector(".open-navbar-list");
let hideBurgerMenu = document.querySelector(".close-navbar");

burger.addEventListener("click", (e) => {
    showBurgerMenu.classList.toggle("open-navbar-list-active");
});

hideBurgerMenu.addEventListener("click", (e) => {
    showBurgerMenu.classList.toggle("open-navbar-list-active");
});
//back top//
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backtop.classList.add("backtop-show");
    } else {
        backtop.classList.remove("backtop-show");
    }
}