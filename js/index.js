// $(document).ready(() =>{

//     $("#crew").on("click", e =>{
//         let elem = $(e.currentTarget).prev();

//         elem.slideToggle();
//     })
// })

//burger
let burger =document.querySelector('.burger');
let menu = document.querySelector('.menu');
let body = document.querySelector('.body');

let links = document.querySelector('.menu__link');

links.forEach(element =>{
    element.addEventListener('click', toggleMenu);
});

function toggleMenu(){
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('body--active-menu');
}

burger.addEventListener('click', toggleMenu)