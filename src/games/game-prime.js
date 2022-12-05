import gameHello from '../index.js';

const gameMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameValues = () => {
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    let answer = 'yes';
    const randNumber = Math.floor(Math.random() * 30) + 2;
    const arr = [];
    for (let j = 2; j < randNumber; j += 1) {
      if (randNumber % j === 0) {
        answer = 'no';
        break;
      }
    }
    arr.push([`Question: ${randNumber}`], answer);
    result.push(arr);
  }
  return result;
};

const gameStart = () => {
  gameHello(gameMessage, gameValues());
};

export default gameStart;
