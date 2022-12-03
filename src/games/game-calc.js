import gameHello from '../index.js';

const gameMessage = 'What is the result of the expression?';

const gameValues = () => {
  const mark = ['+', '-', '*'];
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const values = [];
    const randNumber1 = Math.floor(Math.random() * 10);
    const randNumber2 = Math.floor(Math.random() * 10);
    const randMark = mark[Math.floor(Math.random() * 2)];
    values.push('Question:', randNumber1, randMark, randNumber2);
    arr.push(values);
    if (randMark === '+') {
      const res = randNumber1 + randNumber2;
      arr.push(res);
    } else if (randMark === '-') {
      const res = randNumber1 - randNumber2;
      arr.push(res);
    } else if (randMark === '*') {
      const res = randNumber1 * randNumber2;
      arr.push(res);
    }
    result.push(arr);
  }
  return result;
};

const gameStart = () => {
  gameHello(gameMessage, gameValues());
};

export default gameStart;
