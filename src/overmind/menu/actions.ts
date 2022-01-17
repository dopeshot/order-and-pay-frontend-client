import { Context } from ".."
import { Dish } from "./state"

export const loadMenu = async ({ state, effects }: Context) => {
    state.menu.isLoadingMenu = false

    try {
        const response = await effects.menu.getMenu()
        state.menu.menu = await response.data

        /* Pushes the indexes each dish has in the menu.dishes array
        * into a separate array called dishesIndexArray that each category has.
        * This array consisting of indexes is then used to properly display 
        * all dishes in the category they belong to. */
        state.menu.menu.categories.forEach((category, index) => {
            const dishesIndexArray: number[] = []
            state.menu.menu.dishes.forEach((dish, index) => {
                if (dish.choices) {
                    dish.choices.forEach(choice => {
                        choice.options.forEach(option => {
                            option.isChecked = false
                            option.priceDish = 0
                        })
                    })
                }

                if (dish.category === category._id) {
                    dishesIndexArray.push(index)
                }
            });
            category.dishesIndex = dishesIndexArray
            category.index = index
        });
    } catch (error) {
        console.log("Error at menu load", error)
    }

    state.menu.isLoadingMenu = false
}

export const checkboxHandler = ({ state }: Context, { id, currentPrice }: { id: string, currentPrice: number }) => {
    const dish: Dish | undefined = state.menu.menu.dishes.find((dish: Dish) => dish._id === id)

    if (!dish)
        return

    dish.choices.forEach(choice => {
        choice.options.forEach(option => {
            priceHandler(currentPrice, option.priceDish)
            option.isChecked = !option.isChecked
        })
    })
}

export const priceHandler = (currentPrice: number, priceDish: number) => {
    console.log(currentPrice)
    priceDish = priceDish + currentPrice
    console.log("end sum: " + priceDish)
}
