import { selectSearchQuery } from './selectors'

const state = {
  searchQuery: 'helloworld'
}

describe('selectSearchQuery', () => {
  it('should return helloworld from state mock', () => {
    expect(selectSearchQuery(state)).toBe('helloworld')
  })
})
