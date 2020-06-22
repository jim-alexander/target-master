import React, { useContext } from 'react'
import { Context } from '../context'
import './index.css'

export default () => {
  const { letters } = useContext(Context)
  return (
    letters && (
      <div id='ltr-con'>
        <div id='letters'>
          <div className='ltr-column clm-1'>
            <div className='ltr'>{letters[0]}</div>
            <div className='ltr'>{letters[1]}</div>
            <div className='ltr'>{letters[2]}</div>
          </div>
          <div className='ltr-column'>
            <div className='ltr'>{letters[3]}</div>
            <div className='ltr main-ltr'>{letters[8]}</div>
            <div className='ltr'>{letters[5]}</div>
          </div>
          <div className='ltr-column'>
            <div className='ltr'>{letters[6]}</div>
            <div className='ltr'>{letters[7]}</div>
            <div className='ltr'>{letters[4]}</div>
          </div>
        </div>
      </div>
    )
  )
}
