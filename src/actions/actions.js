import {getHeaderMenus} from '../selector/entity.js'
import {MenuActionType} from '../util'

let id=0;
export const menu = (text,link='#',active=false) => {
    return {
        id: id++,
        text,
        link,
        active
    };
}

export const initMenu = () => (dispatch,getState) =>{
    const state = getState()
    const items = getHeaderMenus(state)
    dispatch({
        type: MenuActionType.INIT,
        labels: []
    })
}

export const activateMenuItem = (id,position) => (dispatch,getState) => {
    const state = getState()
    const items = getHeaderMenus(state)
    dispatch({
        type: MenuActionType.ACTIVIATE,        
        id,
        position
    })
}
