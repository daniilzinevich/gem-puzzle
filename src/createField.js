import { create, movesCount, isWon } from './utils';

// заполнить ячейки рандомно
export function fillCells(comb) {
  const numbers = comb();
  const cells = [];

  for (let i = 0; i <= 15; i++) {
    if (numbers[i] === 0) {
      cells.push(create('div', 'cell__wrapper empty-cell', ''));
    } else {
      cells.push(create('div', 'cell__wrapper cell__number', `${numbers[i]}`, null, ['data-id', numbers[i]]));
    }
  }

  return cells;
}

export function createGameField(cells, { gameBtns, timer, moves }) {
  const main = document.querySelector('.wrapper');

  const newMain = create('div', 'wrapper',
    [
      create('div', 'game-nav', gameBtns),
      create('div', 'puzzle__wrapper', cells),
      create('div', 'game-info', [timer, moves]),
    ]);

  if (main === null) {
    document.body.prepend(newMain);
  } else {
    main.remove();
    document.body.prepend(newMain);
  }
}

export function assignListeners() {
  const allCells = document.querySelectorAll('.cell__wrapper');
  allCells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      const emptyCell = document.querySelector('.empty-cell');
      const { x, y } = emptyCell.getBoundingClientRect();

      const coord = cell.getBoundingClientRect();
      const currentCell = cell;

      if (!cell.classList.contains('empty-cell')) {
        if ((y === coord.y && Math.abs(x - coord.x) <= 105)
        || (x === coord.x && Math.abs(y - coord.y) <= 103.75)) {
          emptyCell.innerHTML = e.target.dataset.id;
          emptyCell.dataset.id = e.target.dataset.id;
          emptyCell.classList.remove('empty-cell');
          emptyCell.classList.add('cell__number');

          currentCell.innerHTML = '';
          currentCell.removeAttribute('data-id');
          currentCell.classList.remove('cell__number');
          currentCell.classList.add('empty-cell');

          movesCount();
        }
      }
      if (isWon(allCells)) {
        alert('You won! Congratulations!');
      }
    });
  });
}
