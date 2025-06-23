// LEXI - Funcionalidad básica de interacción

document.addEventListener('DOMContentLoaded', function() {
    // Saludo personalizado
    let nombre = localStorage.getItem('nombreUsuario') || '';
    if (!nombre) {
        nombre = prompt('¿Cómo te llamas?');
        if (nombre) {
            localStorage.setItem('nombreUsuario', nombre);
        } else {
            nombre = 'Usuario';
        }
    }
    const saludo = document.getElementById('greeting');
    if (saludo) {
        saludo.textContent = `Hola, ${nombre} 👋`;
    }

    // Botón de lección del día
    const btn = document.querySelector('.main-btn');
    if(btn) {
        btn.addEventListener('click', function() {
            window.location.href = 'leccion-del-dia/Leccion%20del%20dia.html';
        });
    }
});
