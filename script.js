function showItem(num, element) {
  // Esconde todas as seções
  document.querySelectorAll('.conteiner').forEach(div => div.classList.add('d-none'));
  
  // Exibe a seção correspondente
  document.getElementById('secao' + num).classList.remove('d-none');

  // Remove a classe ativa de todos os links da navbar
  document.querySelectorAll('.navbar-nav a').forEach(link => {
      link.classList.remove('active-link');
  });

  // Remove a classe de cor de todos os links na barra de escolha
  document.querySelectorAll('.barra-escolha a').forEach(link => {
      link.classList.remove('clicado');
      // Garante que a cor do texto volte a ser branca
      link.style.color = '#ffffff';
  });

  // Adiciona a classe ativa ao link clicado na navbar
  element.classList.add('active-link');

  // Atualiza o título da seção
  document.getElementById('titulo-secao').textContent = element.textContent;

  // Fecha a navbar offcanvas
  var offcanvasElement = document.getElementById('offcanvasNavbar');
  var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
  if (offcanvasInstance) {
      offcanvasInstance.hide();
  }
}

// Exibe a seção 1 e destaca o primeiro link por padrão
document.addEventListener("DOMContentLoaded", function () {
  let primeiroLink = document.querySelector('.navbar-nav a');
  primeiroLink.classList.add('active-link');
  showItem(1, primeiroLink);

  // Marca o primeiro item da barra de escolha como clicado (cinza)
  let primeiroEscolha = document.querySelector('.barra-escolha a');
  if (primeiroEscolha) {
      primeiroEscolha.classList.add('clicado');
      primeiroEscolha.style.color = 'gray';  // Garante que o primeiro link seja cinza
  }

  // Adiciona evento de clique para mudar a cor na barra de escolha
  document.querySelectorAll('.barra-escolha a').forEach(link => {
      link.addEventListener('click', function () {
          // Reseta as cores de todos os links na barra de escolha
          document.querySelectorAll('.barra-escolha a').forEach(l => {
              l.classList.remove('clicado');
              l.style.color = '#ffffff';  // Garante que a cor do texto volte a ser branca
          });
          
          // Marca o link clicado como clicado (cinza)
          this.classList.add('clicado');
          this.style.color = 'gray';  // Altera a cor do texto para cinza no link clicado
      });
  });
});
//somaa
document.addEventListener("DOMContentLoaded", function () {
    // Função para alterar a quantidade e atualizar o preço
    function alterarQuantidade(botao, incremento) {
        let quantidadeSpan = botao.parentElement.querySelector("#quantidade");
        let precoElement = botao.parentElement.parentElement.querySelector("#preco p");
        let precoInicial = parseFloat(precoElement.getAttribute("data-preco"));
        
        let quantidadeAtual = parseInt(quantidadeSpan.textContent);
        quantidadeAtual += incremento;
        if (quantidadeAtual < 0) quantidadeAtual = 0;

        quantidadeSpan.textContent = quantidadeAtual;

        // Atualiza o preço
        let novoPreco = (precoInicial * quantidadeAtual).toFixed(2);
        precoElement.textContent = `R$ ${novoPreco}`;
    }

    // Adicionar eventos aos botões
    document.querySelectorAll(".quantidade button").forEach(botao => {
        botao.addEventListener("click", function () {
            let incremento = this.textContent === "+" ? 1 : -1;
            alterarQuantidade(this, incremento);
        });
    });

    // Salvar os preços originais nos elementos
    document.querySelectorAll("#preco p").forEach(precoElement => {
        precoElement.setAttribute("data-preco", precoElement.textContent.replace("R$ ", "").replace(",", "."));
    });
});
