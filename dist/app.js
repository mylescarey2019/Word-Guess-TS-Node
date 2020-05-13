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
//const { Letter } = require('./letter.js')
const letter_1 = require("./letter");
const word_1 = require("./word");
let myString = new letter_1.Letter('Q');
console.log(`my Letter.letter is: ${myString.letter}`);
console.log(`my Letter.isKnown is: ${myString.isKnown}`);
myString.isKnown = true;
console.log(`my Letter.letter is: ${myString.letter}`);
console.log(`my Letter.isKnown is: ${myString.isKnown}`);
let myWord = new word_1.Word('Milo The Cat');
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
