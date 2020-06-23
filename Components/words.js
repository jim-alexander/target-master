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

export { common, wordArray }
