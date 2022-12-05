import gameHello from '../index.js';

const gameMessage = 'What number is missing in the progression?';

const gameValues = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const numberFirst = Math.floor(Math.random() * 8) + 1;
    const step = Math.floor(Math.random() * 8) + 1;
    const arr = [];
    const values = [];
    for (let j = 1; j <= 10; j += 1) {
      const formula = numberFirst + (step * (j - 1));
      values.push(`${formula}`);
    }
    const randNumber = Math.floor(Math.random() * 8) + 1;
    const hiddenNumber = values[randNumber];
    values[randNumber] = '..';
    arr.push(values, hiddenNumber);
    result.push(arr);
  }
  return result;
};

const gameStart = () => {
  gameHello(gameMessage, gameValues());
};

export default gameStart;
