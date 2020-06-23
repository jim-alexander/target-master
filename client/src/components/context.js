import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export const Provider = ({ children }) => {
  const [letters, setLetters] = useState(null)
  const [guess, setGuess] = useState('')
  const [words, setWords] = useState(null)
  const [guesses, setGuesses] = useState([])
  const [incorrect, setIncorrect] = useState([])
  const [alert, setAlert] = useState(null)

  const newGame = () => {
    setGuesses([])
    setIncorrect([])
    axios
      .get('/api/generate')
      .then((resp) => {
        let index = resp.data.index
        let letters = [...resp.data.letters]
        ;[letters[index], letters[4]] = [letters[4], letters[index]]

        setLetters(letters)
        setWords(resp.data.usableWords)
      })
      .catch(console.error)
  }

  useEffect(() => {
    !letters && newGame()
  }, [letters])

  const submit = () => {
    console.log(guess)
    if (words.indexOf(guess) >= 0) {
      let index = guesses.indexOf(guess)
      if (index === -1) {
        setGuesses([guess, ...guesses])
        setAlert(null)
      } else {
        setAlert('Already added')
      }
    } else {
      let index = incorrect.indexOf(guess)
      if (index === -1) {
        setIncorrect([guess, ...incorrect])
      }
      setAlert('Not valid for reasons')
    }
    setGuess('')
  }

  const solve = () => {
    axios.get(`/api/solve/?letters=${letters.join('')}&index=${4}`).then((resp) => console.log(resp.data))
  }

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null)
      }, 2000)
    }
  }, [alert])

  return (
    <Context.Provider value={{ letters, words, submit, guesses, guess, setGuess, alert, incorrect, solve, newGame }}>
      {children}
    </Context.Provider>
  )
}
