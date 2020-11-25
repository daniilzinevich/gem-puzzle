export { create } from './create';
export * as storage from './storage';

export function getIndices() {
  const allCells = document.querySelectorAll('.cell__wrapper');
  return [...allCells].map(item => +item.innerHTML);
}

export function isWon() {
  return getIndices().every(
      (item,index) => (item === index + 1) ? true : (item === 0)
    );
}

export function movesCount(isNewGame=false) {
  const moves = document.querySelector('.moves');
  if (isNewGame) {
    moves.innerHTML = 0;
  } else {
    let movesNumber = +moves.innerHTML;
    movesNumber += 1;
    moves.innerHTML = movesNumber;
  }
}
