const headerButton = document.querySelector('.btn-outline-light');
const navbar = document.querySelector('.navbar');
const headerArrow = document.querySelector('.fa-chevron-down');

headerButton.addEventListener('click', ()=>{
    navbar.classList.add('unhide');
});

headerArrow.addEventListener('click', ()=>{
    navbar.classList.add('unhide');
});
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    
//     if (currentScrollPos > 20) {
//       // I am using 'display' instead of 'top':
//       document.getElementById("navbar").style.opacity = "1";
//     } else {
//       document.getElementById("navbar").style.opacity = "0";
//     }
// }

