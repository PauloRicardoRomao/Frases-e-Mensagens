document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('main-menu');
    const btn = document.getElementById('btnMenuMobile');

    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
    } else if(window.innerWidth <= 768) {
        menu.style.display = 'none';

        btn.addEventListener("click", () => {
            const isHidden = window.getComputedStyle(menu).display === 'none';
            menu.style.display = isHidden ? 'flex' : 'none';
        });

        let itemMenu = document.querySelectorAll('#main-menu ul li a');

        itemMenu.forEach((item) => {
            item.addEventListener("click", () => {
                menu.style.display = 'none';
            });
        });
    };

});
