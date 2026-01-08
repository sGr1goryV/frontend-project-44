#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greeting from '../src/cli.js'
import _ from 'lodash'

const progression = () => {
  const arr = []
  const start = _.random(0, 15)
  const steps = _.random(5, 10)

  for (let i = 0; i < steps; i += 1) {
    const currentElement = start + i * steps
    arr.push(currentElement)
  }
  return arr
}

const brainPrograssion = () => {
  const userName = greeting()
  console.log('What number is missing in the progression?')

  for (let i = 0; i < 3; i += 1) {
    const prograssion = progression()
    const randomIndex = _.random(prograssion.length - 1)
    const correctAnswer = prograssion[randomIndex]

    prograssion[randomIndex] = '..'
    const expresion = prograssion.join(' ')
    const question = readlineSync.question(`Question: ${expresion}\nYour answer: `)
    const answer = Number(question)
    if (correctAnswer === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is worong. Correct answer was '${correctAnswer}'`)
      console.log(`Let's try again, ${userName}`)
      return
    }
  }
  console.log(`Congratulations, ${userName}`)
}

brainPrograssion()
