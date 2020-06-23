import React, { useContext } from 'react'
import { Context } from '../context'
import { TextInput, Button } from 'evergreen-ui'
import Guesses from './Guesses'

import './index.css'

export default () => {
  const { submit, guess, setGuess, alert, solve, newGame } = useContext(Context)

  return (
    <div>
      <div id='guess-con'>
        <TextInput
          name='text-input-name'
          placeholder='Make a word..'
          id='text-input'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && submit()}
        />
        <Button appearance='primary' intent='success' onClick={() => submit()}>
          Guess
        </Button>
        <Button onClick={() => solve()}>Solve</Button>
        <Button onClick={() => newGame()}>New Game</Button>
      </div>
      {alert && <div id='invalid'>{alert}</div>}
      <Guesses />
    </div>
  )
}
