
import { Context } from ".."
import { Item } from "./state"


export const putInBasket = ({ state }: Context, item: Item) => {
    state.basket.basket.items.push(item)
    return
}
export const removeFromBasket = ({ state }: Context, id: string) => {
    state.basket.basket.items.forEach((item, index) => {
        if (item.dishId === id)
            state.basket.basket.items.splice(index, 1)

    })
}