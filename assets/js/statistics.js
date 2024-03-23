// scripts/statistics.js

// Variáveis globais para armazenar os timers das animações
let timers = {};

// Função para animar os números quando a seção de estatísticas estiver visível
function animateStatistics() {
    const options = {
        threshold: 0.2 // Define o limite de visibilidade para 20%
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se a seção estiver visível, inicia a animação
                animateValue("pessoas", 0, 27000, 5000, 24);
                animateValue("eventos", 0, 470, 5000, 1);
                animateValue("palestras", 0, 17, 5000, 1);
                animateValue("cidades", 0, 14, 5000, 1);
            } else {
                // Se a seção não estiver visível, redefine os valores para zero e limpa os timers
                resetValues();
            }
        });
    }, options);

    const elementsToAnimate = document.querySelectorAll('.statistics');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Função para animar os números
function animateValue(id, start, end, duration, qnt) {
    var range = end - start;
    var current = start;
    var increment = end > start ? qnt : -qnt;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);

    // Se já houver um timer para esse elemento, limpe-o
    if (timers[id]) {
        clearInterval(timers[id]);
    }

    timers[id] = setInterval(function () {
        current += increment;
        obj.innerHTML = "+" + current; // Adiciona o sinal de "+" na frente dos valores
        if (current == end) {
            clearInterval(timers[id]);
        }
    }, stepTime);
}

// Função para redefinir os valores dos números para zero e limpar os timers
function resetValues() {
    const elementsToReset = document.querySelectorAll('.number');
    elementsToReset.forEach(element => {
        element.innerHTML = "0";
    });

    // Limpa todos os timers
    Object.values(timers).forEach(timer => {
        clearInterval(timer);
    });
}

// Chame a função para animar os números quando a seção de estatísticas estiver visível
animateStatistics();
