#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { greeting } from '../src/cli.js';

const brainCalc = () => {
  const userName = greeting();

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const num1 = _.random(0, 50);
    const num2 = _.random(0, 50);
    const obj = {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2,
    }
    const entries = Object.entries(obj);
    const randomIndex = parseInt(Math.random() * 3);

    const answer = readlineSync.question(`Question: ${num1} ${entries[randomIndex][0]} ${num2}\nYour answer: `);
    const correctAnswer = entries[randomIndex][1];

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
brainCalc();