// scripts/statistics.js

// Função para animar os números
function animateValue(id, start, end, duration, qnt) {
    var range = end - start;
    var current = start;
    var increment = end > start ? qnt : -qnt;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  // Chame a função para cada número com seus valores finais
  animateValue("pessoas", 0, 27000, 5000, 24);
  animateValue("eventos", 0, 470, 5000, 1);
  animateValue("palestras", 0, 17, 5000, 1);
  animateValue("cidades", 0, 14, 5000, 1);
  
