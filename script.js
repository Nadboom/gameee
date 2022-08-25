'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const name1 = document.querySelector('#name--0');
const name2 = document.querySelector('#name--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
score1.textContent = 0;
score2.textContent = 0;
diceEl.classList.add('hidden');
let total = 0;
let total2 = 0;
let holdenAmount = 0;
let holdenAmount2 = 0;

const init = function () {
  diceEl.classList.add('hidden');
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  holdenAmount = 0;
  total = 0;
  holdenAmount2 = 0;
  total2 = 0;
  name1.textContent = `Player 1`;
  name2.textContent = `player 2`;
  name1.style.backgroundColor = 'initial';
  name2.style.backgroundColor = 'initial';
};
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  if (player1.classList.contains('player--active')) {
    if (dice === 1) {
      total = 0;
      current1.textContent = total;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    } else if (dice > 1) {
      total = total + dice;
      current1.textContent = total;
    }
    btnHold.addEventListener('click', function () {
      holdenAmount = holdenAmount + total;
      console.log(`this is one `);
      score1.textContent = holdenAmount;
      total = 0;
      current1.textContent = total;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      if (holdenAmount >= 100) {
        name1.textContent = `Winner!`;
        name1.style.backgroundColor = 'white';
        setTimeout(init, 3000);
      }
    });
  } else if (player2.classList.contains('player--active')) {
    if (dice === 1) {
      total2 = 0;
      current2.textContent = total2;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    } else if (dice > 1) {
      total2 = total2 + dice;
      current2.textContent = total2;
    }
    btnHold.addEventListener('click', function () {
      holdenAmount2 = holdenAmount2 + total2;
      console.log(`this is 22222 `);
      score2.textContent = holdenAmount2;
      total2 = 0;
      current2.textContent = total2;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      if (holdenAmount2 >= 100) {
        name2.textContent = `Winner!`;
        name2.style.backgroundColor = 'white';
        setTimeout(init, 3000);
      }
    });
  }
});

/*let holdenAmount = 0;
if (player1.classList.contains('player--active')) {
  btnHold.addEventListener('click', function () {
    holdenAmount = holdenAmount + total;
    console.log(`this is one `);
    score1.textContent = holdenAmount;
    total = 0;
    current1.textContent = total;
  });
} else if (player2.classList.contains('player--active')) {
  btnHold.addEventListener('click', function () {
    holdenAmount = holdenAmount + total;
    console.log(`this is 22222 `);
    score2.textContent = holdenAmount;
    total = 0;
    current2.textContent = total;
  });
}*/

btnNew.addEventListener('click', init);
