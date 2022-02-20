import { Context } from ".."

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

export const priceHandler = ({ state }: Context, priceDish: number) => {
    state.menu.sum = state.menu.sum + priceDish
    return state.menu.sum
}

export const priceReset = ({ state }: Context) => {
    state.menu.sum = 0
    return state.menu.sum
}
