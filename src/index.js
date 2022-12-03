import readlineSync from 'readline-sync';
import sayHello, { userName } from './cli.js';

const gameHello = (gameMessage, gameArr) => {
  console.log(sayHello());
  console.log(gameMessage);
  for (let i = 0; i < 3; i += 1) {
    const gameQuestion = gameArr[i][0];
    console.log(...gameQuestion);
    const answerUser = readlineSync.question('Your answer: ');
    const answerCorrect = String(gameArr[i][1]);
    if (answerCorrect === answerUser) {
      console.log('Correct!');
    } else if (answerCorrect !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default gameHello;
