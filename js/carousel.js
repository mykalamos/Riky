const imagesContainer = document.getElementById('carouselImages');
const totalSlides = imagesContainer.children.length;
let currentIndex = 0;

const leftChevron = document.getElementById('leftBtn');
const rightChevron = document.getElementById('rightBtn');

function updateCarousel() {
    const slideWidth = imagesContainer.clientWidth;
    imagesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateChevrons();
}

function updateChevrons() {
    leftChevron.disabled = currentIndex === 0;
    rightChevron.disabled = currentIndex === totalSlides - 1;
}

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);