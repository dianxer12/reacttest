import React from 'react'
import {Layout} from '../components'
import {MenuContainer} from '../containers'
import {Position} from '../util'


class App extends React.Component{
    render(){
        return (
            <Layout 
                header={<MenuContainer position={Position.HEADER}/>}
                sidebar={<MenuContainer position={Position.LEFTSIDE}/>}
            />
        );
    }
}

export default App