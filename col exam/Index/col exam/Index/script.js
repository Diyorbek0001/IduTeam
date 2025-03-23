// Navbar Scroll Effect
// Navbar scroll effekti
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth Scroll (faqat ichki sahifa havolalari uchun ishlaydi)
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Login modal ochish
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const closeModal = document.querySelector(".close");
const signupForm = document.getElementById("signup-form");

// Modalni ochish
if (loginBtn && loginModal) {
    loginBtn.addEventListener("click", function () {
        loginModal.style.display = "flex";
    });
}

// Modalni yopish (X tugmachasi bosilganda)
if (closeModal && loginModal) {
    closeModal.addEventListener("click", function () {
        loginModal.style.display = "none";
    });
}

// Modalni tashqarisini bosganda yopish
window.addEventListener("click", function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Formni submit qilganda modalni yopish
if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Formni jo‘natishni oldini olish
        alert("Registration Successful!");
        loginModal.style.display = "none";
    });
}
