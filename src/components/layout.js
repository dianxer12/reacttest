import React from 'react'
import menu from '../actions/actions.js'


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

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menu : this.menu()
        }
    }

    menu = () => {
        let newMenu = {
            items: [],
            onMenuClick:  (id) =>{
                let mappingItem = newMenu.items.find((item) => item.id === id);
                console.log('hello ', mappingItem ? mappingItem.text : 'item is not found');
            }
        };
        [1,2,3,4,5].forEach((i) => newMenu.items.push(menu('test'+i)));
        return newMenu;
    }


    render(){
        const menu = this.state.menu;
        return (
            <div className='container'>
                <div id='header' className='row'>
                    <Header menu = {menu} />
                </div>
                {/* <div className='row'>
                    <div id='left' className='col-12 col-md-4'>
                        {this.props.children[0]}
                    </div>
                    <div id='center' className='col-12 col-md-4'>
                        {this.props.children[1]}
                    </div>
                    <div id='right' className='col-12 col-md-4'>
                        {this.props.children[2]}   
                    </div>
                </div> */}
            </div>
        );
    }
}

export {App,Header,Menu}