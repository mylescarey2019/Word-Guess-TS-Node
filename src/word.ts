// import Letter class - Letter class contains a letter from a puzzle name
import { Letter } from "./letter.js";

// class for a president name in the puzzle
// takes string parameter and creates property array of Letter objects
export class Word {
  private letters: Letter[];

  constructor(readonly word: string) {
    // building an array using Array.from method
    // taking word which is a string, iterating over it calling
    // for new Letter class object for each character in the string
    this.letters = Array.from(this.word, (char) => new Letter(char));
  }

  // update the word's letters following a guess attempt
  // iterate over this.letters array and call guessLetter() for each letter
  // this will set isKnown to true if the letter === guessedLetter
  updateWord(guessedLetter: string) {
    this.letters.map((char) => char.guessLetter(guessedLetter));
  }

  // return formatted string ready for use on the terminal
  // has 2 spaces between letters and 4 spaces between words or initials
  // example: 'G  E  O  R  G  E    W    B  U  S  H'
  // example: '_  _  _  _  _  _    _    _  _  _  _'
  getDisplayableWord() {
    // 1.  iterate over letters in this.word with map
    // 2.  if space then add 4 spaces to the return
    // 3.  if not last non-space letter add it and 2 spaces to the return
    // 4.  if last non-space letter add it to the return
    // 5.  join map's array to return a string
    return this.letters
      .map(({ letter }, i) => {
        if (letter === " ") {
          return letter + "    ";
        } else {
          return i < this.letters.length - 1 ? letter + "  " : letter;
        }
      })
      .join('');
  }

  // solve the word and return displayable version
  // needed for when user has exhausted all guesses for a word
  getSolvedDisplayableWord() {
    // force the isKnown property to true for all letters
    this.letters.map((letter) => letter.forceReveal()); 
    return this.getDisplayableWord();
  }

  // is the word solved
  isSolved() {
    return this.letters.every((letter) => letter.isKnown);
  }

  // diagnostic display of word's letters array
  showWordLetters() {
    console.log(this.letters);
  }
}
