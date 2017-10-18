import React from 'react'
const MenuItem = ({active,text,link,onItemClick}) => (
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
);

export default MenuItem