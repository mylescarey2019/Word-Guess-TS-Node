// class for letter in the puzzle's word
// letter starts unknown to player unless it is a space between names or intials
export class Letter {
  private _letter: string;
  private _isKnown: boolean;

  constructor(
    letter: string,
    isKnown: boolean = letter === " " ? true : false
  ) {
    this._letter = letter;
    this._isKnown = isKnown;
  }

  // if letter is not known display it as an underscore
  get letter() {
    return this._isKnown ? this._letter : "-";
  }

  get isKnown() {
    return this._isKnown;
  }

  set isKnown(isGuessed) {
    this._isKnown = isGuessed;
  }

  // a method 'setter' for _isKnown property
  guessLetter(letter: string) {
    this._isKnown =
      letter.toUpperCase() === this._letter.toUpperCase() ? true : this.isKnown;
  }

  // force the letter to known state without guessing
  forceReveal() {
    this._isKnown = true;
  }
}

