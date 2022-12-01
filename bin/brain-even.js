#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let count = 0;

while (count < 3) {
  let randNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randNumber}`);
  const answer = readlineSync.question('Answer: ');

  if (randNumber % 2 === 0) {
    if (answer === 'yes') {
      count += 1;
      console.log('Correct!');
    } else {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } else if (randNumber % 2 !== 0) {
    if (answer === 'no') {
      count += 1;
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
