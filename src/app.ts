//const inquirer = require('inquirer');

//import inquirer from 'inquirer';

import * as inquirer from 'inquirer';
//const { Letter } = require('./letter.js')
import { Letter } from './letter';
 

let myString = new Letter('Q');
console.log(`my string is: ${myString.letter}`);

inquirer.prompt([
  {
    name: "letterGuess",
    message: "\nEnter a letter \'a\' through \'z\'\n"
  }
]).then((answer) => {
  console.log(`entered was: ${answer.letterGuess[0]}`);
});



