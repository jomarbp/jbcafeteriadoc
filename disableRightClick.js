// Deshabilitar el clic derecho
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Deshabilitar la selección de texto
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});
