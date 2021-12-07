
'use strict';

//Variables globales

const dado = document.querySelector('.imagen__dado');
const suma = document.querySelector('.suma');
const btnLanzar = document.querySelector('.btn--lanzar');
const btnNuevo = document.querySelector('.btn--nuevo');

let playing, currentSuma; 

const init = function () {

    suma.textContent = 0;
    dado.src = `Dado.png`;
    currentSuma = 0;
};

init();

// currentSuma = 0;

//Lanzas el dado

btnLanzar.addEventListener('click', function() {
    
    
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; //del 1 al 6

    // 2. Display dice
    dado.src = `Dado-${dice}.png`;

    
    // 3. Check for roll
    if (dice !== 0) {
        // Add dice to current score
        currentSuma += dice;// 0 + any number from 1 to 6
        suma.textContent = currentSuma;
    }
});

btnNuevo.addEventListener('click', init);