var navItem = document.querySelector('.navbar');
console.log(navItem);

window.onscroll = function() {
    floatNavBar();
}

var navBar = document.querySelector('.navbar');

var sticky = navBar.offsetTop;

function floatNavBar() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky');
    }
}