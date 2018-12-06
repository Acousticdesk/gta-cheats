import React from 'react'
import { connect } from 'react-redux'

import cheats from 'components/cheats/data'

import CheatsColumn from 'components/cheats/column/component'

import { filterCheats } from '../utils'

import { selectSearchQuery } from '../../search/redux/selectors'

const CheatsSection = ({ searchQuery }) => {
  const filteredCheats = filterCheats(searchQuery, cheats)

  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <CheatsColumn heading="Primary Cheats" cheats={filteredCheats.primary} />
        </div>
        <div className="column">
          <CheatsColumn heading="Spawn Cheats" cheats={filteredCheats.spawn} />
        </div>
        <div className="column">
          <CheatsColumn heading="Weather Cheats" cheats={filteredCheats.weather} />
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({ searchQuery: selectSearchQuery(state) }), null)(CheatsSection)
