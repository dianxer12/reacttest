import {MenuActionType} from '../util'

const header = (state={},action) => {
    switch(action.type){
        // case  MenuActionType.INIT:
        //     return {
        //         ...state,
        //         menu: {
        //             items: [buildDefaultMenu(['Dashboard','Home','Solution','About Us'])],
        //             activeItem: action.id
        //         }
        //     }
        case MenuActionType.ACTIVIATE:
            return {
                ...state,
                menu:{
                    ...state.menu,
                    activeItem: action.id
                }
            }
        default:
            return {...state};
    }
}
export {header}

