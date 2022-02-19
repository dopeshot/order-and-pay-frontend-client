import axios from "axios"
import { Context } from ".."
import { sortChoices } from "../../services/utilities"
import { ChoiceType } from "../menu/state"
import { Item, PickedChoice, SendBasket, SendItem } from "./state"

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
export const clearBasket = ({ state }: Context) => {


    state.basket.basket.items = []
    console.log(state.basket.basket)

}

export const sendOrder = async ({ state, effects }: Context): Promise<boolean> => {
    const basket = state.basket.basket

    try {
        let sendBasket: SendBasket = {
            price: basket.price,
            items: [],
            itemsCount: basket.itemsCount,
            tableNumber: basket.tableId
        }
        let newItems: SendItem[] = []

        basket.items.forEach((item, index) => {
            let pickedChoices: PickedChoice[] = []
            item.pickedChoices.forEach(pChoice => {
                if (pChoice.type === ChoiceType.RADIO) {
                    let pickedChoice: PickedChoice = { id: pChoice.id, valueId: [] }
                    pickedChoice.valueId.push(pChoice.valueId)
                    pickedChoices.push(pickedChoice)
                } else {
                    let pickedChoice: PickedChoice = { id: pChoice.id, valueId: pChoice.valueId }
                    pickedChoices.push(pickedChoice)
                }
            })
            let newItem: SendItem = {
                dishId: item.dishId,
                count: item.count,
                pickedChoices: pickedChoices,
                note: item.note
            }

            newItems.push(newItem)
        })

        sendBasket.items = newItems

        await effects.basket.sendOrder(sendBasket)
        return true
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error(error)
        }
    }
    return false
}