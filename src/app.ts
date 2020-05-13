//const inquirer = require('inquirer');

//import inquirer from 'inquirer';

import * as inquirer from 'inquirer';
//const { Letter } = require('./letter.js')
import { Letter } from './letter';
import { Word } from './word';
 

let myString = new Letter('Q');
console.log(`my Letter.letter is: ${myString.letter}`);
console.log(`my Letter.isKnown is: ${myString.isKnown}`);
myString.isKnown = true;
console.log(`my Letter.letter is: ${myString.letter}`);
console.log(`my Letter.isKnown is: ${myString.isKnown}`);

let myWord = new Word('Milo The Cat');
myWord.showWordLetters();

console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
myWord.updateWord('z');
console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
myWord.updateWord('t');
console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
myWord.updateWord('C');
console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);

console.log(`puzzle is solved? ${myWord.isSolved()}`);
console.log(`solved puzzle: ${myWord.getSolvedDisplayableWord()}`);

inquirer.prompt([
  {
    name: "letterGuess",
    message: "\nEnter a letter \'a\' through \'z\'\n"
  }
]).then((answer) => {
  console.log(`entered was: ${answer.letterGuess[0]}`);
});



