import React, { useContext } from 'react'
import { Context } from '../context'
import './index.css'

export default () => {
  const { letters, guess, setGuess } = useContext(Context)
  const click = (e) => {
    setGuess(guess + e)
  }

  const letter = (x) => (
    <div className={`ltr ${x === 4 && 'main-ltr'}`} onClick={() => click(letters[x])}>
      {letters[x].toUpperCase()}
    </div>
  )

  return (
    letters && (
      <div id='ltr-con'>
        <div id='letters'>
          <div className='ltr-column clm-1'>
            {letter(0)}
            {letter(1)}
            {letter(2)}
          </div>
          <div className='ltr-column'>
            {letter(3)}
            {letter(4, true)}
            {letter(5)}
          </div>
          <div className='ltr-column'>
            {letter(6)}
            {letter(7)}
            {letter(8)}
          </div>
        </div>
      </div>
    )
  )
}
