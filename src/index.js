import readlineSync from 'readline-sync'
import greeting from './cli.js'

const roundsCount = 3

const runEngine = (rules, GenerateRound) => {
  const userName = greeting()
  console.log(rules)

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = GenerateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === String(answer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${userName}`)
      return
    }
  }
  return console.log(`Congratulations, ${userName}!`)
}

export { runEngine }
