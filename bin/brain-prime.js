#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'
import _ from 'lodash'

const prime = (n) => {
  if (n < 2) {
    return 'no'
  }
  else if (n === 2) {
    return 'yes'
  }
  else if (n % 2 === 0) {
    return 'no'
  }

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

const brainPrime = () => {
  const userName = greeting()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = _.random(0, 25)
    const question = readlineSync.question(`Question: ${randomNumber}\nYour answer: `)
    const answer = question
    const correctAnswer = prime(randomNumber)
    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer. Correct answer was '${correctAnswer}'`)
      console.log(`Let's try again, ${userName}`)
      return
    }
  }
  console.log(`Conratulations, ${userName}`)
}

brainPrime()
