import React, { useContext } from 'react'
import { Context } from '../context'
import { TextInput, Button } from 'evergreen-ui'
import Guesses from './Guesses'

import './index.css'

export default () => {
  const { submit, guess, setGuess, alert, solve } = useContext(Context)

  return (
    <div id='guess-con'>
      <div>
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
      </div>
      {alert && <div id='invalid'>{alert}</div>}
      <Guesses />
      <div>
        <Button onClick={() => solve()}>Solve</Button>
      </div>
    </div>
  )
}
