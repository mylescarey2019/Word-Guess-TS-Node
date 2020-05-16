//const inquirer = require('inquirer');

//import inquirer from 'inquirer';

import * as inquirer from 'inquirer';
//const { Letter } = require('./letter.js')
import { Letter } from './letter';
import { Word } from './word';
import { WordPool } from './wordpool';
 
//export enum GameState { KeepGuessing, NextWord };
export type GameState = 'KeepGuessing' | 'GoToNextWord';

// full word list for this theme
const presidentNames = ["JAMES POLK","JOHN ADAMS","BARACK OBAMA"];

// const presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
// "MARTIN VAN BUREN","WILLIAM HARRISON",
// "JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
// "ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD", 
// "CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
// "WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
// "FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
// "JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];

// instansiate WordPool object  
const wordPool = new WordPool(presidentNames);

wordPool.showWords();
console.log(`are there words in wordpool? ${wordPool.isWordRemaining()}`)

wordPool.showWords();
let myWord1 = wordPool.getWordFromPool();

if (myWord1) {
  console.log(`the first word is: ${myWord1.getDisplayableWord()}`);
  wordPool.showWords();
}

myWord1 = wordPool.getWordFromPool();

if (myWord1) {
  console.log(`the 2nd word is: ${myWord1.getDisplayableWord()}`);
  wordPool.showWords();
}

myWord1 = wordPool.getWordFromPool();

if (myWord1) {
  console.log(`the 3rd word is: ${myWord1.getDisplayableWord()}`);
  wordPool.showWords();
}

myWord1 = wordPool.getWordFromPool();

if (myWord1) {
  console.log(`the 3rd word is: ${myWord1.getDisplayableWord()}`);
  wordPool.showWords();
} else { console.log('no more words....')};



// let myString = new Letter('Q');
// console.log(`my Letter.letter is: ${myString.letter}`);
// console.log(`my Letter.isKnown is: ${myString.isKnown}`);
// myString.isKnown = true;
// console.log(`my Letter.letter is: ${myString.letter}`);
// console.log(`my Letter.isKnown is: ${myString.isKnown}`);

// let myWord = new Word('Milo The Cat');
// if (myWord.gameState === 'KeepGuessing') {
// //if (myWord.gameState === 'GameState.KeepGuessing') {
//   console.log(`Found it to be equal to ${myWord.gameState}`)
// } else {
//   console.log(`it is equal to ${myWord.gameState}`)
// } 

// myWord.showWordLetters();
 
// console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
// myWord.updateWord('z');
// if (myWord.gameState === 'KeepGuessing') {
// //if (myWord.gameState === GameState.KeepGuessing) {
//   console.log(`Found it to be equal to KeepGuessing`)
// } else {
//   console.log(`it is equal to next word ${myWord.gameState}`)
// } 
// console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
// myWord.updateWord('t');
// console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);
// myWord.updateWord('C');
// console.log(`puzzle state is: ${myWord.getDisplayableWord()}`);

// console.log(`puzzle is solved? ${myWord.isSolved()}`);
// console.log(`solved puzzle: ${myWord.getSolvedDisplayableWord()}`);



inquirer.prompt([
  {
    name: "letterGuess",
    message: "\nEnter a letter \'a\' through \'z\'\n"
  }
]).then((answer) => {
  console.log(`entered was: ${answer.letterGuess[0]}`);
});



