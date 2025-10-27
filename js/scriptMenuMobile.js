document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById('nav-main-menu');
    const menu = document.getElementById('main-menu');

    // Exibe o menu direto em telas grandes
    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
    } else {
        const btn = document.getElementById('btnMenuMobile');

        // Oculta o menu inicialmente
        menu.style.display = 'none';

        // Alterna exibição do menu
        btn.addEventListener("click", (event) => {
            if (menu.style.display === 'none') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    }
});
