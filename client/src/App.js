import React from 'react'

import { Provider } from './components/context'

import Letters from './components/Letters'
import Guesses from './components/Guesses'

import './App.css'

export default () => (
  <div className='App'>
    <Provider>
      <Letters />
      <Guesses />
    </Provider>
  </div>
)
