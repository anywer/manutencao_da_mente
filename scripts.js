document.addEventListener('DOMContentLoaded', () => {
    // Animação de fade-in para seções
    const sections = document.querySelectorAll('main section');

    const fadeInOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight * 0.85) { // Quando 85% da seção está visível
                section.classList.add('fade-in');
            } else {
                section.classList.remove('fade-in'); // Remove a classe se sair da tela para re-animar ao rolar para cima
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // Chama uma vez para animar elementos já visíveis ao carregar

    // Lógica para o carrossel de opções na página inicial (index.html)
    const optionsContainer = document.querySelector('.options-container');
    if (optionsContainer) {
        const options = document.querySelectorAll('.options');
        const total = options.length;
        let active = 0;
        let timer;

        const updateOptions = (direction) => {
            // Remove a classe 'active' do elemento atual
            document.querySelector('.options.active').classList.remove('active');

            // Atualiza o índice do elemento ativo
            if (direction > 0) {
                active = (active + 1) % total; // Avança para o próximo, volta ao início se chegar ao fim
            } else {
                active = (active - 1 + total) % total; // Volta para o anterior, vai para o fim se estiver no início
            }

            // Adiciona a classe 'active' ao novo elemento
            options[active].classList.add('active');
        };

        // Inicia o carrossel automático
        timer = setInterval(() => {
            updateOptions(1); // Avança para o próximo a cada 10 segundos
        }, 10000);

        // Opcional: Adicionar botões de navegação manual se desejar
        // Exemplo:
        // const prevButton = document.createElement('button');
        // prevButton.textContent = 'Anterior';
        // prevButton.addEventListener('click', () => {
        //     clearInterval(timer); // Para o carrossel automático ao interagir
        //     updateOptions(-1);
        //     timer = setInterval(() => updateOptions(1), 10000); // Reinicia o carrossel
        // });
        // optionsContainer.appendChild(prevButton);

        // const nextButton = document.createElement('button');
        // nextButton.textContent = 'Próximo';
        // nextButton.addEventListener('click', () => {
        //     clearInterval(timer); // Para o carrossel automático ao interagir
        //     updateOptions(1);
        //     timer = setInterval(() => updateOptions(1), 10000); // Reinicia o carrossel
        // });
        // optionsContainer.appendChild(nextButton);
    }
});
