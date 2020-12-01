// рандомный список чисел от 1 до 15
function getRandomNumbers() {
  const numbers = [...Array(16).keys()].sort(() => Math.random() - 0.5);
  return numbers;
}

// проверить, имеет ли раскладка решение
export function getValidComb() {
  let generatorDone = 0;
  let cells;

  while (generatorDone === 0) {
    cells = getRandomNumbers();

    let zeroRow;

    const emptyCell = cells.indexOf(0);

    if (emptyCell <= 3) zeroRow = 1;
    if (emptyCell > 3 && emptyCell <= 7) zeroRow = 2;
    if (emptyCell > 7 && emptyCell <= 11) zeroRow = 3;
    if (emptyCell > 11 && emptyCell <= 14) zeroRow = 4;

    let summ = 0;

    for (let i = 0; i < 15; i++) {
      const startValue = cells[i];

      if (startValue !== 0) {
        for (let j = i + 1; j <= 15; j++) {
          const currentValue = cells[j];

          if (currentValue < startValue && currentValue !== 0) {
            summ += 1;
          }
        }
      }
    }

    summ += zeroRow;

    if (summ % 2 === 0) generatorDone = 1;
  }

  return cells;
}
