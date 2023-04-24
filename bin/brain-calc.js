#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash';
import { send } from '../src/cli.js';

const calcGame = () => {
    let name = send();
    console.log('What is the result of the expression?');

    const operations = ['+', '-', '*'];
    const getOperation = () => _.sample(operations);

    let correctAnswers = 0;
    while (correctAnswers < 3) {
        const num1 = _.random(1, 100);
        const num2 = _.random(1, 100);
        const operation = getOperation();

        const question = `${num1} ${operation} ${num2}`;
        const answer = eval(question);

        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

        if (Number(userAnswer) !== answer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
        correctAnswers++;
    }

    console.log(`Congratulations, ${name}!`);
};
calcGame()
export default calcGame;
