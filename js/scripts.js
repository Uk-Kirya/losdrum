const hamburgerMenu = document.querySelector('.hamburger__menu');
const mobileMenu = document.querySelector('.mobile__menu');

function closeMenu() {
    hamburgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
}

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Закрытие по клику на ссылки
document.querySelectorAll('.mobile__menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        closeMenu();

        if (href.startsWith('#')) {
            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Закрытие по клику на кнопку
document.querySelector('.mobile__menu button').addEventListener('click', () => {
    closeMenu();

    document.getElementById('contacts').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});


const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme") || "dark";

document.documentElement.dataset.theme = savedTheme;
    toggle.dataset.theme = savedTheme;
    toggle.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        toggle.dataset.theme = next;
        localStorage.setItem("theme", next);
});