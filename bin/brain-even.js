#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const brainEven = () => {
    const userName = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.floor(Math.random() * 100)
        const question = readlineSync.question(`Question: ${randomNumber}\nYour answer: `); //answer
        let correctAnswer;
        if (randomNumber % 2 === 0) {
            correctAnswer = 'yes';
        } else if (randomNumber % 2 !== 0) {
            correctAnswer = 'no';
        }


        if (question === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${question} is wrong answer. Correct answer was ${correctAnswer}.`);
            console.log(`Let's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}`);
}

brainEven();