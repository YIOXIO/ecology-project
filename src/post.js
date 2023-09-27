
import './pages/post.css';
import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';




const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
    },
    freeMode: true,
    breakpoints: {
        0: {
            direction: 'horizontal'
        },
        768: {
            direction: 'vertical'
        }
    }
});

const sliderImages = new Swiper('.slider__images .swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev'
    },
    grabCursor: true,
    thumbs: {
        swiper: sliderThumbs
    },
    breakpoints: {
        0: {
            direction: 'horizontal'
        },
        768: {
            direction: 'vertical'
        }
    }
});
