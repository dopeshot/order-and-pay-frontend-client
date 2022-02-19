
import { Context } from ".."
import { sortChoices } from "../../services/utilities"
import { Item } from "./state"

export const putInBasket = ({ state }: Context, item: Item) => {

    sortChoices(item)
    const currentDishes = state.basket.basket.items

    currentDishes.forEach(dish => sortChoices(dish))

    const currentDishesWithoutCount = currentDishes.map(dish => {
        const { count, ...rest } = dish
        return rest
    })

    const { count, ...itemWithoutCount }: any = item


    const index = currentDishesWithoutCount.findIndex((o) => JSON.stringify(o) === JSON.stringify(itemWithoutCount))
    if (index === -1) {
        currentDishes.push(item)
        console.log("item", currentDishes)
        return
    }
    currentDishes[index].count += item.count;
    console.log("item", currentDishes)
    return


}

export const addCount = ({ state }: Context, index: number) => {
    state.basket.basket.items[index].count += 1

}
export const subCount = ({ state }: Context, index: number) => {

    state.basket.basket.items[index].count += -1
    if (state.basket.basket.items[index].count === 0) {
        state.basket.basket.items.splice(index, 1)
    }



}