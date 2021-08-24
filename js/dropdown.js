let btn_product = document.getElementById('btn_dropdown_product')

let btn_company = document.getElementById('btn_dropdown_company')

let btn_connect = document.getElementById('btn_dropdown_connect')


btn_product.addEventListener('click', () => {
    let list_product = document.getElementById('list_product')
    let items_product = document.querySelectorAll('.inner-nav-item-product')

    let list_company = document.getElementById('list_company')
    let items_company = document.querySelectorAll('.inner-nav-item-company')

    let list_connect = document.getElementById('list_connect')
    let items_connect = document.querySelectorAll('.inner-nav-item-connect')


    if(list_product.classList.contains('open-list-product')){
        //Close product dropdown
        list_product.classList.add('close-list-product')
        list_product.classList.remove('open-list-product')

        //toggle classes
        for(i=0; i < items_product.length; i++){
            items_product[i].classList.remove('open-item')
            items_product[i].classList.add('close-item')
        }

        btn_product.classList.remove('btn-open-color-change')
    }else{
        //Open product dropdown
        list_product.classList.add('open-list-product')
        list_product.classList.remove('close-list-product')

        for(i=0; i < items_product.length; i++){
            items_product[i].classList.add('open-item')
            items_product[i].classList.remove('close-item')
        }

        btn_product.classList.add('btn-open-color-change')

        //Close connect dropdown if open
        if(list_connect.classList.contains('open-list-connect')){
            list_connect.classList.add('close-list-connect')
            list_connect.classList.remove('open-list-connect')
    
            for(i=0; i < items_connect.length; i++){
                items_connect[i].classList.remove('open-item')
                items_connect[i].classList.add('close-item')
            }
            btn_connect.classList.remove('btn-open-color-change')
        }
        

       //Close company dropdown if open
       if(list_company.classList.contains('open-list-company')){
            list_company.classList.add('close-list-company')
            list_company.classList.remove('open-list-company')

            for(i=0; i < items_company.length; i++){
                items_company[i].classList.remove('open-item')
                items_company[i].classList.add('close-item')
            }
            btn_company.classList.remove('btn-open-color-change')
       }
    }
})




btn_company.addEventListener('click', () => {
    let list_company = document.getElementById('list_company')
    let items_company = document.querySelectorAll('.inner-nav-item-company')

    let list_connect = document.getElementById('list_connect')
    let items_connect = document.querySelectorAll('.inner-nav-item-connect')

    let list_product = document.getElementById('list_product')
    let items_product = document.querySelectorAll('.inner-nav-item-product')



    if(list_company.classList.contains('open-list-company')){
        //Close company dropdown
        list_company.classList.add('close-list-company')
        list_company.classList.remove('open-list-company')

        for(i=0; i < items_company.length; i++){
            items_company[i].classList.remove('open-item')
            items_company[i].classList.add('close-item')
        }
        btn_company.classList.remove('btn-open-color-change')

    }else{
        //Open company dropdown
        list_company.classList.add('open-list-company')
        list_company.classList.remove('close-list-company')

        for(i=0; i < items_company.length; i++){
            items_company[i].classList.add('open-item')
            items_company[i].classList.remove('close-item')
        }
        btn_company.classList.add('btn-open-color-change')

        //Close connect dropdown if open
        if(list_connect.classList.contains('open-list-connect')){
            list_connect.classList.add('close-list-connect')
            list_connect.classList.remove('open-list-connect')
    
            for(i=0; i < items_connect.length; i++){
                items_connect[i].classList.remove('open-item')
                items_connect[i].classList.add('close-item')
            }
            btn_connect.classList.remove('btn-open-color-change')
        }

        //Close product dropdown if open
        if(list_product.classList.contains('open-list-product')){
            list_product.classList.add('close-list-product')
            list_product.classList.remove('open-list-product')
    
            for(i=0; i < items_product.length; i++){
                items_product[i].classList.remove('open-item')
                items_product[i].classList.add('close-item')
            }
            btn_product.classList.remove('btn-open-color-change')
        }
    }
})


btn_connect.addEventListener('click', () => {
    let list_connect = document.getElementById('list_connect')
    let items_connect = document.querySelectorAll('.inner-nav-item-connect')

    let list_product = document.getElementById('list_product')
    let items_product = document.querySelectorAll('.inner-nav-item-product')

    let list_company = document.getElementById('list_company')
    let items_company = document.querySelectorAll('.inner-nav-item-company')


    if(list_connect.classList.contains('open-list-connect')){
        //Close connect dropdown
        list_connect.classList.add('close-list-connect')
        list_connect.classList.remove('open-list-connect')

        for(i=0; i < items_connect.length; i++){
            items_connect[i].classList.remove('open-item')
            items_connect[i].classList.add('close-item')
        }
        btn_connect.classList.remove('btn-open-color-change')
    }else{
        //Open connect dropdown
        list_connect.classList.add('open-list-connect')
        list_connect.classList.remove('close-list-connect')

        for(i=0; i < items_connect.length; i++){
            items_connect[i].classList.add('open-item')
            items_connect[i].classList.remove('close-item')
        }
        btn_connect.classList.add('btn-open-color-change')

        //Close company dropdown if open
        if(list_company.classList.contains('open-list-company')){
            list_company.classList.add('close-list-company')
            list_company.classList.remove('open-list-company')
    
            for(i=0; i < items_company.length; i++){
                items_company[i].classList.remove('open-item')
                items_company[i].classList.add('close-item')
            }
            btn_company.classList.remove('btn-open-color-change')
        }

        //Close product dropdown if open
        if(list_product.classList.contains('open-list-product')){
            list_product.classList.add('close-list-product')
            list_product.classList.remove('open-list-product')
    
            for(i=0; i < items_product.length; i++){
                items_product[i].classList.remove('open-item')
                items_product[i].classList.add('close-item')
            }
            btn_product.classList.remove('btn-open-color-change')
        }
    }
})