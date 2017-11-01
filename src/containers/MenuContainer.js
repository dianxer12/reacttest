import React from 'react'
import { connect } from 'react-redux'
import {Menu} from '../components'
import {activateMenuItem,initMenu} from '../actions'
import {getActiveHeaderMenu,getHeaderMenus} from '../selector/CommonSelector'

const menu = props => <Menu {...props} />;

const mapStateToProps = (state,ownProps) => {
  return {
    items : getHeaderMenus(state),
    activeItem: getActiveHeaderMenu(state),
    position: ownProps.position
  }
}
  
const MenuContainer = connect(mapStateToProps,{
      activateMenuItem,
      initMenu,
})(menu)
    
export default MenuContainer
  