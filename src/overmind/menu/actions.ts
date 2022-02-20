import { Context } from ".."

//loads menu on startup
export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = false

    try {
        const response = await effects.menu.getMenu()
        state.menu.MenuResponseObj = response.data
    } catch (error) {
        console.log(error)
    }
    state.menu.isLoadingMenu = false
}

//updates price for checkboxes
export const priceHandler = ({ state }: Context, priceDish: number) => {
    state.menu.sum = state.menu.sum + priceDish
    return state.menu.sum
}
//resets price when closing menuitem
export const priceReset = ({ state }: Context) => {
    state.menu.sum = 0
    return state.menu.sum
}
