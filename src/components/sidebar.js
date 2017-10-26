import React from 'react'
import {Menu} from '.'
import {buildDefaultMenu} from '../reducers'
//import {connect} from 'react-redux'

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }
    
    componentDidMount(){
        this.setState({items:buildDefaultMenu(['Analysis','Report','Weekly','Monthly','Daily','Yearly'])})
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

export default Sidebar
