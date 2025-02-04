let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length; /* slides recebendo o elemento HTML com o id slides*/


/*responsável por exibir uma imagem específica no carrossel, conforme o índice*/
function showSlide(index) {   
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function proxSlide() {
    showSlide(currentIndex + 1);  /*Função pra passar pro proximo slide*/
}

function voltaSlide() {
    showSlide(currentIndex - 1); /*Função pra Voltar Slide*/
}