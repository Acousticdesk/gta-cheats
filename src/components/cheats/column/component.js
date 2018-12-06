import React from 'react'

import './styles.scss'

import { cheatsToTableRows } from '../utils/index'

export default ({ heading, cheats }) => (
  <>
    <h3 className="cheat-column__heading is-size-5">{heading}:</h3>
    <table className="table is-striped">
        <tbody>
            {cheats.map(cheatsToTableRows)}
        </tbody>
    </table>
  </>
)
