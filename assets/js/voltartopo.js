// Quando o usuário rolar a página, mostrar ou ocultar o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}
// Quando o usuário clicar no botão, rolar de volta para o topo da página de forma suave
function topFunction() {
    // Verifica se o navegador suporta a rolagem suave
    if ('scrollBehavior' in document.documentElement.style) {
      // Rola suavemente até o topo da página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Caso o navegador não suporte, rola para o topo instantaneamente
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  