let btn = document.getElementById('btn_burger_menu')

let burger_menu = document.getElementById('main_nav_bar')

btn.addEventListener('click', () => {
    if(burger_menu.classList.contains('nav-burger-menu-open')){
        burger_menu.classList.remove('nav-burger-menu-open')
        burger_menu.classList.add('nav-burger-menu-close')

    }else{

        burger_menu.classList.add('nav-burger-menu-open')
        burger_menu.classList.remove('nav-burger-menu-close')
    }
})