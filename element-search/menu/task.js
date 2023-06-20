
const menuLink = document.querySelectorAll('.menu__link');
const addx = document.querySelector('.menu_active');

    for(let i = 0; i < menuLink.length; i++){
        let Link = menuLink[i];
        let menu = Link.closest('.menu__item').querySelector('.menu');

        Link.onclick = () => {
            if(menu){
                menu.classList.toggle('menu_active');
                return false;
            }
        } 
    }; 
