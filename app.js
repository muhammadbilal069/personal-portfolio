// 1. AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});

// 2. Navbar Scroll Effect
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// 3. Theme Toggle (with localStorage support)
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

// Check for saved theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// 4. Mobile Menu & Hamburger Animation
const barBtn = document.getElementById("barBtn");
const menu = document.getElementById("menu");
const spans = barBtn.querySelectorAll("span");

barBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        resetBars();
    }
});

// Click anywhere to close menu
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !barBtn.contains(e.target)) {
        menu.classList.remove("active");
        resetBars();
    }
});

function resetBars() {
    spans.forEach(span => {
        span.style.transform = "none";
        span.style.opacity = "1";
    });
}

// 5. FAQ Accordion
document.addEventListener('click', function (e) {
    const question = e.target.closest('.faq-question');
    
    if (question) {
        const currentItem = question.parentElement;

        // Close other items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        // Toggle current item
        currentItem.classList.toggle('active');
    }
});