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

/* Alteração no header da pgn quando ocorrer o scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll' , function(){
    if (window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    }
    else{
        header.classList.remove('scroll')
    }
})

/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
       el: '.swiper-pagination',
   },
   mousewheel: true,
   keyboard: true
  });

  /* ScrollReveal: Mostrar elementos quando der Scroll na pgn*/
  const scrollReveal = ScrollReveal({
      origin:'top' ,
      distance: '30px' ,
      duration: 900 ,
      reset: true 
  })

  scrollReveal.reveal(
      `#home .text , #home .image ,
       #about .text , #about .image,
       #services header , #services .card,
       #testimonials header , #testimonials .testimonials,
       #contact .text , #contact .links
      `,
        {inteval:100}
  )