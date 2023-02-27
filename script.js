// cria as subdivs e adiciona cor preta ao passar o mouse
for (i = 0; i < 256; i++) {
  const criadorDiv = document.createElement("div");
  const cor = criadorDiv.classList.add("div-filho");
  criadorDiv.addEventListener("mousemove", () => {
    criadorDiv.style.backgroundColor = "Black";
  });
  const divSelecionadaHtml = document.querySelector(".container");
  criadorDiv;
  divSelecionadaHtml.appendChild(criadorDiv);
}

// limpa o que foi escrito
const botaoLimpar = document.querySelector("button");
botaoLimpar.addEventListener("click", () => {
  const divFilhos = document.querySelectorAll(".div-filho");

  divFilhos.forEach((item) => {
    item.style.backgroundColor = "White";
  });
});
