import React from 'react'
<<<<<<< HEAD


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
=======
const MenuItem = ({active,text,link,onItemClick,styleClass}) => (
    <li 
        className={styleClass}        
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
);
>>>>>>> f25130ff7d7d2e3382c97a08fb1c5f08e4f52523

export default MenuItem