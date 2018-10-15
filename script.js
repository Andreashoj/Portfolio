
let menuSwitch = true;
const menu = document.querySelector('.menu');
const menuLi = document.querySelector('.mobilList')
const menuSvg = document.querySelectorAll('.mobile-menu-svg');
document.querySelector('.fa').addEventListener('click', function(){
    if (menuSwitch == true) { 
        menu.style.width = '70%';
        menuSwitch = false;
        menuLi.style.opacity = 1;
        for(var i = 0; i < menuSvg.length; i++) {
            menuSvg[i].style.opacity = 1;
        }
    } else { 
        menu.style.width = '0%';
        menuSwitch = true;
        menuLi.style.opacity = 0;
        for(var i = 0; i < menuSvg.length; i++) {
            menuSvg[i].style.opacity = 0;
        }
    }
})

window.addEventListener('resize', function(){
    if (window.innerWidth > 769) {
        menu.style.width = '0%';
        menuSwitch = true;
        menuLi.style.opacity = 0;
        for(var i = 0; i < menuSvg.length; i++) {
            menuSvg[i].style.opacity = 0;
        }
    }

})
