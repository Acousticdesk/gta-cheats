import React from 'react'

export const cheatsToTableRows = (c, i) => (
  <tr key={i}>
    <td className="has-text-weight-semibold">{c.combination}</td>
    <td>{c.description}</td>
  </tr>
)
export const filterCheats = (searchQuery, cheats) => {
  console.log(searchQuery, cheats)
  return cheats
}
