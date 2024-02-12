#!/usr/bin/env node
import readlineSync from 'readline-sync';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let userName = '';

const whatIsYouName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const gameEven = () => {
  userName = whatIsYouName();
  console.log(title);
  let res = 'yes';
  let ansver = '';
  do {
    const number = getRandomInt(100);
    console.log(`Question: ${number}`);
    if (number % 2 === 0) {
      res = 'yes';
    } else {
      res = 'no';
    }
    ansver = readlineSync.question('Your answer: ');
    if (res === ansver) {
      console.log('Correct!');
    }
  } while (res === ansver);
  console.log(`'${ansver}' is wrong answer ;(. Correct answer was '${res}'.`);
  console.log(`Let's try again, ${userName}`);
};

gameEven();
