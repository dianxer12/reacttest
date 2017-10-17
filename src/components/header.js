import React from 'react'

/**
 * 
 * @param {*} menu = {
 *  items: Array
 *  onMenuClick : function
 * } 
 */
const Header = ({menu}) => {
    return (
        <div className='col-12'>
            <Menu {...menu} />
        </div>
    );
}

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
const Menu = ({items,onMenuClick}) => {
    return (
        <ul className="nav nav-pills nav-fill">
            {
                items.map(item => (
                    <MenuItem 
                        key={item.id} {...item} 
                        onItemClick={() => onMenuClick(item.id)} />
                ))
            }
        </ul>
    );
}

const MenuItem = ({active,text,link,onItemClick}) => (
    <li 
        className={active ?"nav-item active" :"nav-item"  }
        href={link}
        onClick={e=>{
            e.preventDefault();
            onItemClick()
        }}
    >
        {text}
    </li>
);

export {Header,Menu,MenuItem}