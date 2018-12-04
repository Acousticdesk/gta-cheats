import React from 'react'

import CheatsSection from 'components/cheats/column/component'
import cheats from 'components/cheats/data'

export default () => (
  <div className="section">
    <div className="columns">
      <div className="column">
        <CheatsSection heading="Primary Cheats" cheats={cheats.primary} />
      </div>
      <div className="column">
        <CheatsSection heading="Spawn Cheats" cheats={cheats.spawn} />
      </div>
      <div className="column">
        <CheatsSection heading="Weather Cheats" cheats={cheats.weather} />
      </div>
    </div>
  </div>
)
