import {MenuActionType} from '../util'

const menu = (state=[],action) => {
    switch(action.type){
        case  MenuActionType.INIT:
            return [...state,buildDefaultMenu(action.items)]
        default:
            return [...state];
    }
}

const buildDefaultMenu = (items=[]) => (
    items.map((item) => (menu(item.text)
    ))
)
export {menu}