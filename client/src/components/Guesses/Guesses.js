import React, { useContext } from 'react'
import { Context } from '../context'

export default () => {
  const { guesses, incorrect } = useContext(Context)
  return (
    <div id='guesses-con'>
      <div className='guesses'>
        {guesses.length > 0 && <div id='guess-count'>{guesses.length}</div>}
        <div className='guesses'>
          {guesses.map((guess) => (
            <div key={guess}>
              <a
                href={`https://www.dictionary.com/browse/${guess}`}
                target='_blank'
                rel='noopener noreferrer'
                className='guess'>
                {guess.toUpperCase()}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className='guesses'>
        {incorrect.length > 0 && <div id='guess-count'>{incorrect.length}</div>}
        <div id='guesses'>
          {incorrect.map((guess) => (
            <div key={guess}>
              <a
                href={`https://www.dictionary.com/browse/${guess}`}
                target='_blank'
                rel='noopener noreferrer'
                className='guess incorrect'>
                {guess.toUpperCase()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
