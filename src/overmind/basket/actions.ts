import { Context } from ".."
import { sortChoices } from "../../services/utilities"
import { Item } from "./state"

export const putInBasket = ({ state }: Context, item: Item) => {

    sortChoices(item)
    const currentDishes = state.basket.basket.items

    currentDishes.forEach(dish => sortChoices(dish))

    const index = currentDishes.findIndex((o) => JSON.stringify(o) === JSON.stringify(item))

    if (index === -1) {
        currentDishes.push(item)
        return
    }

    currentDishes[index].count++
    return
}

export const removeFromBasket = ({ state }: Context, index: number) => {

    state.basket.basket.items.splice(index, 1)

}

export const addCount = ({ state }: Context, index: number) => {
    state.basket.basket.items[index].count += 1

}
export const subCount = ({ state }: Context, index: number) => {

    state.basket.basket.items[index].count += -1
    if (state.basket.basket.items[index].count == 0) {
        state.basket.basket.items.splice(index, 1)
    }



}