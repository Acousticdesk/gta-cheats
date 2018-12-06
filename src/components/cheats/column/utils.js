import React from 'react'
import { cheatsToTableRows } from '../utils'

export const createContent = (cheats) => (
  cheats.length ? cheats.map(cheatsToTableRows) : (
    <tr>
      <td>No such cheats, amigo! 🌮</td>
    </tr>
  )
)
