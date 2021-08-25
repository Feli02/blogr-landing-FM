let btn = document.getElementById('btn_burger_menu')

let burger_menu = document.getElementById('main_nav_bar')


let btn_product_BM = document.getElementById('btn_dropdown_product')
let btn_company_BM = document.getElementById('btn_dropdown_company')
let btn_connect_BM = document.getElementById('btn_dropdown_connect')


let list_product_BM = document.getElementById('list_product')
let items_product_BM = document.querySelectorAll('.inner-nav-item-product')

let list_company_BM = document.getElementById('list_company')
let items_company_BM = document.querySelectorAll('.inner-nav-item-company')

let list_connect_BM = document.getElementById('list_connect')
let items_connect_BM = document.querySelectorAll('.inner-nav-item-connect')


btn.addEventListener('click', () => {
    if(burger_menu.classList.contains('nav-burger-menu-open')){
        //Close connect dropdown if open
        if(list_connect_BM.classList.contains('open-list-connect')){
            list_connect_BM.classList.add('close-list-connect')
            list_connect_BM.classList.remove('open-list-connect')
    
            for(i=0; i < items_connect_BM.length; i++){
                items_connect_BM[i].classList.remove('open-item')
                items_connect_BM[i].classList.add('close-item')
            }
            btn_connect_BM.classList.remove('btn-open-color-change')
        }

        //Close product dropdown if open
        if(list_product_BM.classList.contains('open-list-product')){
            list_product_BM.classList.add('close-list-product')
            list_product_BM.classList.remove('open-list-product')
    
            for(i=0; i < items_product_BM.length; i++){
                items_product_BM[i].classList.remove('open-item')
                items_product_BM[i].classList.add('close-item')
            }
            btn_product_BM.classList.remove('btn-open-color-change')
        }

        //Close company dropdown if open
        if(list_company_BM.classList.contains('open-list-company')){
            list_company_BM.classList.add('close-list-company')
            list_company_BM.classList.remove('open-list-company')

            for(i=0; i < items_company_BM.length; i++){
                items_company_BM[i].classList.remove('open-item')
                items_company_BM[i].classList.add('close-item')
            }
            btn_company_BM.classList.remove('btn-open-color-change')
        }


        //Nav toggle
        burger_menu.classList.remove('nav-burger-menu-open')
        burger_menu.classList.add('nav-burger-menu-close')

    }else{

        burger_menu.classList.add('nav-burger-menu-open')
        burger_menu.classList.remove('nav-burger-menu-close')
    }
})