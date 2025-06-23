// tips.js - Herramientas interactivas de tips por habilidad

const tipsData = {
    speaking: [
        { title: 'Graba tu voz', desc: 'Utiliza tu móvil para grabarte hablando sobre tu día. Luego escucha y corrige tu pronunciación.' },
        { title: 'Practica diálogos', desc: 'Haz role-play con un amigo o usa apps de intercambio de idiomas.' }
    ],
    reading: [
        { title: 'Lee en voz alta', desc: 'Elige un texto corto y léelo en voz alta para mejorar pronunciación y comprensión.' },
        { title: 'Subraya palabras nuevas', desc: 'Marca palabras desconocidas y búscalas en un diccionario.' }
    ],
    writing: [
        { title: 'Escribe un diario', desc: 'Redacta cada día 3 frases sobre lo que hiciste o aprendiste.' },
        { title: 'Corrige tus textos', desc: 'Utiliza herramientas como Grammarly o LanguageTool para revisar tus escritos.' }
    ],
    listening: [
        { title: 'Escucha podcasts', desc: 'Busca podcasts de nivel adecuado y escucha 10 minutos diarios.' },
        { title: 'Transcribe audios', desc: 'Escucha un audio corto y escribe lo que entiendas.' }
    ]
};

function renderTips(tipo) {
    const content = document.getElementById('tipsContent');
    content.innerHTML = '';
    tipsData[tipo].forEach(tip => {
        const div = document.createElement('div');
        div.className = 'tip-card';
        div.innerHTML = `<h3>${tip.title}</h3><p>${tip.desc}</p>`;
        content.appendChild(div);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tip-tab').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.tip-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderTips(btn.dataset.tip);
        };
    });
    renderTips('speaking');
});
