import { Context } from ".."

export const loadMenu = async ({ state, effects }: Context) => {
    //const { menu } = useAppState().menu
    state.menu.isLoadingMenu = false

    try {
        const response = await effects.menu.getMenu()
        state.menu.MenuResponseObj = response.data


    } catch (error) {
        console.log("Error at menu load", error)
    }

    state.menu.isLoadingMenu = false
}

export const priceHandler = ({ state }: Context, priceDish: number) => {
    //currentPrice = priceDish + currentPrice
    state.menu.sum = state.menu.sum + priceDish
    console.log("end sum: " + state.menu.sum)
    return state.menu.sum
}

export const priceReset = ({ state }: Context) => {
    //currentPrice = priceDish + currentPrice
    state.menu.sum = 0
    console.log("end sum: " + state.menu.sum)
    return state.menu.sum
}
