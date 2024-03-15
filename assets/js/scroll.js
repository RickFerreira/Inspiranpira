// scroll.js

// Função para rolar suavemente até um elemento específico
function scrollToElement(element) {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }
  
  // Função para lidar com o clique nos links de navegação
  function handleNavClick(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
  
    const targetId = event.target.getAttribute('href'); // Obtém o ID do elemento de destino do atributo href
  
    const targetElement = document.querySelector(targetId); // Seleciona o elemento de destino usando o ID
  
    if (targetElement) {
      scrollToElement(targetElement); // Chama a função de rolagem suave
    }
  }
  
  // Adiciona um ouvinte de evento de clique a todos os links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', handleNavClick);
  });
  