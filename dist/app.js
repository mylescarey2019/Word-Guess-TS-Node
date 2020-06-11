"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//alternate import syntax
//import * as inquirer from 'inquirer';
const game_1 = require("./game");
// shortened test word list
const presidentNames = ["THOMAS JEFFERSON", "RONALD REAGAN", "BARACK OBAMA"];
// full word list
// const presidentNames = ["GEORGE WASHINGTON","JOHN ADAMS","THOMAS JEFFERSON","JAMES MADISON","JAMES MONROE","JOHN QUINCY ADAMS","ANDREW JACKSON",
// "MARTIN VAN BUREN","WILLIAM HARRISON",
// "JOHN TYLER","JAMES POLK","ZACHARY TAYLOR","MILLARD FILLMORE","FRANKLIN PIERCE","JAMES BUCHANAN","ABRAHAM LINCOLN","ANDREW JOHNSON",
// "ULYSSES S GRANT","RUTHERFORD B HAYES","JAMES GARFIELD",
// "CHESTER ARTHUR","GROVER CLEVELAND","BENJAMIN HARRISON","WILLIAM MCKINLEY","THEODORE ROOSEVELT","WILLIAM H TAFT",
// "WOODROW WILSON", "WARREN HARDING","CALVIN COOLIDGE","HERBERT HOOVER",
// "FRANKLIN D ROOSEVELT","HARRY S TRUMAN","DWIGHT EISENHOWER","JOHN F KENNEDY","LYNDON JOHNSON","RICHARD NIXON","GERALD FORD",
// "JIMMY CARTER","RONALD REAGAN","GEORGE H W BUSH","BILL CLINTON","GEORGE W BUSH","BARACK OBAMA","DONALD TRUMP"];
// instansiate game object
const game = new game_1.Game(presidentNames);
// main recursive function - handles inquirer prompt and calling game object methods
const playLetter = () => {
    // check whether game has word to play with; if not then game over, return from recursion
    if (game.currentWord) {
        inquirer_1.default
            .prompt([
            {
                name: "letterGuess",
                message: "\nEnter a letter 'a' through 'z'\n",
            }
        ])
            .then((answer) => {
            // process the letter guess - igorning any keyed character after the first one
            game.processGuess(answer.letterGuess[0]);
            // game.state is one of the following:
            //    KeepGuessing - keep looping by recursion call to playLetter()
            //    GoToNextWord - get next word if one is available
            // If word has been solved or player is out of guesses then get next word
            //    If all words have been used then game ends via next call to playLetter()
            // Else call playLetter() for another player letter guess
            //if (game.state === "GoToNextWord") {
            if (game.state === game_1.GameState.GoToNextWord) {
                game.nextWord();
                if (game.currentWord) {
                    console.log(`\nThe next name is [ ${game.currentWord.getDisplayableWord()} ]`);
                }
            }
            // recursive call
            playLetter();
        });
    }
    else {
        // game over - all names have been played
        console.log("\nGame over - all 44 names have been played");
        console.log(`\nThank you for playing, your final score is, Wins: ${game.wordsWon} Losses: ${game.wordsLost} `);
    }
};
// -------------------------------------------------------------
// Main program flow
// -------------------------------------------------------------
// this starts the recursive letter request/response loop for the whole game
playLetter();
