document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.submenu-container button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;

            // Ocultar todos los demás submenús
            document.querySelectorAll('.submenu').forEach(menu => {
                if (menu !== submenu) {
                    menu.style.display = 'none';
                }
            });

            // Desactivar todos los demás botones
            document.querySelectorAll('.submenu-container button').forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('active');
                }
            });

            // Alternar el estado del submenú actual
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            button.classList.toggle('active');
        });
    });
});
