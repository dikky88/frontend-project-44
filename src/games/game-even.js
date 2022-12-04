import gameHello from '../index.js';

const gameMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameValues = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const values = [];
    const randNumber = Math.floor(Math.random() * 100);
    values.push(`Question: ${randNumber}`);
    arr.push(values);
    if (randNumber % 2 === 0) {
      const res = 'yes';
      arr.push(res);
    } else {
      const res = 'no';
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
