function showItem(num, element) {
  document.querySelectorAll('.conteiner').forEach(div => div.classList.add('d-none'));
  document.getElementById('secao' + num).classList.remove('d-none');
  
  document.querySelectorAll('.barra-escolha a').forEach(link => link.classList.remove('active-link'));
  element.classList.add('active-link');
  
  document.getElementById('titulo-secao').textContent = element.textContent;
}

// Exibe a seção 1 e destaca o primeiro link por padrão
document.querySelector('.barra-escolha a').classList.add('active-link');
showItem(1, document.querySelector('.barra-escolha a'));

let quantidade = 0;

        function alterarQuantidade(valor) {
            quantidade = Math.max(0, quantidade + valor); // Evita números negativos
            document.getElementById('quantidade').innerText = quantidade;
        }
