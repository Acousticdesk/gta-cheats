import React from 'react'

import filterCheatsImport from './filterCheats'

export const cheatsToTableRows = (c, i) => (
  <tr key={i}>
    <td className="has-text-weight-semibold">{c.combination}</td>
    <td>{c.description}</td>
  </tr>
)

export const filterCheats = filterCheatsImport
