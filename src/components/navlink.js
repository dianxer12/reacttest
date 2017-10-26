import React from 'react'
import PropTypes from 'prop-types'

const proptypes = {
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    styleClass: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

class MenuItem extends React.Component{   
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    
    onClick(){
        let {id,handleClick} = this.props
        handleClick(id)    
    }
    
    render(){
        const {text,link,styleClass} = this.props
        return (
            <li 
                className={styleClass}        
            >
                <a 
                    className="nav-link" 
                    href={link}
                    onClick={this.onClick}
                >
                    {text} 
                </a>     
            </li>
        )
    }
}


MenuItem.proptypes = proptypes

export default MenuItem
