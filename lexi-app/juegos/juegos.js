// juegos.js - Juegos interactivos para LEXI

function renderEmparejar() {
    const pairs = [
        {en: 'Dog', es: 'Perro'},
        {en: 'House', es: 'Casa'},
        {en: 'Book', es: 'Libro'},
        {en: 'Sun', es: 'Sol'}
    ];
    let html = '<h2>Empareja cada palabra con su significado</h2><div class="emparejar-grid">';
    const shuffledEs = pairs.map(p => p.es).sort(() => Math.random() - 0.5);
    pairs.forEach((pair, i) => {
        html += `<div class="emparejar-row"><span class="en">${pair.en}</span> <select data-correct="${pair.es}" onchange="feedbackEmparejar(this)"><option value="">Selecciona</option>${shuffledEs.map(es => `<option value="${es}">${es}</option>`).join('')}</select> <span class="emp-feedback"></span></div>`;
    });
    html += '<button class="juego-btn" onclick="checkEmparejar()">Comprobar</button><div id="emparejarResult"></div></div>';
    html += `<div class="juego-feedback"><h3>💡 Consejo:</h3><p>¡Practica emparejar palabras todos los días! Usa tarjetas o apps para mejorar tu vocabulario. <span style='font-size:1.3em;'>📚✨</span></p></div>`;
    return html;
}

window.feedbackEmparejar = function(sel) {
    const feedback = sel.parentElement.querySelector('.emp-feedback');
    if(sel.value === '') {
        feedback.textContent = '';
        feedback.style.color = '';
    } else if(sel.value === sel.dataset.correct) {
        feedback.textContent = '✔';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = '✖';
        feedback.style.color = 'red';
    }
};

window.checkEmparejar = function() {
    let correct = 0;
    let total = 0;
    document.querySelectorAll('.emparejar-row').forEach(row => {
        const sel = row.querySelector('select');
        const feedback = row.querySelector('.emp-feedback');
        total++;
        if(sel.value === sel.dataset.correct) {
            feedback.textContent = '✔';
            feedback.style.color = 'green';
            correct++;
        } else {
            feedback.textContent = '✖';
            feedback.style.color = 'red';
        }
    });
    let msg = '';
    if(correct === total) {
        msg = "<span style='color:green;font-size:1.2em;'>¡Perfecto! 🎉</span>";
    } else if(correct >= total/2) {
        msg = "<span style='color:orange;font-size:1.1em;'>¡Bien hecho! Sigue practicando 💪</span>";
    } else {
        msg = "<span style='color:red;font-size:1.1em;'>¡Ánimo! Intenta de nuevo y repasa el vocabulario. 🔄</span>";
    }
    document.getElementById('emparejarResult').innerHTML = `<p>Respuestas correctas: <b style='color:green;'>${correct}</b>/${total}</p>${msg}`;
};

function renderRompecabezas() {
    // Palabra a formar: HOUSE
    const palabra = 'HOUSE';
    const letras = palabra.split('').sort(() => Math.random() - 0.5);
    let html = `<h2>Rompecabezas de Palabras</h2><p>Arrastra las letras para formar la palabra: <b>_ _ _ _ _</b></p><div id="rompeZona" class="rompe-letras">`;
    letras.forEach((l, i) => {
        html += `<span class="rompe-letra" draggable="true" ondragstart="drag(event)" id="letra${i}">${l}</span> `;
    });
    html += `</div><div id="rompeDrop" class="rompe-drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>`;
    html += `<button class="juego-btn" onclick="checkRompe()">Comprobar</button><div id="rompeResult"></div>`;
    html += `<div class="juego-feedback"><h3>💡 Consejo:</h3><p>¡Jugar con letras mejora tu ortografía y memoria visual! Intenta formar palabras nuevas cada día. <span style='font-size:1.3em;'>🧩📝</span></p></div>`;
    return html;
}

