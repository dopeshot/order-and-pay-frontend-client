import { Context } from ".."

export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = false

    try {
        const response = await effects.menu.getMenu()
        state.menu.MenuResponseObj = response.data


        /* Pushes the indexes each dish has in the menu.dishes array
        * into a separate array called dishesIndexArray that each category has.
        * This array consisting of indexes is then used to properly display 
        * all dishes in the category they belong to. */
    } catch (error) {
        console.log(error)
    }

    state.menu.isLoadingMenu = false
}
