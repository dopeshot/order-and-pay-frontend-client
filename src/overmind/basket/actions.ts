

import { Context } from ".."
import { Item } from "./state"


export const putInBasket = ({ state }: Context, item: Item) => {
    state.basket.basket.items.push(item)
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

}