import {MenuActionType} from '../util'

let id=0;
export const menu = (text,link='#') => {
    return {
        id: id++,
        text,
        link,
    };
}

export const resetMenu = () => (dispatch) => {
    dispatch({
        type: MenuActionType.INIT,
        labels: []
    })
}    

export const activateMenuItem = (id,position) => (dispatch,getState) => {
    dispatch({
        type: MenuActionType.ACTIVIATE,        
        id,
        position
    })
}

export const buildDefaultMenu = (items=[]) => (
    items.map(
        (item) => menu(item)
    )
)