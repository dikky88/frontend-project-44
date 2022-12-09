import gameHello from '../index.js';

const gameMessage = 'Find the greatest common divisor of given numbers.';

const gameValues = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const values = [];
    const randNumber1 = Math.floor(Math.random() * 100);
    const randNumber2 = Math.floor(Math.random() * 100);
    values.push(`Question: ${randNumber1} ${randNumber2}`);
    arr.push(values);
    const minNumber = Math.min(randNumber1, randNumber2);
    const maxNumber = Math.max(randNumber1, randNumber2);
    let nod = 1;
    if (maxNumber % minNumber === 0) {
      nod = minNumber;
    } else if (minNumber === 0) {
      nod = maxNumber;
    } else {
      for (let j = 2; j <= minNumber / 2; j += 1) {
        if (maxNumber % j === 0 && minNumber % j === 0) {
          nod = j;
        }
      }
    }
    arr.push(nod);
    result.push(arr);
  }
  return result;
};

const gameStart = () => {
  gameHello(gameMessage, gameValues());
};

export default gameStart;
