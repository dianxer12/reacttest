import React from 'react'
import {Layout} from '../components'
import {Header,Sidebar} from '.'
import {ApplicationMenu} from '../containers'

class App extends React.Component{
    render(){
        return (
        <Layout header={<ApplicationMenu/>} sidebar={<Sidebar />}/>
        );
    }
}

export default App