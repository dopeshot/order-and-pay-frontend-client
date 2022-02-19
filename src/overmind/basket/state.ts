import { derived } from "overmind"
import { config } from ".."
import { Basket } from "../../pages/Basket/basket"
import { getBasketPrice } from "../../services/utilities"
import { ChoiceType } from "../menu/state"

export type Basket = {
    price: number,
    items: Item[],
    itemsCount: number
    tableId: string
}

export type Item = {
    dishId: string,
    count: number,
    pickedChoices: (PickedRadio | PickedCheckbox)[],
    note: string,
}

export type PickedRadio = {
    id: number,
    type: ChoiceType.RADIO,
    valueId: number
}

export type PickedCheckbox = {
    id: number,
    type: ChoiceType.CHECKBOX,
    valueId: number[]
}


export type SendBasket = {
    price: number,
    items: SendItem[],
    itemsCount: number
    tableNumber: string
}

export type SendItem = {
    dishId: string,
    count: number,
    pickedChoices: PickedChoice[],
    note: string,
}

export type PickedChoice = {
    id: number
    valueId: number[]
}


export type State = {
    basket: Basket
}


export const state: State = {
    basket: {
        price: derived((state: State, rootState: typeof config.state) => getBasketPrice(rootState.basket.basket, rootState.menu.MenuResponseObj)),
        items: [],
        itemsCount: derived((state: Basket) => state.items.reduce((sum, dish) => sum + dish.count, 0)),
        tableId: `1`


    }
}
