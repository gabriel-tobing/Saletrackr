/* Script Navbar on Scroll */

const navbarEl = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    navbarEl.classList.toggle("scroll", window.scrollY > 0)
});



/* Script Highlight Navbar Link */

const section = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar-container .navbar-content .navbar-content-right .navbar-list .navbar-item a[href*=" + sectionId + "]").classList.add("active-link");
        } else {
            document.querySelector(".navbar-container .navbar-content .navbar-content-right .navbar-list .navbar-item a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}