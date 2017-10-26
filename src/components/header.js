import React from 'react'
import {MenuContainer} from '../containers'
//import {connect} from 'react-redux'

class Header extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id={this.props.name +'-nav'}>
                <a className="navbar-brand" href={"#" + this.props.name} id={this.props.name +'-navbrand'}>Dashboard</a>
                <div className="collapse navbar-collapse">
                    <MenuContainer />
                </div>
            </nav>
        );
    }
}

export default Header