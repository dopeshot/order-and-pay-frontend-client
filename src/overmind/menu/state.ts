import { type } from "os"

export type Menu = {
    name: string,
    dishes: Dish[],
    categories: Category[]
}

export type Dish = {
    _id: string,
    name: string,
    description: string,
    labels: string[],
    allergens: string[],
    category: string,
    price: number,
    img: string,
    choices: Choice[]
}

export type Choice = {
    name: string,
    type: string,
    options: Option[]
}

export type Option = {
    name: string,
    price: number
}

export type Category = {
    _id: string,
    name: string,
    index: number,
    description: string,
    dishesIndex: number[],
}
//Full menu
//TODO: Complete Menu Object
export type MenuType = {
    name: string,
    dishes: Dish[],
    categories: Category[]
}

export type State = {
    isLoadingDishes: boolean,
    isLoadingMenu: boolean,
    menu: MenuType
}

export const state: State = {
    isLoadingDishes: false,
    isLoadingMenu: false,
    menu: {
        name: "",
        dishes: [],
        categories: []
    }
}
