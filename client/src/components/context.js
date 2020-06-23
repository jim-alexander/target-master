import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Context = React.createContext()

export const Provider = ({ children }) => {
  const [letters, setLetters] = useState(null)
  const [index, setIndex] = useState(null)
  const [guess, setGuess] = useState('')
  const [words, setWords] = useState(null)
  const [guesses, setGuesses] = useState([])
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    axios
      .get('/api/generate')
      .then((resp) => {
        console.log(resp.data)
        setIndex(resp.data.letter)
        setLetters(resp.data.chosen.split(''))
        setWords(resp.data.usableWords)
      })
      .then(console.log)
  }, [])

  const submit = () => {
    console.log(guess)
    if (words.indexOf(guess) >= 0) {
      setGuesses([...guesses, guess])
      setAlert(null)
    } else {
      setAlert('Not valid for reasons')
    }
    setGuess('')
  }

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null)
      }, 2000)
    }
  }, [alert])

  return (
    <Context.Provider value={{ letters, index, words, submit, guesses, guess, setGuess, alert }}>
      {children}
    </Context.Provider>
  )
}
