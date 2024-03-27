var portfolioSwiper;

function initSwiper() {
    if (window.innerWidth < 426) {
        if (!portfolioSwiper) {
            portfolioSwiper = new Swiper('.swiper-portfolio', {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 2500, // Tempo de espera entre os slides em milissegundos
                },
            });
        }
    } else if (window.innerWidth < 768) {
        if (!portfolioSwiper) {
            portfolioSwiper = new Swiper('.swiper-portfolio', {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 2500, // Tempo de espera entre os slides em milissegundos
                },
            });
        }
    } else {
        if (portfolioSwiper) {
            portfolioSwiper.destroy();
            portfolioSwiper = undefined;
        }
        portfolioSwiper = new Swiper('.swiper-portfolio', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 2500, // Tempo de espera entre os slides em milissegundos
            },
        });
    }
}

// Inicialize o swiper quando a página for carregada e redimensionada
window.addEventListener('load', function () {
    initSwiper();
});

window.addEventListener('resize', function () {
    initSwiper();
});