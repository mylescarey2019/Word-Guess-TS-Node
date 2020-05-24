// class for letter in the puzzle's word
// letter starts unknown to player unless it is a space between names or intials
export class Letter {
  constructor(
    private readonly _letter: string,
    private _isKnown: boolean = _letter === " " ? true : false
  ) { }

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

  // a method acting as a 'setter' for _isKnown property
  guessLetter(letter: string) {
    this._isKnown =
      letter.toUpperCase() === this._letter.toUpperCase() ? true : this.isKnown;
  }

  // force the letter to known state without guessing
  forceReveal() {
    this._isKnown = true;
  }
}

