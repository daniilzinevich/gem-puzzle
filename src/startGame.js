import { startTimer } from './timer';
import { createGameField, fillCells, assignListeners } from './createField';
import { movesCount } from './utils';

export function startGame(comb, timerId, { gameBtns, timer, moves }) {
  createGameField(fillCells(comb), { gameBtns, timer, moves });
  assignListeners();
  movesCount(true);
  // console.log('before ', timerId);
  if (timerId) {
    clearInterval(timerId);
  }
  timerId = startTimer(0);
  // console.log('after', timerId);
}
