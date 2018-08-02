import { Word } from './word.js';

class Haiku {
  constructor() {
    this.lineOneWords = haiku.split(";")[0].split(" ");
    this.lineTwoWords = haiku.split(";")[1].split(" ");
    this.lineThreeWords = haiku.split(";")[2].split(" ");
  }

  verifyLines() {
  let lineWords = [this.lineOneWords, this.lineTwoWords, this.lineThreeWords] // array where each element is an array of words
  let grandTotal = 0;
  lineWords.forEach(function (line, index) {
    let lineSyllables = 0;
    for(let i = 0; i < line.length; ++i) { // iterates over the words
      let word = new Word(line[i]);
      let wordSyllables = word.main()
      lineSyllables += wordSyllables
    }
    if (index === 0 || index === 2) {
      if (lineSyllables === 5) {
        return true;
      }
      else { // lineSyllables isn't 5
        return false;
      }
    } else {
        if (lineSyllables === 7) {
          return true;
        }
        else { // lineSyllables isn't 5
          return false;
        }
      }
    })
  }
}
