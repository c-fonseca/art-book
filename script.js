const carrosseis = document.querySelectorAll('.carrossel');

carrosseis.forEach(carrossel => {
    const trilha = carrossel.querySelector('.trilha-carrossel');
    const slides = Array.from(trilha.children);
    const botaoProximo = carrossel.querySelector('.proximo');
    const botaoAnterior = carrossel.querySelector('.anterior');

    let indiceAtual = 0;

    // Função para mover os slides
    function moverParaSlide(indice) {
        const larguraSlide = slides[0].getBoundingClientRect().width; // Largura do slide
        trilha.style.transform = `translateX(-${larguraSlide * indice}px)`; // Mover slides
    }

    // Evento de clique para o próximo slide
    botaoProximo.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % slides.length; // Incrementar índice
        moverParaSlide(indiceAtual); // Mover slide
    });

    // Evento de clique para o slide anterior
    botaoAnterior.addEventListener('click', () => {
        indiceAtual = (indiceAtual - 1 + slides.length) % slides.length; // Decrementar índice
        moverParaSlide(indiceAtual); // Mover slide
    });

    // Inicializa a posição dos slides
    moverParaSlide(indiceAtual);
});