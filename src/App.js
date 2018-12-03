import React from 'react'
import { useCheats } from './hooks'

import 'animate.css/animate.min.css'
import './App.css'

import CheatList from './CheatList'

export default () => {
  const { cheat, cheats, handleChange, handleKeyPress, cheatCodeMatch } = useCheats()

  return (
    <div>
      <input type="text" value={cheat} onChange={handleChange} onKeyPress={handleKeyPress} />
      <CheatList cheats={cheats} />
      <p className={`${cheatCodeMatch ? 'in' : 'out'}`}>You have used a cheat code!</p>
    </div>
  )
}
