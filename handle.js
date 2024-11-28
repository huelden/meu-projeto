let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slides');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona a seção onde o vídeo será adicionado
    const section = document.getElementById("inicio");

    // Cria o elemento de vídeo
    const video = document.createElement("video");

    // Define os atributos do vídeo
    video.setAttribute("autoplay", true);
    video.setAttribute("muted", true);
    video.setAttribute("loop", true);
    video.classList.add("video-background");

    // Adiciona a fonte do vídeo
    const source = document.createElement("source");
    source.setAttribute("src", "imagem/8225738-sd_426_240_25fps.mp4"); // Substitua pelo caminho correto do vídeo
    source.setAttribute("type", "video/mp4");

    // Anexa a fonte ao vídeo
    video.appendChild(source);

    // Insere o vídeo no início da seção
    section.prepend(video);
});
