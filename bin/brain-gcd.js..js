#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { send } from '../src/cli.js';

const gcdGame = () => {
    let name = send();

    console.log('Find the greatest common divisor of given numbers.');

    const num1 = _.random(1, 100);
    const num2 = _.random(1, 100);

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const answer = gcd(num1, num2);

    while (true) {
        const question = `${num1} ${num2}`;
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (Number(userAnswer) !== answer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');

        if (readlineSync.keyInYN('Do you want to continue?')) {
            const num1 = _.random(1, 100);
            const num2 = _.random(1, 100);
            const answer = gcd(num1, num2);
        } else {
            console.log(`Congratulations, ${name}!`);
            return;
        }
    }
};
gcdGame()