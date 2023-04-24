import readlineSync from 'readline-sync';
import { send } from '../src/cli.js';


let name = send();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswersCount += 1;
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
}

if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
}
