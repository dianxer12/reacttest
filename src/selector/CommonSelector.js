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

export const getHeaderMenus = state => ( state.header.menu.items)
export const getSideMenus= state => (state.sidebar.menu.items)
export const getActiveHeaderMenu = state => (state.header.menu.activeItem)
export const getActiveSidebarMenu = state => (state.sidebar.menu.activeItem)