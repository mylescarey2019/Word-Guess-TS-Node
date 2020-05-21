"use strict";
//const inquirer = require('inquirer');
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import inquirer from 'inquirer';
const inquirer = __importStar(require("inquirer"));
const game_1 = require("./game");
// full word list for this theme
const presidentNames = ["THOMAS JEFFERSON", "RONALD REAGAN", "BARACK OBAMA"];
// const presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
// "MARTIN VAN BUREN","WILLIAM HARRISON",
// "JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
// "ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD", 
// "CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
// "WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
// "FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
// "JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];
// // instansiate WordPool object  
// const wordPool = new WordPool(presidentNames);
// // instansiate Game object  
// const game = new Game(presidentNames);
// game.wordPool.showWords();
// console.log(`are there words in wordpool? ${game.wordPool.isWordRemaining()}`)
// //game.wordPool.showWords();
// //let myWord1 = game.wordPool.getWordFromPool();
// if (game.currentWord) {
//   console.log(`the first name is=> ${game.currentWord.getDisplayableWord()} ... ${game.currentWord.word}`);
// }
// game.nextWord();
// //game.wordPool.showWords();
// //myWord1 = game.wordPool.getWordFromPool();
// if (game.currentWord) {
//   console.log(`the second name is=> ${game.currentWord.getDisplayableWord()} ... ${game.currentWord.word}`);
// }
// game.nextWord();
// //game.wordPool.showWords();
// //myWord1 = game.wordPool.getWordFromPool();
// if (game.currentWord) {
//   console.log(`the third name is=> ${game.currentWord.getDisplayableWord()} ... ${game.currentWord.word}`);
// }
// game.nextWord();
// //game.wordPool.showWords();
// //myWord1 = game.wordPool.getWordFromPool();
// if (game.currentWord) {
//   console.log(`the nth word is: ${game.currentWord.getDisplayableWord()}`);
// } else { console.log(`Any more words ? .... ${game.wordPool.isWordRemaining()}`)};
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
// inquirer.prompt([
//   {
//     name: "letterGuess",
//     message: "\nEnter a letter \'a\' through \'z\'\n"
//   }
// ]).then((answer) => {
//   console.log(`entered was: ${answer.letterGuess[0]}`);
// });
// instansiate game object  
const game = new game_1.Game(presidentNames);
// main recursive function - handles inquirer prompt and calling game object methods
const playLetter = () => {
    // check whether game has word to play with; if not then game over, return from recursion
    //MRC* if (game.hasWord)  { // the game has a word to play with - start/continue 
    if (game.currentWord) { // the game has word to play with - start/continue 
        inquirer.prompt([
            {
                name: "letterGuess",
                message: "\nEnter a letter \'a\' through \'z\'\n"
            }
            //   ]).then(function(answer){ // convert to fat arrow function
        ]).then((answer) => {
            // process the letter guess - igorning any keyed character after the first one
            game.processGuess(answer.letterGuess[0]);
            // game.state is one of the following:
            //    KeepGuessing - keep looping by recursion call to playLetter()
            //    GoToNextWord - get next word if one is available
            // If word Solved or Out of Guesses - try to get a new word 
            if (game.state === 'GoToNextWord') {
                game.nextWord();
                if (game.currentWord) {
                    console.log(`\nThe next name is [ ${game.currentWord.getDisplayableWord()} ]`);
                }
            }
            //MRC*
            // If word Solved or Out of Guesses - try to get a new word 
            // if (game.state === 'GoToNextWord') {
            //   game.hasWord = false;  // don't know if game has any words left yet
            //   if (game.wordPool.isWordRemaining()) {
            //     game.nextWord();  // game.nextWord() will get the word and also toggle game.hasWord to true
            //     console.log(`\nThe next name is [ ${game.currentWord!.getDisplayableWord()} ]`);
            //     // if (game.currentWord) {
            //     //   console.log(`\nThe next name is [ ${game.currentWord.getDisplayableWord()} ]`);
            //     // }
            //   }
            // }
            //MRC*
            // recursive call 
            playLetter();
        });
    }
    else { // all names have been played
        console.log('\nGame over - all 44 names have been played');
        console.log(`\nThank you for playing, your final score is, Wins: ${game.wordsWon} Losses: ${game.wordsLost} `);
    }
};
// -------------------------------------------------------------
// Main program flow
// -------------------------------------------------------------
// this starts the letter request/response loop for the whole game
playLetter();
