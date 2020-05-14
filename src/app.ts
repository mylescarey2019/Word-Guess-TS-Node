//const inquirer = require('inquirer');

//import inquirer from 'inquirer';

import * as inquirer from 'inquirer';
//const { Letter } = require('./letter.js')
import { Letter } from './letter';
import { Word } from './word';
 
//export enum GameState { KeepGuessing, NextWord };
export type GameState = 'KeepGuessing' | 'GoToNextWord';

let myString = new Letter('Q');
console.log(`my Letter.letter is: ${myString.letter}`);
console.log(`my Letter.isKnown is: ${myString.isKnown}`);
myString.isKnown = true;
console.log(`my Letter.letter is: ${myString.letter}`);
console.log(`my Letter.isKnown is: ${myString.isKnown}`);

let myWord = new Word('Milo The Cat');
if (myWord.gameState === 'KeepGuessing') {
//if (myWord.gameState === 'GameState.KeepGuessing') {
  console.log(`Found it to be equal to ${myWord.gameState}`)
} else {
  console.log(`it is equal to ${myWord.gameState}`)
} 

myWord.showWordLetters();
 
console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
myWord.updateWord('z');
if (myWord.gameState === 'KeepGuessing') {
//if (myWord.gameState === GameState.KeepGuessing) {
  console.log(`Found it to be equal to KeepGuessing`)
} else {
  console.log(`it is equal to next word ${myWord.gameState}`)
} 
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



