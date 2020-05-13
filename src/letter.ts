// class for letter in the puzzle's word
// letter starts unknown to player unless it is a space between names or intials
export class Letter {
  private _letter: string;
  private _isKnown: boolean;
  constructor(letter:string, isKnown:boolean = (letter === ' ' ? true : false)) {
    this._letter = letter;
    this._isKnown = isKnown;
  }

  // if letter is not known display it as an underscore  
  get letter() {
    return (this._isKnown) ? this._letter : '-';
  }

  get isKnown(): boolean {
    return this._isKnown;
  }

  set isKnown(isGuessed:boolean) {
    this._isKnown = isGuessed;
  }

  // cannot do the below code because the type of the getter and setter 
  // must be the same.
  // instead I will adjust the Word.updateWord() method and have it
  // do the check intead.
  // it will probably look like this:
    // // update the word's letters following a guess attempt
    // updateWord(guessedLetter) {
    //   // iterate over this.letters array and call isKnown setter for each letter
    //   // this will set isKnown to true if the letter === guessedLetter
    //   this.letters.map(char => { 
    //      1. call the setter with a true or the current value
    //      2. true if the guessed letter is same as what the getter returns
    //      3. else call the setter with the existing value returned by the getter
    //      char.isKnown = (guessedLetter.toUpperCase() === char.letter.toUpperCase()) ? true : char.isKnown;
    //   }  
    // }

  // // if letter is guessed set isKnown to true else keep current state
  // set isKnown(guessedLetter:string) {
  //   this._isKnown = (guessedLetter.toUpperCase() === this._letter.toUpperCase()) ? true : this._isKnown;
  // }


  // force the letter to known state without guessing
  forceReveal() {
    this._isKnown = true;
  }
}




// // module.exports for use in other .js files
// module.exports = {
//   Letter: Letter
// };



