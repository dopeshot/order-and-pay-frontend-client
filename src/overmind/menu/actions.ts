import { Context } from ".."

export const loadMenu = async ({ state, effects }: Context) => {
    //const { menu } = useAppState().menu
    state.menu.isLoadingMenu = false

    try {
        const response = await effects.menu.getMenu()
        state.menu.MenuResponseObj = response.data


        /* Pushes the indexes each dish has in the menu.dishes array
        * into a separate array called dishesIndexArray that each category has.
        * This array consisting of indexes is then used to properly display 
        * all dishes in the category they belong to. */
        // check if necessary        
        // state.menu.menu.categories.forEach((category, index) => {
        //     const dishesIndexArray: number[] = []
        //     state.menu.menu.dishes.forEach((dish, index) => {
        //         if (dish.choices) {
        //             dish.choices.forEach(choice => {
        //                 choice.options.forEach(option => {
        //                     option.isChecked = false
        //                     option.priceDish = 0
        //                 })
        //             })
        //         }

        //         if (dish.category === category._id) {
        //             dishesIndexArray.push(index)
        //         }
        //     });
        //     category.dishesIndex = dishesIndexArray
        //     category.index = index
        // });
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
