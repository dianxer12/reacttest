import React from 'react'
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

export default MenuItem