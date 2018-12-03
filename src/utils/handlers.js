import { cheatsMatches } from '../consts'
import { enterPressed } from './'

export const handleChange = updateCheat => (e) => {
  e.persist()
  updateCheat(e.target.value)
}

const handleMatch = (updateMatch) => {
  updateMatch(true)
  setTimeout(() => updateMatch(false), 1500)
}

const findCheat = cheat => c => c === cheat

const addNewCheat = ({ cheat, cheats, addCheat, updateMatch }) => {
  addCheat([
    ...cheats,
    cheat
  ])

  if (cheatsMatches.find(findCheat(cheat))) {
    handleMatch(updateMatch)
  }
}

const handleEnter = ({ cheat, cheats, addCheat, updateCheat, updateMatch }) => {
  addNewCheat({ cheat, cheats, addCheat, updateMatch })
  updateCheat('')
}

export const handleKeyPress = ({ cheat, cheats, addCheat, updateCheat, updateMatch }) => e => {
  e.persist()
  if (!cheat) return
  if (enterPressed(e.which)) {
    handleEnter({ cheat, cheats, addCheat, updateCheat, updateMatch })
  }
}