window.allowDrop = function(ev) { ev.preventDefault(); };
window.drag = function(ev) { ev.dataTransfer.setData("text", ev.target.id); };
window.drop = function(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const letra = document.getElementById(data);
    ev.target.appendChild(letra);
};
window.checkRompe = function() {
    const drop = document.getElementById('rompeDrop');
    let formed = '';
    drop.querySelectorAll('.rompe-letra').forEach(l => formed += l.textContent);
    let msg = '';
    if(formed === 'HOUSE') {
        msg = "<span style='color:green;font-size:1.2em;'>¡Correcto! 🏠</span>";
    } else {
        msg = "<span style='color:red;font-size:1.1em;'>Intenta de nuevo. ¡Tú puedes! 💡</span>";
    }
    document.getElementById('rompeResult').innerHTML = `<p>Palabra formada: <b>${formed || '---'}</b></p>${msg}`;
};

function renderMemoria() {
    let html = `<h2>Memoria Visual</h2><p>Haz clic en las cartas para encontrar las parejas.</p><div id="memoriaGrid" class="memoria-grid"></div><button class="juego-btn" onclick="iniciarMemoria()">Jugar</button><div id="memoriaResult"></div>`;
    html += `<div class="juego-feedback"><h3>💡 Consejo:</h3><p>¡Entrena tu memoria visual! Jugar memoria ayuda a recordar palabras y significados más rápido. <span style='font-size:1.3em;'>🧠🔎</span></p></div>`;
    return html;
}

window.iniciarMemoria = function() {
    const palabras = [
        {en: 'Cat', es: 'Gato'},
        {en: 'Car', es: 'Coche'},
        {en: 'Tree', es: 'Árbol'},
        {en: 'Water', es: 'Agua'}
    ];
    let cards = [];
    palabras.forEach(p => {
        cards.push({txt: p.en, pair: p.es});
        cards.push({txt: p.es, pair: p.en});
    });
    cards = cards.sort(() => Math.random() - 0.5);
    const grid = document.getElementById('memoriaGrid');
    grid.innerHTML = '';
    cards.forEach((c, i) => {
        const div = document.createElement('div');
        div.className = 'mem-card';
        div.textContent = '?';
        div.dataset.txt = c.txt;
        div.dataset.pair = c.pair;
        div.dataset.flipped = 'false';
        div.onclick = function() { flipMemCard(div, i); };
        grid.appendChild(div);
    });
    window.memoriaState = {flipped: [], found: 0, total: cards.length/2};
    document.getElementById('memoriaResult').innerHTML = '';
};

window.flipMemCard = function(div, idx) {
    if(div.dataset.flipped === 'true' || window.memoriaState.flipped.length === 2) return;
    div.textContent = div.dataset.txt;
    div.dataset.flipped = 'true';
    window.memoriaState.flipped.push(div);
    if(window.memoriaState.flipped.length === 2) {
        setTimeout(() => {
            const [a, b] = window.memoriaState.flipped;
            if(a.dataset.pair === b.dataset.txt) {
                a.style.background = '#b2f2bb';
                b.style.background = '#b2f2bb';
                window.memoriaState.found++;
                if(window.memoriaState.found === window.memoriaState.total) {
                    document.getElementById('memoriaResult').innerHTML = "<span style='color:green;font-size:1.2em;'>¡Felicidades! Encontraste todas las parejas 🎉</span>";
                }
            } else {
                a.textContent = '?';
                b.textContent = '?';
                a.dataset.flipped = 'false';
                b.dataset.flipped = 'false';
            }
            window.memoriaState.flipped = [];
        }, 800);
    }
};

function renderJuego(tipo) {
    const content = document.getElementById('juegosContent');
    if(tipo === 'emparejar') content.innerHTML = renderEmparejar();
    else if(tipo === 'rompecabezas') content.innerHTML = renderRompecabezas();
    else if(tipo === 'memoria') content.innerHTML = renderMemoria();
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.juego-tab').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.juego-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderJuego(btn.dataset.juego);
        };
    });
    renderJuego('emparejar');
});
