import { useState } from 'react'
import { handleChange as handleChangeImport, handleKeyPress as handleKeyPressImport } from './utils/handlers'

export const useCheats = () => {
  const [ cheats, addCheat ] = useState([])
  const [ cheat, updateCheat ] = useState('')
  const [ cheatCodeMatch, updateMatch ] = useState(false)

  const handleChange = handleChangeImport(updateCheat)
  const handleKeyPress = handleKeyPressImport({ cheat, cheats, addCheat, updateCheat, cheatCodeMatch, updateMatch })

  return {
    cheat,
    cheats,
    cheatCodeMatch,
    handleChange,
    handleKeyPress,
  }
}
