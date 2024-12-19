function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY < 1200) {
        navbar.style.backgroundColor = '#020041';
    } else if(window.scrollY < 2400){
        navbar.style.backgroundColor = '#000080';
    } else{
        navbar.style.backgroundColor = '#0051a3';
    }
});