import { useState } from 'react'

export const useSearchQuery = ({ searchQueryUpdated }) => {
  const [ searchQuery, updateSearchQuery ] = useState('')

  const handleSearchInputChange = e => {
    const value = e.target.value
    e.persist()
    updateSearchQuery(value)
    searchQueryUpdated(value)
  }

  return {
    searchQuery,
    handleSearchInputChange,
  }
}
