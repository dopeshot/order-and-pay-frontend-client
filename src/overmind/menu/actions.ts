import { Context } from ".."



//load Menu from Backend via effect
export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = true
    state.menu.menu = await effects.menu.backend.getCurrentMenu()
    state.menu.isLoadingMenu = false
    //console.log(state.menu.isLoadingMenu)
}

export const nameChanger = ({state}: Context, name : string) =>{
    state.menu.name = name
}
