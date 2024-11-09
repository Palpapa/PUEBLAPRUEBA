let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

let currentImageIndex = 0;
const images = [
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWF2MTMwa2UzMm83OW5rM212Y3YxMG96MXJiaW55djhmNHZyejB0bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fkKEwbaxMdoyGbpDVV/giphy.gif",
    "https://i.pinimg.com/originals/b7/a5/9d/b7a59d1c0637760445287af4ecd05f3b.gif",
    "https://cdn.pixabay.com/animation/2024/05/18/20/16/20-16-48-323_512.gif"
];

function showImage(index) {
    const carouselImage = document.getElementById("carousel-image");
    if (carouselImage) {
        carouselImage.src = images[index];
    }
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

window.onload = function() {
    showImage(currentImageIndex);
};
