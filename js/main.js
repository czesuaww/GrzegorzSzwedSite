let $headerButton;
let $navbar;
let $headerArrow;

const prepareDOMElemets = () => {
    $headerButton = document.querySelector('.btn-outline-light');
    $navbar = document.querySelector('.navbar');
    $headerArrow = document.querySelector('.fa-chevron-down');
}

const prepareDOMEvents = () => {
    
    const arrowButtonFunction = () => {
        navbar.classList.add('unhide');
    };

    const scroolFunction = () => {
        if(window.scrollY>=700){
            navbar.classList.add('unhide');
        }else{
            navbar.classList.remove('unhide');
        }
    };
    $headerButton.addEventListener('click',arrowButtonFunction);
    $headerArrow.addEventListener('click',arrowButtonFunction);
    window.addEventListener('scroll',scroolFunction);
};

const main = () => {
    prepareDOMElemets();
    prepareDOMEvents();
};

document.addEventListener('DOMContentLoaded', main);
