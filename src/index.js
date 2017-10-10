import React from 'react'
import { render } from 'react-dom'
import {SearchBar} from './components/searchbar.js'
import {Calc} from './components/boilwater.js'

// function tick(){
//     render(
//        <Clock now={new Date()} name="Sean" />,
//        document.getElementById('root')
//     );
// }

// function Clock(props){
//     return (
//         <div>
//             <h1>Hello {props.name}!!</h1>
//             <h2>It's {props.now.toLocaleTimeString()} !</h2>
//     </div>);
// }
// setInterval(tick,1000);

render(
    <div>
        <Calc tempa='200' />
        <SearchBar description='only show products in the list'/>
    </div>,
    document.getElementById('root')
);
