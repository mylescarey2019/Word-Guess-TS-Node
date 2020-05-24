"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class for letter in the puzzle's word
// letter starts unknown to player unless it is a space between names or intials
class Letter {
    constructor(_letter, _isKnown = _letter === " " ? true : false) {
        this._letter = _letter;
        this._isKnown = _isKnown;
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
    // a method acting as a 'setter' for _isKnown property
    guessLetter(letter) {
        this._isKnown =
            letter.toUpperCase() === this._letter.toUpperCase() ? true : this.isKnown;
    }
    // force the letter to known state without guessing
    forceReveal() {
        this._isKnown = true;
    }
}
exports.Letter = Letter;
