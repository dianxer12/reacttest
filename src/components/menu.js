import React from 'react'
import MenuItem from './navlink.js'
import PropTypes from 'prop-types'

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    })).isRequired,
    position: PropTypes.string.isRequired,
    activeItem: PropTypes.number.isRequired,
    activateMenuItem: PropTypes.func.isRequired
}   

const Menu = ({items,activateMenuItem,activeItem,position}) => {
    return (
            <ul className={styleClass}>
                {
                    items.map(item => (
                        <MenuItem 
                            key={item.id} {...item} 
                            handleClick={(id) => activateMenuItem(id,position)}
                            styleClass={activeItem == item.id ? 'nav-item active' : 'nav-item'}/>
                    ))
                }
            </ul>
    );
}

Menu.propTypes = propTypes

export default Menu