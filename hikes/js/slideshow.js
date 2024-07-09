document.querySelector('.prev').onclick = previousSlide;
document.querySelector('.next').onclick = nextSlide;
let slideIndex = 0;
let slides = document.querySelectorAll('.mySlides');
showSlide(0);
function previousSlide(){
    showSlide(-1);
}

function nextSlide(){
    showSlide(1);
}

function showSlide(n){
    slides[slideIndex].style.display = "none";
    slideIndex +=n;
    if(slideIndex>slides.length-1){slideIndex=0}
    if(slideIndex<0){slideIndex=slides.length-1}
    console.log(slideIndex)
    slides[slideIndex].style.display="block";
}
