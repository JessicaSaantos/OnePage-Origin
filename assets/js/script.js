/*Funcionalidade de abrir e fechar o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click' , function(){
        nav.classList.toggle('show')
    })
}

/* Esconder menu ao selecionar um item */

const links = document.querySelectorAll('nav ul li a')

for (const link of links ) {
    link.addEventListener('click' , function (){
        nav.classList.remove('show')
    })
}