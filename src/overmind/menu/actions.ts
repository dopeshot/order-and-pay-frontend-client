import { Context } from ".."



//load Menu from Backend via effect
export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = true
    state.menu.menu = await effects.menu.backend.getCurrentMenu()
    state.menu.isLoadingMenu = false
    //console.log(state.menu.isLoadingMenu)
}

export const closeDropDown = ({state}: Context) =>{
    state.menu.dropdownOpen = false
}
export const openDropDown = ({state}: Context) =>{
    state.menu.dropdownOpen = true
}
