// scripts/statistics.js

// Função para animar os números
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
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
  animateValue("teachers", 0, 2116, 1000);
  animateValue("cities", 0, 14, 3000);
  animateValue("lectures", 0, 17, 3000);
  animateValue("nps", 0, 973, 2000);
  