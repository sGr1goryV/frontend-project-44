#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting } from '../src/cli.js';

const brainGcd = () => {
  const userName = greeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    let num1 = parseInt(Math.random() * 101);
    let num2 = parseInt(Math.random() * 101);

    const answer = readlineSync.question(`Quesion: ${num1} ${num2}\nYour answer: `);

    while (num2 !== 0) {
      let temp = num1;
      num1 = num2;
      num2 = temp % num2;
    }
    let correctAnswer = num1;
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`)
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
}

brainGcd();