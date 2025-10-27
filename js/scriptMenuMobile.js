document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById('main-menu');
    const btn = document.getElementById('btnMenuMobile');

    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';

        btn.addEventListener("click", () => {
            const isHidden = window.getComputedStyle(menu).display === 'none';
            menu.style.display = isHidden ? 'flex' : 'none';
        });
    };

    document.addEventListener("click", (e) => {
        if (e.target && e.target.id === 'btnMenuMobile') {
            const menu = document.getElementById('main-menu');
            if (!menu) return;

            const isHidden = window.getComputedStyle(menu).display === 'none';
            menu.style.display = isHidden ? 'flex' : 'none';
        }
    });

});
