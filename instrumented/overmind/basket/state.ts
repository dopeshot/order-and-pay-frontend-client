import { derived } from "overmind"
import { ChoiceType } from "../menu/state"

export type Basket = {
    price: number,
    items: Item[],
    itemsCount: number
}

export type Item = {
    dishId: string,
    count: number,
    pickedChoices: (PickedRadio | PickedCheckbox)[],
    tableId: string,
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


export type State = {
    basket: Basket
}


export const state: State = {
    basket: {
        price: 0,
        items: [],
        itemsCount: derived((state: Basket) => state.items.reduce((sum, dish) => sum + dish.count, 0))
    }
}
