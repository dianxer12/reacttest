import React from 'react'
import {Menu} from '../components'
import {buildDefaultMenu} from '../reducers'
//import {connect} from 'react-redux'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }
    
    componentDidMount(){
        this.setState({items:buildDefaultMenu(['Dashboard','Tasks','Holidays','System'])})
    }
    
    handleMenuItemClick(id){
        const items = this.state.items
        this.setState(items.map((item) => item.id===id ? item.active=true : item.active=false))
        console.log(items.find((item)=>item.id===id))
        
    }
    
    render() {
        return (
          <Menu items={this.state.items} onMenuClick={(id) => this.handleMenuItemClick(id)} />
        );
    }
}

export default Header