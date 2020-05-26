# Word-Guess 

## TypeScript / Node version of Presidential themed name guess game

Written in TypeScript, utilizing: ES6, classes, OOP patterns, Node.js, npm inquirer package

## Description

This node.js app has command line interface for playing a hangman style game using the US President names as a word set.

The game format is 

1.  User is presented with a random presidential name to guess showing letters as underscores initially
2.  User guess letter via keyboard - results reveiled
    1. letter not in name
    2. letter in name - underscores replaced with letter
    3. letter already used - list of previsouly used letters shown
    4. letter in name and solved the word - message followed by next word
    5. repeat above until pool of presidential names exhausted.
    6. replay of the game will provide randomized order of names

## Details:

- #### Github project :    <a href="https://github.com/mylescarey2019/Word-Guess-TS-Node">Word-Guess-Node Repository</a>

- #### For further development details see: 

  - ####  [UseCases and Psuedo Code](UseCases-PsuedoCode.md)

  - ####  [Test Cases](TestCases.md)

#### Example walkthru GIF (shows abreviated 3 word test) : 

#### ![word-guess-node-test](assets/images/word-guess-node-test.gif)

## Getting Started

### Native and NPM Packages Used
1.  inquirer  - for interactive command line response on command typos


### Dependencies

* none 

### Installing

* none necessary 

### Executing program

* open terminal session
  1. run program:   node app.js
        1. follow in terminal instructions and prompts for play
  


## Authors

Myles Carey 
mylescarey2019@gmail.com 

## Version History

* 1.0 - Initial Release - TypeScript version based of previous vanilla JS version
* 1.1 - 

## License


## Acknowledgments



