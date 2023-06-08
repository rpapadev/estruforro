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