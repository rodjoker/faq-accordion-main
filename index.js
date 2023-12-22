document.addEventListener('DOMContentLoaded', function () {
    const accordionBtns = document.querySelectorAll('.accordionBtn');

    accordionBtns.forEach(function (button) {
        const description = button.nextElementSibling;

        button.addEventListener('click', function () {
            // Alternar la visibilidad de la descripción
            description.classList.toggle('active');

            // Alternar estilos de los botones
            accordionBtns.forEach(function (btn) {
                if (btn === button) {
                    btn.classList.toggle('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });
    });
});
