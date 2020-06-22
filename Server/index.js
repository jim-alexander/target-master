import wordlist from 'wordlist-english'

//The 9 letter referance word is more common
const common = [
  ...wordlist['english/australian/10'],
  ...wordlist['english/australian/20'],
  ...wordlist['english/australian/35'],
  ...wordlist['english/10'],
  ...wordlist['english/20'],
  ...wordlist['english/35'],
]

//Will accept more uncommon words
const wordArray = [
  ...wordlist['english/australian/10'],
  ...wordlist['english/australian/20'],
  ...wordlist['english/australian/35'],
  ...wordlist['english/australian/40'],
  ...wordlist['english/australian/50'],
  ...wordlist['english/10'],
  ...wordlist['english/20'],
  ...wordlist['english/35'],
  ...wordlist['english/40'],
  ...wordlist['english/50'],
]

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const wordsFromLetters = (randWord, randIndex, reveal) => {
  let usableWords = []

  wordArray.forEach((word) => {
    let letters = randWord.split('')
    if (word.includes(letters[randIndex]) && word.length >= 4 && word.length <= 9) {
      let word_letters = word.split('')
      word_letters.every((l) => {
        let index = letters.indexOf(l)
        if (index >= 0) {
          letters.splice(index, 1)
          return true
        }
      }) && usableWords.push(word)
    }
  })
  //Threshold for difficulty... greater number should be easier (Find more words)
  if (usableWords.length < 50) {
    nineLetterWord(reveal)
  } else {
    if (reveal) {
      console.log(randWord, randWord[randIndex])
      countWords(usableWords)
    } else {
      console.log(shuffle(randWord.split('')), randWord[randIndex])
    }
  }
}

const nineLetterWord = (reveal) => {
  let nineLetterWords = []

  common.forEach((word) => word.length === 9 && nineLetterWords.push(word))

  let randWord = Math.floor(Math.random() * nineLetterWords.length + 1)
  let randIndex = Math.floor(Math.random() * 9)

  wordsFromLetters(nineLetterWords[randWord], randIndex, reveal)
}

const countWords = (array) => {
  let count = { 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] }
  array.forEach((word) => (count[word.length] = [...count[word.length], word]))
  console.log({ count })
}

const solveLetters = (inputWord, index) => {
  //Index of main letter starts at 0
  let usableWords = []

  wordArray.forEach((word) => {
    let letters = inputWord.split('')
    if (word.includes(inputWord[index]) && word.length >= 4 && word.length <= 9) {
      let word_letters = word.split('')
      word_letters.every((l) => {
        let index = letters.indexOf(l)
        if (index >= 0) {
          letters.splice(index, 1)
          return true
        }
      }) && usableWords.push(word)
    }
  })
  console.log(usableWords)
  countWords(usableWords)
}

// ***********************************************

//1 - Solve Existing Puzzle - provide the index of the main letter (starting from 0)
// solveLetters('sicsdofeh', 0)

//2.1 - Genorate New puzzle - Without answers
// nineLetterWord(false)

//2.2 - Genorate New puzzle - With answers
nineLetterWord(true)

// ***********************************************
