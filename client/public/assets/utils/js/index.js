/* Script Swiper */

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});



/* Script Current Year Copyright */

const currentYearEl = document.getElementById("current-year");

currentYearEl.innerText = new Date().getFullYear();