import React, { useContext } from 'react'
import { Context } from '../context'
import { TextInput, Button } from 'evergreen-ui'
import './index.css'

export default () => {
  const { submit, guess, setGuess, guesses, alert } = useContext(Context)

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
      <div id='guesses'>
        {guesses.map((guess) => (
          <div key={guess}>
            <a
              href={`https://www.google.com/search?&q=define:${guess}`}
              target='_blank'
              rel='noopener noreferrer'
              className='guess'>
              {guess.toUpperCase()}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
