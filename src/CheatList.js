import React from 'react'

export default({ cheats }) => (
  <ul>
    {cheats.map((t, i) => <li key={i}>{t}</li>)}
  </ul>
)
