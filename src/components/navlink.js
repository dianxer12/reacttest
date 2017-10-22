import React from 'react'


class MenuItem extends React.Component{
    constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick(){
        const {id,activateMenuItem} = this.props
        activateMenuItem(id)
    }
    render(){
        const {active,text,link,onItemClick} = this.props
        return (
            <li 
                className={active ?"nav-item active" :"nav-item"  }        
            >
                <a 
                    className="nav-link" 
                    href={link}
                    onClick={e=>{e.preventDefault();
                                onItemClick()
                    }}
                >
                    {text} 
                </a>     
            </li>
        )
    }
}

export default MenuItem