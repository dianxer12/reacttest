import React from 'react'
<<<<<<< HEAD
import MenuItem from './navlink.js'


const Sidebar = ({items,onMenuClick}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {items.map((item) => <MenuItm 
                                    key={item.id} 
                                    href={item.link} 
                                    id={item.id}
                                    active={item.active}
                                    text={item.text}
                                />
            )}
        </nav>
    );
}
=======
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
>>>>>>> f25130ff7d7d2e3382c97a08fb1c5f08e4f52523
