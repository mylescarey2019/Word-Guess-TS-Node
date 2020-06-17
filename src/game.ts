// import WordPool class - WordPool class consists of array of Word objects
// import NextWord type - which is Word class object or undefined
import { WordPool, NextWord } from "./wordpool.js";

export enum GameState { KeepGuessing, GoToNextWord, };

// class for game - coding as a Singleton
// this contains the core letter guessing logic, tracks game score, and draws down the word pool
export class Game {
  private wordPool: WordPool;
  public currentWord: NextWord;  // can be Word class object or undefined after last word has been used
  private guesses: number;
  public state: GameState;
  private savedDisplayableWord: string;
  public wordsWon: number;
  public wordsLost: number;
  private lettersGuessed: string[];

  constructor(private puzzelWordList: string[]) {
    this.puzzelWordList = puzzelWordList;
    this.wordPool = new WordPool(this.puzzelWordList);   // instansiate wordPool object
    this.guesses = 6;
    this.wordsWon = 0;
    this.wordsLost = 0;
    this.lettersGuessed = []; // array of alphas that have been guessed
    this.state = GameState.GoToNextWord;
    this.savedDisplayableWord = '';

    this.currentWord = this.wordPool.getWordFromPool(); // word object
    if (this.currentWord) {
      this.savedDisplayableWord = this.currentWord.getDisplayableWord(); // used during guess comparison; set by nextWord method
    }
    
    //this.wordPool.showWords();  // diagnotic only - comment out after testing

    console.log('\nWelcome to Word Guess - US Presidential Edition');
    console.log('Solve each of the 44 president name puzzles, use keyboard A through Z');
    console.log('You lose the word if you accumlate 6 missed guesses, lets begin.');
    console.log(`\nThe first name is [ ${this.savedDisplayableWord} ]`);
  }

  // reset guess count, clear used letter array, get next word object from pool
  nextWord() {
    this.guesses = 6;
    this.lettersGuessed.splice(0, this.lettersGuessed.length);
    this.currentWord = this.wordPool.getWordFromPool();
    // record current diplayable word - to be used to determine if new letter guess unveiled any new letters
    if (this.currentWord) {
        this.savedDisplayableWord = this.currentWord.getDisplayableWord();
    }
  }


  // core logic for handling letter guess and puzzle state 
  processGuess(letterGuess: string) {

    // helper function to check to if guess key pressed valid letter or not
    const validateGuess = (letter: string) => {
      let valid: boolean = true;
      let errorMsg: string = '';
      let regex = /[a-zA-Z]/;
      
      if (letter === undefined) {
        valid = false;
        errorMsg = `You typed \'RETURN\' please type \'a\' through \'z\'`;
      } else if (letter.match(regex) === null) {
        valid = false;
        errorMsg = `You typed \'${letterGuess}\' please type \'a\' through \'z\'`;
      } else if (this.lettersGuessed.includes(letter.toUpperCase())) {
        valid = false;
        errorMsg = `\'${letter.toUpperCase()}\' has already been used.  Letters used: ${this.lettersGuessed.join('')}`;
      }
      return [valid, errorMsg];
    }
    
    // initial check on the guessed key press
    const [validGuess, guessErrorMsg] = validateGuess(letterGuess);
    if (validGuess) {
      //guess is a valid A-Z  - update the word object and used letter array
      if (this.currentWord) {  
        this.currentWord.updateWord(letterGuess);
        this.lettersGuessed.push(letterGuess.toUpperCase());
      } 
    } else {
      this.state = GameState.KeepGuessing;
      return console.log(guessErrorMsg);
    }
    
    // helper function to display first line of guess result on console: whether hit or miss
    const consoleGuessResult = (isHit: boolean, roundOver: boolean) => {
      let message = `\'${letterGuess.toUpperCase()}\'`;
      message += (isHit) ? ' is a Hit.' : ' is a Miss.';
      message += (roundOver) 
                  ? '' 
                  : `  Name is [ ${newDisplayableWord} ]  Guesses remaining: ${this.guesses}` 
                  + `   Letters used: ${this.lettersGuessed.join('')}`;
      console.log(message);
    }
    
    // check for hit or miss : compare saved displayable word vs its new state
    let wordIsSolved = false;
    let newDisplayableWord: string;
    if (this.currentWord) {
      newDisplayableWord = this.currentWord.getDisplayableWord();
      const isHit = (this.savedDisplayableWord !== newDisplayableWord); // guess is a Hit
      if (isHit) { 
        // reset the saved displayble word to the new word state
        this.savedDisplayableWord = newDisplayableWord;
        wordIsSolved = this.currentWord.isSolved();
        consoleGuessResult(isHit, wordIsSolved);
      }
      else { // guess is a Miss
        this.guesses--;
        consoleGuessResult(isHit, this.guesses === 0);
      }
    }

    // helper function to, if applicable, display 2nd line of guess result on console : word solved or out of guesses
    const consoleWordEndResult = (isSolved: boolean, gameOver: boolean) => {
      let message = '';
      if (this.currentWord) {
        message += (isSolved) ? 'You solved it. Name was [ ' : 'Out of guesses.  The name was [ ';
        message += this.currentWord.getSolvedDisplayableWord();
        message += (gameOver) ? ` ]` : ` ]  Your score is, Wins: ${this.wordsWon} Losses: ${this.wordsLost}`;
        console.log(message);
      }
    }

    // check to see if 2nd line of guess result needs to be displayed:  word solved or out of guesses
    const gameOver = !this.wordPool.isWordRemaining();
    if (wordIsSolved) {
      this.wordsWon++;
      this.state = GameState.GoToNextWord;
      consoleWordEndResult(wordIsSolved,gameOver);
    }
    else { // not solved - see if out of guesses
      if (this.guesses === 0) {
        this.wordsLost++;
        this.state = GameState.GoToNextWord;
        consoleWordEndResult(wordIsSolved,gameOver);
      }
      else { // still have guesses remaining
        this.state = GameState.KeepGuessing;
      }
    }
  }
}