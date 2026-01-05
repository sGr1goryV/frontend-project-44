#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import _ from 'lodash';

const brainCalc = () => {
    const userName = greeting();
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        const num1 = _.random(0, 50);
        const num2 = _.random(0, 50);

        let expressions = {
            '+': (num1 + num2),
            '-': (num1 - num2),
            '*': (num1 * num2),
        }

        const entries = Object.entries(expressions);
        const randomIndex = _.random(0, 2);
        const sing = entries[randomIndex][0];
        
        const question = readlineSync.question(`Question: ${num1} ${sing} ${num2}\nYour answer: `);
        const answer = Number(question);
        const correctAnswer = entries[randomIndex][1];
        if (answer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}`);
}

brainCalc();