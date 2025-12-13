#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { greeting } from '../src/cli.js';

const brainEven = () => {
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = _.random(0, 50);
    const answer = readlineSync.question(`Quesion: ${number}\nYour answer: `);
    let correctAnswer = '';

    if (number % 2 !== 0) {
      correctAnswer += 'no'
    } else if (number % 2 === 0) {
      correctAnswer += 'yes'
    }

    if (number % 2 !== 0 && answer === 'no' || number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`)
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
}

brainEven();