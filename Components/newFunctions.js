import { common, wordArray } from './words.js'

const nineLetterWords = () => {
  let words = []
  common.forEach((word) => {
    let letters = word.split('')
    word.length === 9 && letters[letters.length - 1] !== 's' && words.push(word)
  })
  return words
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const wordGenerator = (threshold) => {
  let words = nineLetterWords()

  let randWordIndex = Math.floor(Math.random() * words.length + 1)
  let randIndex = Math.floor(Math.random() * 9)

  let chosen = words[randWordIndex]
  let usableWords = []

  wordArray.forEach((word) => {
    let letters = chosen.split('')
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
  let letters = shuffle(chosen.split(''))
  let index = letters.indexOf(chosen[randIndex])

  return usableWords.length < threshold ? wordGenerator(threshold) : { usableWords, letters, index }
}
