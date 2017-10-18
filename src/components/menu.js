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
const Menu = ({name,items,onMenuClick}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id={name +'-nav'}>
            <a className="navbar-brand" href="#" id={name +'-navbrand'}>Dashboard</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {
                        items.map(item => (
                            <MenuItem 
                                key={item.id} {...item} 
                                onItemClick={() => onMenuClick(item.id)} />
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}



export {Menu,MenuItem}