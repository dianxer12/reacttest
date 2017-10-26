import {MenuActionType} from '../util'
import {menu as menuGenerator} from '../actions'

const header = (state={},action) => {
    switch(action.type){
        case  MenuActionType.INIT:
            return {
                ...state,
                menu: {
                    items: [...state.menu.items,action.items,buildDefaultMenu(['Dashboard','Home','Solution','About Us'])],
                    activeItem: action.id
                }
            }
        case MenuActionType.ACTIVIATE:
            return {
                ...state,
                menu:{
                    activeItem: action.id
                }
            }
        default:
            return {...state};
    }
}

const buildDefaultMenu = (items=[]) => (
    items.map((item) => (menuGenerator(item)))
)
export {header}

