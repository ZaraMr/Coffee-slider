'use strict'

const slides = document.querySelectorAll('.slide')
const btnRight = document.querySelector('.right-side')
const btnLeft = document.querySelector('.left-side');
const dotsContainer = document.querySelector('.dots')

let curSlide = 0;
const maxSlide = slides.length;


// Functions
const creatDots = function() {
    slides.forEach((_, i) => {
        dotsContainer.insertAdjacentHTML('beforeend', `<button class='dot' data-num='${i}'></button>`)
    })
}

const activateDots = function(slide) {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('dot-active'));
    document.querySelector(`.dot[data-num ='${slide}'`).classList.add('dot-active')
}

const nextSlide = function() {
    if(curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
    curSlide++;
    }
    goToSlide(curSlide)
    activateDots(curSlide)
}

const prevSlide = function() {
    if(curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
    curSlide--;
    }
    goToSlide(curSlide)
    activateDots(curSlide)
}

const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}

const init = function(){
    goToSlide(0);
    creatDots();
    activateDots(0)
}
init()

// Event handlers
btnRight.addEventListener('click' , nextSlide)
btnLeft.addEventListener('click', prevSlide)

document.addEventListener('keydown', function(e) {
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
})

dotsContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dot')) {
        const {num} = e.target.dataset;
        console.log(num)
        activateDots(num)
        goToSlide(num)
    }
})