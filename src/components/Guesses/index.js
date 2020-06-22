import React, { useContext, useState } from 'react'
import { Context } from '../context'
import { TextInput, Button } from 'evergreen-ui'
import './index.css'

export default () => {
  const { submit } = useContext(Context)
  const [guess, setGuess] = useState('')

  return (
    <div id='guess-con'>
      <div>
        <TextInput
          name='text-input-name'
          placeholder='Make a word..'
          id='text-input'
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <Button appearance='primary' intent='success' onClick={() => submit(guess)}>
          Guess
        </Button>
      </div>
      <div id='guesses'>okay</div>
    </div>
  )
}
