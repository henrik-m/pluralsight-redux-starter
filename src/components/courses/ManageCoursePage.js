import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as courseActions from '../../actions/courseActions'

class ManageCoursePage extends React.Component {
  render() {
    return (
      <h1>Manage Course</h1>
    )
  }
}

function mapStateToProps(state, ownProps) {
  
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)