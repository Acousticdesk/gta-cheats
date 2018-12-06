import { connect } from 'react-redux'
import { searchQueryUpdated } from './redux/actions'

import SearchComponent from './Section.component'

export default connect(
  null,
  {
    searchQueryUpdated,
  }
)(SearchComponent)
