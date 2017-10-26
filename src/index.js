import React from 'react'
import {App} from './components'
import configureStore from './store/ConfigureStore'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {buildDefaultMenu} from './actions'

const initialState = {
  header: {
    menu:{
      items: buildDefaultMenu(['Dashboard','Home','Solution','About Us']),
      activeItem: ''
    }
    
  }
}

render(
    <Provider store={configureStore(initialState)}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
