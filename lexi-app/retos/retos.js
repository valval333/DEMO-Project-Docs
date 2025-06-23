// retos.js - Lógica de retos por nivel para LEXI

const retosPorNivel = {
    A1: [
        { titulo: 'Busca 5 objetos y nómbralos en inglés', desc: 'Encuentra objetos en tu casa y di su nombre en inglés.', icon: '🔍' },
        { titulo: 'Saluda a 3 personas', desc: 'Saluda a tres personas usando "Hello!" y "How are you?"', icon: '👋' }
    ],
    A2: [
        { titulo: 'Describe tu día', desc: 'Cuenta en inglés cómo fue tu día usando frases simples.', icon: '📝' }
    ],
    B1: [
        { titulo: 'Entrevista a un amigo', desc: 'Hazle 5 preguntas en inglés a un amigo.', icon: '🎤' }
    ],
    B2: [
        { titulo: 'Crea una historia', desc: 'Escribe una historia corta en inglés usando 10 palabras nuevas.', icon: '📖' }
    ],
    C1: [
        { titulo: 'Debate', desc: 'Debate en inglés sobre un tema de actualidad con un compañero.', icon: '💬' }
    ],
    C2: [
        { titulo: 'Presentación avanzada', desc: 'Haz una presentación de 5 minutos en inglés sobre un tema que te apasione.', icon: '🎤' }
    ]
};

function renderRetos(nivel) {
    const grid = document.getElementById('retosGrid');
    grid.innerHTML = '';
    retosPorNivel[nivel].forEach((reto, idx) => {
        const card = document.createElement('div');
        card.className = 'reto-card';
        card.innerHTML = `
            <div class="reto-icon">${reto.icon}</div>
            <div class="reto-title">${reto.titulo}</div>
            <div class="reto-desc">${reto.desc}</div>
            <button class="reto-btn" onclick="iniciarReto('${nivel}',${idx})">¡Haz este reto!</button>
        `;
        grid.appendChild(card);
    });
}

function iniciarReto(nivel, idx) {
    // Aquí se puede mejorar con feedback interactivo y registro de progreso
    alert('¡Reto iniciado! Nivel: ' + nivel + ', Reto: ' + retosPorNivel[nivel][idx].titulo);
    // Aquí podrías guardar el progreso en localStorage o mostrar feedback personalizado
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nivel-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.nivel-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderRetos(btn.dataset.nivel);
        };
    });
    renderRetos('A1');
});
