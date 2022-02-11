const get = (element) => document.querySelector(element);
const getAll = (element) => document.querySelectorAll(element);

const navToggle = get(".nav-toggle");
const navLinks = getAll(".nav-link");

function handleNavClick() {
    document.body.classList.toggle("nav-open");
}

navLinks.forEach(link => link.addEventListener("click", handleNavClick));

navToggle.addEventListener("click", handleNavClick);