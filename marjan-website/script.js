AOS.init();

var typed = new Typed(".typed", {
    strings: [
        "Professional English Instructor",
        "IELTS & Business English Coach",
        "Empowering Minds Through Language"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        header.classList.toggle("active"); // برای چرخش فلش
        const content = header.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
const toggleBtn = document.querySelector(".about-card .toggle-btn");
const aboutText = document.querySelector(".about-card .about-text");

toggleBtn.addEventListener("click", () => {
    const isVisible = aboutText.style.display === "block";
    aboutText.style.display = isVisible ? "none" : "block";
    toggleBtn.textContent = isVisible ? "▼ Click to reveal" : "▲ Hide";
});
// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
