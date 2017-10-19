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
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id={this.props.name +'-nav'}>
                <a className="navbar-brand" href={"#" + this.props.name} id={this.props.name +'-navbrand'}>Dashboard</a>
                <div className="collapse navbar-collapse">
                    <Menu items={this.state.items} onMenuClick={(id) => this.handleMenuItemClick(id)} styleClass={'navbar-nav mr-auto'}/>
                </div>
            </nav>
        );
    }
}

export default Header