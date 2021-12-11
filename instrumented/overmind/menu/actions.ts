import { Context } from ".."

export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = true

    try {
        const response = await effects.menu.getMenu()
        state.menu.menu = response.data

        /* Pushes the indexes each dish has in the menu.dishes array
        * into a separate array called dishesIndexArray that each category has.
        * This array consisting of indexes is then used to properly display 
        * all dishes in the category they belong to. */
        state.menu.menu.categories.forEach((category, index) => {
            const dishesIndexArray: number[] = []
            state.menu.menu.dishes.forEach((dish, index) => {
                if (dish.category === category._id) {
                    dishesIndexArray.push(index)
                }
            });
            category.dishesIndex = dishesIndexArray
            category.index = index
        });
    } catch (error) {
        console.log(error)
    }

    state.menu.isLoadingMenu = false
}
