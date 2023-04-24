#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { send } from '../src/cli.js';

const gcdGame = () => {
    let name = send();
    let correctAnswers = 0;

    console.log('Find the greatest common divisor of given numbers.');

    while (correctAnswers < 3) {
        const num1 = _.random(1, 100);
        const num2 = _.random(1, 100);

        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
        const answer = gcd(num1, num2);

        const question = `${num1} ${num2}`;
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (Number(userAnswer) !== answer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
        correctAnswers++;

        if (correctAnswers < 3) {
            console.log(`You have ${3 - correctAnswers} more attempts.`);
        } else {
            console.log(`Congratulations, ${name}!`);
            return;
        }
    }
};
gcdGame();
