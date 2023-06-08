function exibirImagemAmpliada(imagem) {
    var modal = document.getElementById("modal");
    var imagemAmpliada = document.getElementById("imagemAmpliada");
    imagemAmpliada.src = imagem.src;
    modal.style.display = "block";
}

function fecharImagemAmpliada() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const regularMenu = document.querySelector(".menu");

    mobileMenu.addEventListener("click", function() {
        this.classList.toggle("active");
        regularMenu.classList.toggle("active");
    });
});