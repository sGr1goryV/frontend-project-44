#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import _ from 'lodash';


const brainGcd = () => {
    const userName = greeting();
    console.log('Find the greatest common divisor of given numbers');

    for (let i = 0; i < 3; i += 1) {
        const num1 = _.random(0, 50);
        const num2 = _.random(0, 50);

        const question = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);
        const answer = Number(question);
        
        let a = num1;
        let b = num2;
        while (b !== 0) {
            const temp = a;
            a = b;
            b = temp % b;
        }
        
        if (answer === a) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer. Correct answer was '${a}'`);
            console.log(`Let's try again, ${userName}`);
            return;
        }
    }
    console.log(`Congratulations, ${userName}`);
}

brainGcd();