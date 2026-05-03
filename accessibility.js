/**
 * accessibility.js
 * Tryb dostępności dla słabowidzących — Pizzeria Neapol
 * Język: Polski
 */

(function () {
    const STORAGE_KEY = 'pizzeria-accessibility';
    const ACTIVE_TEXT = '<i class="fas fa-eye-slash"></i><span class="acc-label"> Wyłącz tryb</span>';
    const INACTIVE_TEXT = '<i class="fas fa-eye"></i><span class="acc-label"> Słabowidzący</span>';

    function isActive() {
        return localStorage.getItem(STORAGE_KEY) === 'on';
    }

    function applyMode(active) {
        if (active) {
            document.body.classList.add('accessibility-mode');
            localStorage.setItem(STORAGE_KEY, 'on');
        } else {
            document.body.classList.remove('accessibility-mode');
            localStorage.setItem(STORAGE_KEY, 'off');
        }
        updateButton(active);
    }

    function updateButton(active) {
        const btn = document.getElementById('accessibility-btn');
        if (!btn) return;
        btn.innerHTML = active ? ACTIVE_TEXT : INACTIVE_TEXT;
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        btn.classList.toggle('active', active);
        btn.title = active
            ? 'Kliknij, aby wyłączyć tryb dla słabowidzących'
            : 'Kliknij, aby włączyć tryb dla słabowidzących — większy tekst i wysoki kontrast';
    }

    function createButton() {
        const btn = document.createElement('button');
        btn.id = 'accessibility-btn';
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('aria-label', 'Tryb dla słabowidzących');
        btn.innerHTML = INACTIVE_TEXT;

        btn.addEventListener('click', () => {
            applyMode(!isActive());
        });

        // Wstawiamy przycisk do nagłówka
        const headerButtons = document.querySelector('.header-buttons');
        const header = document.querySelector('header');
        if (headerButtons) {
            headerButtons.appendChild(btn);
        } else if (header) {
            header.appendChild(btn);
        } else {
            // Fallback: fixed button if no header found
            document.body.appendChild(btn);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        createButton();

        // Zastosuj zapisany tryb natychmiast
        if (isActive()) {
            applyMode(true);
        }
    });

    // Wcześniejsze zastosowanie (przed DOMContentLoaded) – zapobiega "mignięciu"
    if (isActive() && document.body) {
        document.body.classList.add('accessibility-mode');
    }
})();
