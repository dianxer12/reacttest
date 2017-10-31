import header from './header.js'
import sidebar from './sidebar.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    header,
    sidebar
})
export default rootReducer