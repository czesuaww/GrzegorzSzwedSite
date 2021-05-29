const headerButton = document.querySelector('.btn-outline-light');
const navbar = document.querySelector('.navbar');
const headerArrow = document.querySelector('.fa-chevron-down');

headerButton.addEventListener('click', ()=>{
    navbar.classList.add('unhide');
});

headerArrow.addEventListener('click', ()=>{
    navbar.classList.add('unhide');
});

document.addEventListener('DOMContentLoaded', function(){
    const scroolFunction = () => {
        if(window.scrollY>=937){
            navbar.classList.add('unhide');
        }else{
            navbar.classList.remove('unhide');
        }
    }
    window.addEventListener('scroll',scroolFunction);
});