import React from 'react'
import { useSearchQuery } from './hooks'

export default ({ searchQueryUpdated }) => {
  const { searchQuery, handleSearchInputChange } = useSearchQuery({ searchQueryUpdated })

  return (
    <div className="section">
      <p className="control has-icons-right">
        <input value={searchQuery} onChange={handleSearchInputChange} className="input" type="text" placeholder="Search" />
        <span className="icon is-small is-right">
        <i className="fas fa-search" />
      </span>
      </p>
    </div>
  )
}
