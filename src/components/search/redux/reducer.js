import { handleActions } from 'redux-actions'

import { searchQueryUpdated } from './actions'

export default handleActions({
  [searchQueryUpdated]: (state, { payload }) => payload
}, '')
