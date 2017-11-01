/**
 * 
 * @param  state {
 * header: {
 *    menu: {
 *      activeItem: string
 *      items: []
 *    }
 * },
 * 
 * sidebar: {
 *    menu: {
 *      activeItem: string
 *      items: []
 *    }
 * }
 * 
 * }
 */

export const getHeaderMenus = state => ( state.header.items )
export const getSideMenus= state => ( state.sidebar.items )
export const getActiveHeaderMenu = state => ( state.header.activeItem )
export const getActiveSidebarMenu = state => ( state.sidebar.activeItem )