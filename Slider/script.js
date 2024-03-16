const images = document.querySelectorAll('.slider-line .slider-Content');
const sliderLine = document.querySelector('.slider .slider-line');
const sliderButtons = document.querySelectorAll('.slider-button');

let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
}

function autoSlide() {
    let c = count;
    images[c].classList.add('slide-out');
    setTimeout(() => {
        images[c].classList.remove('slide-out');
    }, 2001)
    count++;
    if (count >= images.length) {
        count = 0;
    }
    sliderLine.style.transform = `translateX(-${count * width}px)`;
}

let autoSlideInterval = setInterval(autoSlide, 5000);

init();
window.addEventListener('resize', init);

sliderButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        if (button.innerText === "Previous") {
            let c = count;
            images[c].classList.add('slide-out');
            setTimeout(() => {
                images[c].classList.remove('slide-out');
            }, 2001)
            count--;
            if (count < 0) {
                count = images.length - 1;
            }
        } else if (button.innerText === "Next") {
            let b = count;
            images[b].classList.add('slide-out');
            setTimeout(() => {
                images[b].classList.remove('slide-out');
            }, 2001)
            count++;
            if (count > images.length - 1) {
                count = 0;
            }
        }
        sliderLine.style.transform = `translateX(-${count * width}px)`;

        autoSlideInterval = setInterval(autoSlide, 5000);
    });
});
