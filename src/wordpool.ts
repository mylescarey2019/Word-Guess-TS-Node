// import Word class - Word class consists of array of Letter objects
import { Word } from "./word.js";

// class for pool of word objects that are the game's president names
// takes a array of names, used them to create array of word objects in this pool object
export class WordPool {
  //private puzzelWordList: string[];
  private words: Word[];

  constructor(private readonly puzzelWordList: string[]) {
    this.words = []; // array of word objectss
    this.buildAndShuffleWords();
  }

  // randomly pull name from the puzzle list parameter, instansiate new word object for each - push into words array
  // remove name from puzzle list parameter - continue until all names created as word objects
  buildAndShuffleWords() {
    const listLength = this.puzzelWordList.length;
    for (let i = 0; i < listLength; i++) {
      const nextName = this.puzzelWordList[Math.floor(Math.random() * this.puzzelWordList.length)];
      this.words.push(new Word(nextName));
      // remove name from puzzle list parameter 
      this.puzzelWordList.splice(this.puzzelWordList.indexOf(nextName),1);
    }
  }

  // returns whether any words objects remain in the word pool
  isWordRemaining() {
    return (this.words.length > 0) ? true : false;
  }

  // remove and return next word object from pool, return undefined if empty
  getWordFromPool() {
    // explicit return of undefined if no words remaining in array
    const nextWord = this.words.pop();
    return (nextWord) ? nextWord : undefined;
  } 
  
  // diagnostic word pool dump - show word string from each word object in pool
  showWords(){
    this.words.map((word,i) => console.log(`word ${i} is ${word.word}`));
  }
}