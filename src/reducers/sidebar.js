import {MenuActionType} from '../util'

const initialState = {
    activeItem: '',
    items: [{
        id: '',
        text:'',
        to: ''
    }]
}

const sidebar = (state=initialState,action) => {
    switch(action.type){
        case MenuActionType.ACTIVIATE:
            return {
                ...state,
               activeItem: action.id
            }
        case MenuActionType.ADD:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.items
                ]
            }
        case MenuActionType.REMOVE:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.items
                ]
            }
        default:
            return state
    }
}
export default sidebar

