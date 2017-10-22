import React from 'react'
import MenuItem from './navlink.js'
/**
 * 
 * @param {*} items : [
 * {
 *    id: string
 *    active: boolean
 *    text:  string
 *    link:  string
 * }] 
 * 
 * onMenuClick:  function 
 */
const Menu = ({name,items,onMenuClick,styleClass}) => {
    return (
        
            <ul className={styleClass}>
                {
                    items.map(item => (
                        <MenuItem 
                            key={item.id} {...item} 
                            onItemClick={() => onMenuClick(item.id)} 
                            styleClass={item.active ? "nav-item active" :"nav-item" }/>
                    ))
                }
            </ul>
    );
}



export default Menu