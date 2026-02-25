// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// MENU TOGGLE
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");
toggle.addEventListener("click", ()=>{
    nav.classList.toggle("active");
});

// SCROLL
function scrollToAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
}

// TYPED
new Typed(".typed", {
    strings: [
        "Professional English Instructor",
        "IELTS & Business English Coach",
        "Empowering Minds Through Language"
    ],
    typeSpeed:70,
    backSpeed:40,
    loop:true
});

// ACCORDION
document.querySelectorAll(".accordion-header").forEach(header=>{
    header.addEventListener("click", ()=>{
        header.classList.toggle("active");
        const content = header.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// ABOUT TOGGLE
const btn = document.querySelector(".toggle-btn");
const text = document.querySelector(".about-text");
btn.addEventListener("click", ()=>{
    if(text.style.display === "block"){
        text.style.display = "none";
        btn.textContent = "▼ Click to reveal";
    }else{
        text.style.display = "block";
        btn.textContent = "▲ Hide";
    }
});
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    let offset = window.scrollY;
    hero.style.backgroundPositionY = 30 + offset * 0.3 + '%';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
