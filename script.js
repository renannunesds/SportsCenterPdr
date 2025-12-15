let carrinho = [];
let total = 0;
let descontoAtivo = false;

function adicionar(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const div = document.getElementById("carrinho");
  div.innerHTML = "";

  carrinho.forEach((item, index) => {
    div.innerHTML += `<p>${item.nome} - R$ ${item.preco}</p>`;
  });

  let totalFinal = total;

  if (descontoAtivo) {
    totalFinal = total * 0.9; // 10% de desconto
  }

  document.getElementById("total").innerText = totalFinal.toFixed(2);
}

function aplicarPromocao() {
  if (descontoAtivo) {
    alert("A promoção já foi aplicada!");
    return;
  }

  descontoAtivo = true;
  atualizarCarrinho();
  alert("🎉 Promoção aplicada! 10% de desconto no total.");
}

function finalizar() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  alert("Compra finalizada com sucesso!");
  carrinho = [];
  total = 0;
  descontoAtivo = false;
  atualizarCarrinho();
}
