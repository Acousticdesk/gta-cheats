import React from 'react'

import { cheatsToTableRows } from './utils'

export default ({ heading, cheats }) => (
  <>
    <h3 className="cheat-section__heading is-size-5">{heading}:</h3>
    <table className="table is-striped">
        <tbody>
            {cheats.map(cheatsToTableRows)}
        </tbody>
    </table>
  </>
)
