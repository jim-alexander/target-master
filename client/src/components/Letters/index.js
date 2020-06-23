import React, { useContext } from 'react'
import { Context } from '../context'
import './index.css'

export default () => {
  const { letters, guess, setGuess, index } = useContext(Context)
  const click = (e) => {
    setGuess(guess + e)
  }

  return (
    letters && (
      <div id='ltr-con'>
        <div id='letters'>
          <div className='ltr-column clm-1'>
            <div className='ltr' onClick={() => click(letters[0])}>
              {letters[0]}
            </div>
            <div className='ltr' onClick={() => click(letters[1])}>
              {letters[1]}
            </div>
            <div className='ltr' onClick={() => click(letters[2])}>
              {letters[2]}
            </div>
          </div>
          <div className='ltr-column'>
            <div className='ltr' onClick={() => click(letters[3])}>
              {letters[3]}
            </div>
            <div className='ltr main-ltr' onClick={() => click(letters[index])}>
              {letters[index]}
            </div>
            <div className='ltr' onClick={() => click(letters[5])}>
              {letters[5]}
            </div>
          </div>
          <div className='ltr-column'>
            <div className='ltr' onClick={() => click(letters[6])}>
              {letters[6]}
            </div>
            <div className='ltr' onClick={() => click(letters[7])}>
              {letters[7]}
            </div>
            <div className='ltr' onClick={() => click(letters[4])}>
              {letters[4]}
            </div>
          </div>
        </div>
      </div>
    )
  )
}
