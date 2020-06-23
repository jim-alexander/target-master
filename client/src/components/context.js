import React, { useState, useEffect } from 'react'

export const Context = React.createContext()

export const Provider = ({ children }) => {
  const [letters] = useState(['s', 'u', 'm', 'm', 'a', 'r', 'i', 's', 'e'])
  const [index] = useState(8)
  const [guess, setGuess] = useState('')
  const [words] = useState([
    'arse',
    'summarise',
    'arses',
    'amuse',
    'amuses',
    'arise',
    'arises',
    'assume',
    'assure',
    'issue',
    'mess',
    'misuse',
    'raise',
    'raises',
    'rise',
    'same',
    'summer',
    'sure',
    'user',
    'users',
    'uses',
    'ears',
    'rises',
    'sues',
    'summaries',
    'ares',
    'armies',
    'emir',
    'emirs',
    'eras',
    'mare',
    'mares',
    'mime',
    'mimes',
    'mire',
    'mires',
    'miser',
    'misers',
    'muse',
    'muses',
    'ream',
    'reams',
    'remiss',
    'rues',
    'ruse',
    'ruses',
    'sames',
    'seam',
    'seams',
    'sear',
    'sears',
    'seas',
    'serum',
    'serums',
    'simmer',
    'simmers',
    'sire',
    'sires',
    'smear',
    'smears',
    'summers',
    'surmise',
    'masseur',
    'emus',
    'immure',
    'immures',
    'mesa',
    'mesas',
    'mussier',
    'rime',
    'rimes',
    'semi',
    'semis',
    'urea',
  ])
  const [guesses, setGuesses] = useState([])
  const [alert, setAlert] = useState(null)

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
