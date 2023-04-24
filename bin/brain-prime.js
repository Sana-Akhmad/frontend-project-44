#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { send } from '../src/cli.js';

const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const primeGame = () => {
    let name = send();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    let count = 0;

    while (count < 3) {
        const question = Math.floor(Math.random() * 100);
        const correctAnswer = isPrime(question) ? 'yes' : 'no';

        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');

        count += 1;
    }

    console.log(`Congratulations, ${name}!`);
};

primeGame();
