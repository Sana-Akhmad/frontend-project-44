#!/usr/bin/env node
import readlineSync from 'readline-sync';
import _ from 'lodash';
import { send } from '../src/cli.js';

const progressionGame = () => {
    let name = send();
    console.log('What number is missing in the progression?');
    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
        const start = _.random(1, 50);
        const step = _.random(1, 10);
        const hiddenElementIndex = _.random(0, 9);
        const progression = [];
        for (let i = 0; i < 10; i += 1) {
            progression.push(start + i * step);
        }
        const correctAnswer = progression[hiddenElementIndex];
        progression[hiddenElementIndex] = '..';
        const question = progression.join(' ');
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log("Let's try again, Sam!")
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

progressionGame();
