import reducer from './reducer'
import { searchQueryUpdated } from './actions'

const INITIAL_QUERY = 'baguvix'
const EXPECTED_QUERY = 'hesoyam'

const state = {
  searchQuery: INITIAL_QUERY
}

describe('search reducer', () => {
  it('changes search state from "baguvix" to "hesoyam"', () => {
    expect(reducer(state, searchQueryUpdated(EXPECTED_QUERY))).toEqual(EXPECTED_QUERY)
  })
})
