import { question } from "readline-sync";

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    let userName = question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
}

export {greeting}