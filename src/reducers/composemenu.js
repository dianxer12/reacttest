import {MenuActionType} from '../util'
import {menu as menuGenerator} from '../actions'

const menu = (state=[],action) => {
    switch(action.type){
        case  MenuActionType.INIT:
            return [...state,buildDefaultMenu(action.items)]
        default:
            return [...state];
    }
}

const buildDefaultMenu = (items=[]) => (
    items.map((item) => (menuGenerator(item)))
)
export {menu,buildDefaultMenu}