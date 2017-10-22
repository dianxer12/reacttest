import React from 'react'
import {Layout} from '../components'
import {Header} from '.'

class App extends React.Component{
    render(){
        return (
            <Layout header={<Header/>} sidebar = {<Header/>}/>
        );
    }
}

export default App