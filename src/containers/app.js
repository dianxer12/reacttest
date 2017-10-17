import React from 'react'
import {menu} from '../actions'
import {Layout,Header} from '../components'

class App extends React.Component{
    render(){
        return (
            <Layout header={<Header/>}/>
        );
    }
}

export default App