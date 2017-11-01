import React from 'react'
import {App} from './components'
import configureStore from './store/ConfigureStore'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
