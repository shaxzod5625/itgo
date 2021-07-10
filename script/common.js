///////////////////////////////////////////////////////////
var burger = document.querySelector('.header-nav__burger'),
    bar = document.querySelector('.header-nav__bar'),
    body = document.querySelector('body'),
    header = document.querySelector('.header');
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        bar.style.right = '0'
        body.style.overflow = 'hidden'
    } else {
        bar.style.right = '-100%'
        body.style.overflow = 'auto'
    }
})
// ////////////////////////////////



var swiper = new Swiper(".works-slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


var otherSwiper = new Swiper(".other-slider", {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoHeight: false,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            spaceBetween: 10
        },
        992: {
            spaceBetween: 20
        },
    },
});

///////////////////////////////// acardion //////////////////////////////
var accardionItem = document.querySelectorAll('.other-accardion__item');
accardionItem.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.classList.toggle('active')
    })
})
/////modal/////
var modal = document.querySelector('.modal');
var btn = document.querySelector('.header-nav__list_btn');
var closeModal = document.querySelector('.modal-cart__icon');
btn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.classList.add('active')
});
closeModal.addEventListener('click', () => {
    modal.classList.remove('active')
})
modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        modal.classList.remove('active')
    }
})