let circulo = document.querySelector(".circulo");
let copo = document.querySelector(".imagem-copo");

function mudarCor1(cor) {
  copo.src = "img/img1.png";
  circulo.style.backgroundColor = cor;
}

function mudarCor2(cor) {
  copo.src = "img/img2.png";
  circulo.style.backgroundColor = cor;
}

function mudarCor3(cor) {
  copo.src = "img/img3.png";
  circulo.style.backgroundColor = cor;
}
