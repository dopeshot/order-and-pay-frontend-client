
export type Basket = {
    price: number,
    items: Item[]

}

export type Item = {
    dishId: string,
    count: number,
    pickedChoices: PickedChoice[],
    note: string
}

export type PickedChoice = {

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
