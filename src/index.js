import { create, getIndices, storage } from './utils';
import { startGame } from './startGame';
import { getValidComb } from './comb';
import './style.css';

const gameBtns = [
  {
    id: 'new-game',
    name: 'Start new game',
  },
  {
    id: 'save',
    name: 'Save game',
  },
  {
    id: 'load',
    name: 'Load game',
  },
].map(
  el => create('button', 'nav__btn', el.name, null, ['data-id', el.id])
);

const timer = create('div', 'timer__info', [
  create('span', '', 'Time:&nbsp'),
  create('span', 'timer', '00:00', null, ['data-id', 'timer']),
]);

const moves = create('div', 'moves__info', [
  create('span', '', 'Moves:&nbsp'),
  create('span', 'moves', '0'),
]);

let timerId;
// console.log('before', timerId);
startGame(getValidComb, timerId, { gameBtns, timer, moves });
// console.log('after', timerId);

const menuBtns = document.querySelectorAll('.nav__btn');
menuBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.attributes['data-id'].value === 'new-game') {
      console.log('in new game', timerId);
      startGame(getValidComb, timerId, { gameBtns, timer, moves });
    }
    if (e.target.attributes['data-id'].value === 'save') {
      storage.set('saved gave', getIndices());
    }
    if (e.target.attributes['data-id'].value === 'load') {
      startGame(() => storage.get('saved gave'), timerId, { gameBtns, timer, moves });
    }
  });
});
