import React from 'react'
import { connect } from 'react-redux'
import {Menu} from '../components'
import {activateMenuItem,initMenu} from '../actions'
import {getActiveHeaderMenu,getHeaderMenus,getActiveSidebarMenu,getSideMenus} from '../selector/CommonSelector'
import {Position} from '../util'

const menu = props => <Menu {...props} />;

const mapStateToProps = (state,ownProps) => {
  return {
    items : ownProps.position===Position.HEADER ? getHeaderMenus(state) : getSideMenus(state),
    activeItem: ownProps.position===Position.HEADER ? getActiveHeaderMenu(state) : getActiveSidebarMenu(state),
    position: ownProps.position
  }
}
  
const MenuContainer = connect(mapStateToProps,{
      activateMenuItem,
      initMenu,
})(menu)
    
export default MenuContainer
  