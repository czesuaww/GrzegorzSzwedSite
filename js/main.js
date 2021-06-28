let $headerButton;
let $navbar;
let $headerArrow;
// let $navItems;
let $navbarCollapse;

const prepareDOMElemets = () => {
    $headerButton = document.querySelector('.btn-outline-light');
    $navbar = document.querySelector('.navbar');
    $headerArrow = document.querySelector('.fa-chevron-down');
    // $navItems = document.querySelectorAll('.nav-link');
    $navbarCollapse = document.querySelector('.navbar-collapse');
}

const prepareDOMEvents = () => {
    
    const arrowButtonFunction = () => {
        $navbar.classList.add('unhide');
    };
    

    const scroolFunction = () => {
        
        if(window.scrollY>=220){
            $navbar.classList.add('unhide');
        }else{
            $navbar.classList.remove('unhide');
        }
    };

    $(document).click(function (event) {
        let clickover = $(event.target);
        let _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $headerButton.addEventListener('click',arrowButtonFunction);
    $headerArrow.addEventListener('click',arrowButtonFunction);
    window.addEventListener('scroll',scroolFunction);
    // $navItems.forEach(item => item.addEventListener('click', () => $navbarCollapse.classList.remove('show'))); //hide navbar after click on link
    window.addEventListener('load', AOS.refresh);
};

const main = () => {
    prepareDOMElemets();
    prepareDOMEvents();
};

document.addEventListener('DOMContentLoaded', main);
