import { connect } from 'react-redux'
import {Header} from './components'

const mapStateToProps = (state, ownProps) => {
    return {
      appmenus : [...state.menus]
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      },
      onInit: () => {
        dispatch()
      }
    }
  }
  
  const ApplicationMenu = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
  
  export default ApplicationMenu
  