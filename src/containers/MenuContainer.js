import { connect } from 'react-redux'
import {Menu} from './components'
import {getActiveHeaderMenu,getHeaderMenus} from '../selector/CommonSelector.js'
import {Position} from '../util'

const mapStateToProps = (state, ownProps) => (
  {
    items : getHeaderMenus(state),
    activeItem:getActiveHeaderMenu(state),
    position: Position.HEADER
  }
)
  
const MenuContainer = connect(
    mapStateToProps,
    {activateMenuItem}
  )(Menu)
  
  export default ApplicationMenu
  