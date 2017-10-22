import React from 'react'
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