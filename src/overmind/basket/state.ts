import { ChoiceType, Dish } from "../menu/state"

export type Basket = {
    price: number,
    items: Item[]
}

export type Item = {
    dishId: string,
    count: number,
    pickedChoices: (PickedRadio | PickedCheckbox)[],
    note: string,
    dish: Dish
}

export type PickedRadio = {
    id: number,
    type: ChoiceType,
    valueId: number
}

export type PickedCheckbox = {
    id: number,
    type: ChoiceType,
    valueId: number[]
}


export type State = {
    basket: Basket
}


export const state: State = {
    basket: {
        price: 0,
        items: []
    }
}
