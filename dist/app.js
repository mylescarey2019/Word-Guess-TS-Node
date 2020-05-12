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
let myString = new letter_1.Letter('Q');
console.log(`my string is: ${myString.letter}`);
inquirer.prompt([
    {
        name: "letterGuess",
        message: "\nEnter a letter \'a\' through \'z\'\n"
    }
]).then((answer) => {
    console.log(`entered was: ${answer.letterGuess[0]}`);
});
