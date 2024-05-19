// Toggle class active
const navbarNav  = document.querySelector ('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#menuh').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menuh');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});