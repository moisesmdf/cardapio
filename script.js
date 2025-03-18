function showItem(num, element) {
  // Esconde todas as seções
  document.querySelectorAll('.conteiner').forEach(div => div.classList.add('d-none'));
  
  // Exibe a seção correspondente
  document.getElementById('secao' + num).classList.remove('d-none');

  // Remove a classe ativa de todos os links
  document.querySelectorAll('.navbar-nav a').forEach(link => {
      link.classList.remove('active-link');
  });
  
  // Adiciona a classe ativa ao link clicado
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
});
