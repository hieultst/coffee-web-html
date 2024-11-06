// handle scroll header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    const threshold = 100;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight + threshold) {
            header.style.top = `-${header.offsetHeight}px`;
            header.classList.remove('shadow');
        } else if (scrollTop < lastScrollTop && scrollTop > header.offsetHeight) {
            header.style.top = '0';
            header.classList.add('shadow');
        } else if (scrollTop <= header.offsetHeight) {
            header.style.top = '0';
            header.classList.remove('shadow');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

// Homepage carousel
const carouselItems = document.querySelectorAll('.carousel-item');
const dotsContainer = document.querySelector('.dots-container');

const dots = document.querySelectorAll('.dot-num');
function activateDot(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    document.querySelectorAll('.carousel-item').forEach(item => item.classList.remove('active'));
    console.log("check: ", document.querySelector(`[data-carousel-number="${index}"]`))
    document.querySelector(`[data-carousel-item="${index}"]`).classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        activateDot(index);
        currentIndex = index;
    });
});