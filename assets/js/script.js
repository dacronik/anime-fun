/*--================ Show menu ================*/
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');

/*--================ menu Show validate ================*/
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

/*--================ menu hidden validate ================*/
if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    });
}

/*--================ scroll header ================*/
function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 40) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}


window.addEventListener('scroll', scrollHeader);


/*--================ brand swiper ================*/
var brandSwiper = new Swiper('.brand-swiper', {
    spaceBetween:24,
    loop:true,
    breakpoints: {
        450: {
            slidesPerView:2,
            spaceBetween:24,
        },
        768: {
            slidesPerView:3,
            spaceBetween:24,
        },
        992: {
            slidesPerView:4,
            spaceBetween:24,
        },
        1200: {
            slidesPerView:5,
            spaceBetween:24,
        },
    },
});

/*--================ anime swiper ================*/
var animeSwiper = new Swiper('.anime-swiper', {
    spaceBetween:24,
    loop:true,
    breakpoints: {
        576: {
            slidesPerView:2,
            spaceBetween:24,
        },
        992: {
            slidesPerView:3,
            spaceBetween:24,
        },
        1200: {
            slidesPerView:4,
            spaceBetween:24,
        },
        1400: {
            slidesPerView:5,
            spaceBetween:24,
        },
    },
});


document.getElementById('anime-rating').addEventListener('click',(e)=>{
    console.log(e.target.nextElementsSibling);
    let el =e.target.nextElementsSibling
    while(el){
        console.log(el.nodeName)
        el=el.nextElementsSibling
    }
    if(e.target.classList.contains('fa-solid')){
        e.target.classList.remove('fa-solid');
        e.target.classList.add('fa-regular');
    }else{
        e.target.classList.add('fa-solid');
        e.target.classList.remove('fa-regular');
    }
    
})